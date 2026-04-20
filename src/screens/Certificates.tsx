import Layout from '../components/Layout';
import { Download, QrCode, FileText, CheckCircle2, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const certificates = [
  {
    id: 1,
    course: "Procedimiento de Soldadura Fuerte de Tuberías de Cobre",
    code: "PRC-MG-026",
    date: "20 de Abril, 2026",
    score: "90%",
    status: "Vigente",
    certId: "CERT-2026-00142"
  },
  {
    id: 2,
    course: "Normativa de Seguridad DS N°66",
    code: "NORM-MG-001",
    date: "15 de Marzo, 2026",
    score: "85%",
    status: "Vigente",
    certId: "CERT-2026-00085"
  }
];

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Layout>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-brand-primary tracking-tight">Mis Certificados</h1>
              <p className="text-gray-500 mt-2 font-medium">Aquí puedes ver y descargar tus acreditaciones técnicas aprobadas.</p>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Buscar curso..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary outline-none"
                  />
               </div>
               <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
                  <Filter className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                         <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Curso</th>
                         <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha / Aprobación</th>
                         <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Nota</th>
                         <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estado</th>
                         <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acciones</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                      {certificates.map((cert) => (
                        <motion.tr 
                          key={cert.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="hover:bg-gray-50/50 transition-colors group"
                        >
                           <td className="px-8 py-6">
                              <div className="flex items-start gap-4">
                                 <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                    <FileText className="w-5 h-5" />
                                 </div>
                                 <div className="space-y-1">
                                    <p className="font-bold text-brand-primary leading-tight">{cert.course}</p>
                                    <div className="flex items-center gap-2">
                                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cert.code}</span>
                                       <span className="text-[10px] text-gray-300">•</span>
                                       <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">{cert.certId}</span>
                                    </div>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <p className="text-sm font-semibold text-gray-700">{cert.date}</p>
                              <p className="text-xs text-gray-400">Vence: 20/04/2028</p>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className="text-lg font-black text-brand-primary">{cert.score}</span>
                           </td>
                           <td className="px-8 py-6">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-brand-success rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-100">
                                 <CheckCircle2 className="w-3.5 h-3.5" /> {cert.status}
                              </div>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <div className="flex items-center justify-end gap-3">
                                 <button className="p-2 text-gray-400 hover:text-brand-primary hover:bg-white rounded-lg transition-all" title="Ver código QR">
                                    <QrCode className="w-5 h-5" />
                                 </button>
                                 <button className="flex items-center gap-2 bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#152e4a] transition-all shadow-md shadow-brand-primary/10">
                                    <Download className="w-4 h-4" /> PDF
                                 </button>
                              </div>
                           </td>
                        </motion.tr>
                      ))}
                   </tbody>
                </table>
             </div>
             
             {certificates.length === 0 && (
               <div className="p-20 text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-300">
                     <FileText className="w-10 h-10" />
                  </div>
                  <div className="max-w-xs mx-auto">
                     <p className="text-lg font-bold text-brand-primary">No tienes certificados aún</p>
                     <p className="text-sm text-gray-400">Completa tus cursos y aprueba las evaluaciones para generar tus acreditaciones.</p>
                  </div>
               </div>
             )}
          </div>

          {/* Validation Info */}
          <div className="bg-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10 flex flex-col md:flex-row items-center gap-8">
             <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-brand-primary/20 shadow-sm flex-shrink-0">
                <QrCode className="w-12 h-12 text-brand-primary" />
             </div>
             <div className="space-y-2 flex-1 md:text-left text-center">
                <h4 className="text-lg font-bold text-brand-primary">Verificación de autenticidad</h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                   Todos nuestros certificados cuentan con un código QR único de verificación. Los supervisores y clientes pueden escanear el código para validar la vigencia de la acreditación técnica en tiempo real desde nuestra base de datos central.
                </p>
             </div>
             <button className="whitespace-nowrap px-6 py-3 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-xl hover:bg-white transition-all text-sm shrink-0">
                Portal de Verificación
             </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
