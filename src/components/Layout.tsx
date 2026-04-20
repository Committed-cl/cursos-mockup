import { LogOut, User, Menu, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: string;
}

export default function Layout({ children, title, breadcrumb }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="bg-brand-primary h-16 flex items-center justify-between px-6 text-white shrink-0 header-shadow z-50 sticky top-0">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-white/70 hover:bg-white/10 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-2 rounded">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xs border-2 border-white">PLAT</div>
              </div>
              <div className="h-6 w-px bg-white/20"></div>
              <div 
                className="font-bold text-lg tracking-widest text-white cursor-pointer flex items-center gap-2"
                onClick={() => navigate('/dashboard')}
              >
                METRO<span className="text-brand-accent">GAS</span>
                <span className="ml-2 text-[10px] font-semibold text-white/70 tracking-widest hidden sm:inline uppercase">Capacitación Técnica</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Alumno</p>
              <p className="text-sm font-medium">Juan Pérez</p>
            </div>
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold border-2 border-white/30 shadow-sm">
                JP
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                <button onClick={() => navigate('/certificates')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <User className="w-4 h-4" /> Mi Perfil
                </button>
                <button onClick={() => navigate('/certificates')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Mis Certificados
                </button>
                <hr className="my-1 border-gray-100" />
                <button onClick={() => navigate('/login')} className="w-full text-left px-4 py-2 text-sm text-brand-error hover:bg-red-50 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb / Sub-nav */}
      {breadcrumb && (
        <nav className="bg-white border-b border-slate-200 h-10 flex items-center px-6 shrink-0 z-40">
          <div className="max-w-7xl mx-auto w-full">
             <div className="flex items-center text-[11px] space-x-2 text-slate-500 font-medium">
               <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="hover:text-brand-primary">Mis Cursos</a>
               <span className="text-slate-300">/</span>
               <span className="text-slate-800 truncate max-w-[200px] md:max-w-none">{breadcrumb}</span>
             </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 Metrogas Chile. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-brand-secondary font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-brand-primary">Soporte técnico</a>
            <a href="#" className="hover:text-brand-primary">Políticas de privacidad</a>
            <a href="#" className="hover:text-brand-primary">Ayuda</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
