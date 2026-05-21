import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function ConfirmarNewsletter() {
  const [location] = useLocation();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmSubscription = async () => {
      try {
        // Obtener token de la URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (!token) {
          setStatus('error');
          setMessage('Token no encontrado');
          return;
        }

        // Enviar confirmación al servidor
        const response = await fetch('/api/newsletter/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message || 'Suscripción confirmada exitosamente');
        } else {
          setStatus('error');
          setMessage(data.error || 'Error al confirmar suscripción');
        }
      } catch (error) {
        console.error('Error confirming subscription:', error);
        setStatus('error');
        setMessage('Error al confirmar suscripción');
      }
    };

    confirmSubscription();
  }, []);

  return (
    <>
      <SEO
        title="Confirmar suscripción al newsletter | Fontfreda"
        description="Página de confirmación de suscripción al newsletter de Fontfreda."
        canonical="https://www.fontfreda.net/confirmar-newsletter"
        language="es"
        noindex={true}
      />
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center">
              {status === 'loading' && (
                <div className="space-y-6">
                  <Loader className="w-16 h-16 text-blue-600 mx-auto animate-spin" />
                  <h1 className="text-3xl font-bold text-foreground">
                    Confirmando tu suscripción...
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Por favor espera mientras procesamos tu solicitud.
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="space-y-6">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                  <h1 className="text-3xl font-bold text-foreground">
                    ¡Suscripción Confirmada!
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {message}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                    <h2 className="font-semibold text-green-900 mb-3">¿Qué sigue?</h2>
                    <ul className="text-green-800 space-y-2 text-left">
                      <li>✓ Recibirás consejos semanales de cuidado para perros y gatos</li>
                      <li>✓ Acceso a promociones exclusivas para suscriptores</li>
                      <li>✓ Actualizaciones sobre nuestros servicios</li>
                      <li>✓ Contenido educativo premium</li>
                    </ul>
                  </div>
                  <a
                    href="/"
                    className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Volver a Inicio
                  </a>
                </div>
              )}

              {status === 'error' && (
                <div className="space-y-6">
                  <AlertCircle className="w-16 h-16 text-red-600 mx-auto" />
                  <h1 className="text-3xl font-bold text-foreground">
                    Error al Confirmar
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {message}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                    <p className="text-red-800 mb-4">
                      Posibles razones:
                    </p>
                    <ul className="text-red-700 space-y-2 text-left">
                      <li>• El enlace ha expirado</li>
                      <li>• El token es inválido</li>
                      <li>• Ya has confirmado tu suscripción</li>
                    </ul>
                  </div>
                  <div className="space-y-3 mt-8">
                    <a
                      href="/"
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Volver a Inicio
                    </a>
                    <p className="text-muted-foreground">
                      ¿Necesitas ayuda? <a href="/contacto" className="text-blue-600 hover:underline">Contáctanos</a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
