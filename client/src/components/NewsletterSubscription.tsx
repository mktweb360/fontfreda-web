import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';

interface NewsletterSubscriptionProps {
  variant?: 'default' | 'compact' | 'modal';
  onSuccess?: () => void;
}

export function NewsletterSubscription({ variant = 'default', onSuccess }: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipoMascota, setTipoMascota] = useState<'perro' | 'gato' | 'ambos'>('perro');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !nombre) {
      setStatus('error');
      setMessage('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      // Aquí irá la llamada a la API para guardar el suscriptor
      // Por ahora, simulamos la respuesta
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('¡Gracias por suscribirte! Revisa tu email para confirmar.');
      setEmail('');
      setNombre('');
      setTipoMascota('perro');
      
      if (onSuccess) {
        onSuccess();
      }

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Ocurrió un error. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {loading ? 'Suscribiendo...' : 'Suscribirse'}
          </Button>
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle size={16} />
              <span>{message}</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle size={16} />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-blue-600" size={24} />
            <h3 className="text-xl font-bold text-blue-900">Suscríbete a Nuestro Newsletter</h3>
          </div>
          <p className="text-blue-800 mb-4 text-sm">
            Recibe consejos semanales, promociones exclusivas y actualizaciones sobre nuestros servicios.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              disabled={loading}
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full"
            />
            <Select value={tipoMascota} onValueChange={(value: any) => setTipoMascota(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de mascota" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="perro">Tengo Perro</SelectItem>
                <SelectItem value="gato">Tengo Gato</SelectItem>
                <SelectItem value="ambos">Tengo Ambos</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? 'Suscribiendo...' : 'Suscribirse Ahora'}
            </Button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded">
                <CheckCircle size={18} />
                <span className="text-sm">{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded">
                <AlertCircle size={18} />
                <span className="text-sm">{message}</span>
              </div>
            )}
          </form>

          <p className="text-xs text-blue-600 mt-3 text-center">
            No compartimos tu email. Puedes desuscribirte en cualquier momento.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Suscríbete a Nuestro Newsletter</h2>
          <p className="text-gray-600">
            Recibe consejos semanales, promociones exclusivas y actualizaciones sobre nuestros servicios de cuidado para perros y gatos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              disabled={loading}
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full"
            />
          </div>

          <Select value={tipoMascota} onValueChange={(value: any) => setTipoMascota(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="¿Qué tipo de mascota tienes?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="perro">Tengo Perro 🐕</SelectItem>
              <SelectItem value="gato">Tengo Gato 🐱</SelectItem>
              <SelectItem value="ambos">Tengo Ambos 🐕🐱</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold"
          >
            {loading ? 'Suscribiendo...' : 'Suscribirse Ahora'}
          </Button>

          {status === 'success' && (
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900">¡Suscripción Exitosa!</p>
                <p className="text-green-700 text-sm">{message}</p>
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg border border-red-200">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-red-700 text-sm">{message}</p>
              </div>
            </div>
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">2x</p>
              <p className="text-sm text-gray-600">Newsletters por Semana</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-600">Contenido Exclusivo</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">∞</p>
              <p className="text-sm text-gray-600">Desuscribirse Fácil</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Protegemos tu privacidad. Puedes desuscribirte en cualquier momento. 
          <a href="/privacidad" className="text-blue-600 hover:underline ml-1">Política de Privacidad</a>
        </p>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
