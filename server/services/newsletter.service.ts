import axios, { AxiosError } from 'axios';

interface SubscriberData {
  email: string;
  nombre: string;
  tipoMascota: 'perro' | 'gato' | 'ambos';
}

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class NewsletterService {
  private apiKey = process.env.BREVO_API_KEY;
  private apiUrl = 'https://api.brevo.com/v3';
  private senderEmail = 'noreply@fontfreda.net';
  private senderName = 'Fontfreda';

  private headers = {
    'api-key': this.apiKey,
    'Content-Type': 'application/json',
  };

  constructor() {
    if (!this.apiKey) {
      console.warn('BREVO_API_KEY not configured. Newsletter service will not work.');
    }
  }

  /**
   * Suscribir nuevo contacto en Brevo
   */
  async subscribeContact(data: SubscriberData) {
    if (!this.apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    try {
      const listId = this.getListIdByPetType(data.tipoMascota);

      const response = await axios.post(
        `${this.apiUrl}/contacts`,
        {
          email: data.email,
          attributes: {
            NOMBRE: data.nombre,
            TIPO_MASCOTA: data.tipoMascota,
            FECHA_SUSCRIPCION: new Date().toISOString(),
          },
          listIds: [listId],
          updateEnabled: true,
        },
        { headers: this.headers }
      );

      return {
        success: true,
        contactId: response.data.id,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error subscribing contact to Brevo:', axiosError.response?.data);
      throw new Error(`Failed to subscribe contact: ${axiosError.message}`);
    }
  }

  /**
   * Enviar email transaccional
   */
  async sendEmail(data: EmailData) {
    if (!this.apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    try {
      const response = await axios.post(
        `${this.apiUrl}/smtp/email`,
        {
          sender: {
            name: this.senderName,
            email: this.senderEmail,
          },
          to: [
            {
              email: data.to,
            },
          ],
          subject: data.subject,
          htmlContent: data.html,
          textContent: data.text || data.html,
        },
        { headers: this.headers }
      );

      return {
        success: true,
        messageId: response.data.messageId,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error sending email via Brevo:', axiosError.response?.data);
      throw new Error(`Failed to send email: ${axiosError.message}`);
    }
  }

  /**
   * Obtener lista ID según tipo de mascota
   */
  private getListIdByPetType(tipoMascota: string): number {
    const listIds: Record<string, number> = {
      perro: 2,
      gato: 3,
      ambos: 4,
    };
    return listIds[tipoMascota] || 2;
  }

  /**
   * Obtener estadísticas de contacto
   */
  async getContactStats(email: string) {
    if (!this.apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    try {
      const response = await axios.get(
        `${this.apiUrl}/contacts/${email}`,
        { headers: this.headers }
      );

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        return null;
      }
      console.error('Error getting contact stats from Brevo:', axiosError.response?.data);
      throw new Error(`Failed to get contact stats: ${axiosError.message}`);
    }
  }

  /**
   * Actualizar preferencias de suscriptor
   */
  async updatePreferences(email: string, preferences: Record<string, any>) {
    if (!this.apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    try {
      await axios.put(
        `${this.apiUrl}/contacts/${email}`,
        {
          attributes: preferences,
        },
        { headers: this.headers }
      );

      return { success: true };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error updating preferences in Brevo:', axiosError.response?.data);
      throw new Error(`Failed to update preferences: ${axiosError.message}`);
    }
  }

  /**
   * Desuscribir contacto
   */
  async unsubscribeContact(email: string) {
    if (!this.apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    try {
      await axios.put(
        `${this.apiUrl}/contacts/${email}`,
        {
          attributes: {
            DESUSCRITO: true,
          },
        },
        { headers: this.headers }
      );

      return { success: true };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error unsubscribing contact from Brevo:', axiosError.response?.data);
      throw new Error(`Failed to unsubscribe contact: ${axiosError.message}`);
    }
  }

  /**
   * Verificar conexión con Brevo
   */
  async testConnection() {
    if (!this.apiKey) {
      return { success: false, error: 'BREVO_API_KEY not configured' };
    }

    try {
      const response = await axios.get(
        `${this.apiUrl}/account`,
        { headers: this.headers }
      );

      return {
        success: true,
        account: response.data.email,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message,
      };
    }
  }
}

export const newsletterService = new NewsletterService();
