import { Router, Request, Response } from 'express';
import { newsletterService } from '../services/newsletter.service';
import { newsletterDb } from '../db.newsletter';
import crypto from 'crypto';

const router = Router();

/**
 * POST /api/newsletter/subscribe
 * Suscribirse al newsletter
 */
router.post('/subscribe', async (req: Request, res: Response) => {
  try {
    const { email, nombre, tipoMascota } = req.body;

    // Validar campos requeridos
    if (!email || !nombre || !tipoMascota) {
      return res.status(400).json({ error: 'Campos requeridos: email, nombre, tipoMascota' });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Validar tipo de mascota
    if (!['perro', 'gato', 'ambos'].includes(tipoMascota)) {
      return res.status(400).json({ error: 'Tipo de mascota inválido' });
    }

    // Generar token de confirmación
    const token = crypto.randomBytes(32).toString('hex');

    // Guardar en base de datos local
    await newsletterDb.createSubscriber({
      email,
      nombre,
      tipoMascota,
      tokenConfirmacion: token,
    });

    // Suscribir en Brevo
    try {
      await newsletterService.subscribeContact({
        email,
        nombre,
        tipoMascota,
      });
    } catch (error) {
      console.error('Error subscribing to Brevo:', error);
      // Continuar aunque falle Brevo
    }

    // Enviar email de confirmación
    try {
      const confirmUrl = `${process.env.VITE_APP_URL || 'https://fontfreda.net'}/confirmar-newsletter?token=${token}`;

      await newsletterService.sendEmail({
        to: email,
        subject: '¡Bienvenido a Fontfreda Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #003D82;">¡Hola ${nombre}!</h2>
            <p>Gracias por suscribirte a nuestro newsletter. Estamos emocionados de compartir contigo consejos, promociones exclusivas y actualizaciones sobre nuestros servicios.</p>
            
            <p style="margin: 30px 0;">
              <a href="${confirmUrl}" style="background-color: #003D82; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Confirmar Suscripción
              </a>
            </p>
            
            <p>O copia este enlace en tu navegador:</p>
            <p style="word-break: break-all; color: #666;">${confirmUrl}</p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px;">
              Si no solicitaste esta suscripción, puedes ignorar este email.
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      // Continuar aunque falle el email
    }

    res.json({
      success: true,
      message: 'Suscripción exitosa. Revisa tu email para confirmar.',
    });
  } catch (error) {
    console.error('Error in subscribe:', error);
    res.status(500).json({ error: 'Error al suscribirse. Por favor intenta de nuevo.' });
  }
});

/**
 * POST /api/newsletter/confirm
 * Confirmar suscripción
 */
router.post('/confirm', async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token requerido' });
    }

    const confirmed = await newsletterDb.confirmSubscription(token);

    if (!confirmed) {
      return res.status(400).json({ error: 'Token inválido o expirado' });
    }

    res.json({
      success: true,
      message: 'Suscripción confirmada. ¡Gracias!',
    });
  } catch (error) {
    console.error('Error in confirm:', error);
    res.status(500).json({ error: 'Error al confirmar suscripción' });
  }
});

/**
 * POST /api/newsletter/unsubscribe
 * Desuscribirse
 */
router.post('/unsubscribe', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requerido' });
    }

    await newsletterDb.unsubscribe(email);

    // Desuscribir de Brevo
    try {
      await newsletterService.unsubscribeContact(email);
    } catch (error) {
      console.error('Error unsubscribing from Brevo:', error);
    }

    res.json({
      success: true,
      message: 'Te has desuscrito correctamente',
    });
  } catch (error) {
    console.error('Error in unsubscribe:', error);
    res.status(500).json({ error: 'Error al desuscribirse' });
  }
});

/**
 * POST /api/newsletter/preferences
 * Actualizar preferencias
 */
router.post('/preferences', async (req: Request, res: Response) => {
  try {
    const { email, frecuencia, recibirPromociones, recibirContenido, recibirActualizaciones } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requerido' });
    }

    const subscriber = await newsletterDb.getSubscriberByEmail(email);

    if (!subscriber) {
      return res.status(404).json({ error: 'Suscriptor no encontrado' });
    }

    await newsletterDb.updatePreferences(subscriber.id, {
      frecuencia_emails: frecuencia,
      recibir_promociones: recibirPromociones,
      recibir_contenido_educativo: recibirContenido,
      recibir_actualizaciones: recibirActualizaciones,
    });

    res.json({
      success: true,
      message: 'Preferencias actualizadas',
    });
  } catch (error) {
    console.error('Error in updatePreferences:', error);
    res.status(500).json({ error: 'Error al actualizar preferencias' });
  }
});

/**
 * GET /api/newsletter/stats/:email
 * Obtener estadísticas del suscriptor
 */
router.get('/stats/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    const subscriber = await newsletterDb.getSubscriberByEmail(email);

    if (!subscriber) {
      return res.status(404).json({ error: 'Suscriptor no encontrado' });
    }

    const preferences = await newsletterDb.getPreferences(subscriber.id);

    res.json({
      email: subscriber.email,
      nombre: subscriber.nombre,
      tipoMascota: subscriber.tipo_mascota,
      estado: subscriber.estado,
      fechaSuscripcion: subscriber.fecha_suscripcion,
      aperturas: subscriber.contador_aperturas,
      clics: subscriber.contador_clics,
      conversiones: subscriber.contador_conversiones,
      ingresosGenerados: subscriber.ingresos_generados,
      preferences,
    });
  } catch (error) {
    console.error('Error in getStats:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
});

/**
 * GET /api/newsletter/monthly-stats/:mes/:año
 * Obtener estadísticas mensuales
 */
router.get('/monthly-stats/:mes/:año', async (req: Request, res: Response) => {
  try {
    const { mes, año } = req.params;

    const mesNum = parseInt(mes);
    const añoNum = parseInt(año);

    if (isNaN(mesNum) || isNaN(añoNum) || mesNum < 1 || mesNum > 12) {
      return res.status(400).json({ error: 'Mes o año inválido' });
    }

    const stats = await newsletterDb.getMonthlyStats(mesNum, añoNum);

    res.json({
      totalSuscriptores: stats.total_suscriptores || 0,
      confirmados: stats.confirmados || 0,
      desuscritos: stats.desuscritos || 0,
      nuevosSuscriptores: stats.nuevos || 0,
      conversiones: stats.conversiones_totales || 0,
      ingresosGenerados: stats.ingresos_totales || 0,
    });
  } catch (error) {
    console.error('Error in getMonthlyStats:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas mensuales' });
  }
});

/**
 * GET /api/newsletter/test-connection
 * Verificar conexión con Brevo
 */
router.get('/test-connection', async (req: Request, res: Response) => {
  try {
    const result = await newsletterService.testConnection();
    res.json(result);
  } catch (error) {
    console.error('Error testing connection:', error);
    res.status(500).json({
      success: false,
      error: 'Error al conectar con Brevo',
    });
  }
});

export default router;
