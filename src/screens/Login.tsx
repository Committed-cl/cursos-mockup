import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import React from 'react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-brand-primary p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Capacitación Técnica</h1>
          <p className="text-white/70 text-sm mt-1">Plataforma de Certificación Industrial</p>
        </div>

        <div className="p-8">
          <div className="flex justify-center mb-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
             {/* Metrogas Placeholder Logo */}
             <div className="text-center font-bold text-xl tracking-widest text-[#1B3A5C]">
                METRO<span className="text-brand-accent">GAS</span>
             </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                defaultValue="juan.perez@metrogas.cl"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                placeholder="ejemplo@metrogas.cl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary hover:bg-[#152e4a] text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-brand-primary/20"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <a href="#" className="text-brand-primary hover:underline font-medium">¿Olvidaste tu contraseña?</a>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400 uppercase tracking-widest">
          Sistema de Capacitación v4.2.1 - Metrogas Chile
        </div>
      </motion.div>
    </div>
  );
}
