'use client';

import { motion } from 'framer-motion';

// Datos de la historia (luego estos podrían venir de una API)
const eventos = [
  { year: '1901', titulo: 'Fundación del Club', descripcion: 'Nace el Alianza Lima, fundado por jóvenes peruanos en la calle Cotabambas.' },
  { year: '1927', titulo: 'El Primer Título', descripcion: 'Se corona campeón por primera vez, iniciando una era de gloria.' },
  { year: '1978', titulo: 'La Estrella del 78', descripcion: 'Una de las generaciones más recordadas, con Teófilo Cubillas brillando en el equipo.' },
  { year: '2003', titulo: 'El Título del Centenario', descripcion: 'En el año de los 100 años, el club vuelve a levantar la copa, un momento histórico.' },
  { year: '2017', titulo: 'La Gloria del 2017', descripcion: 'Un campeonato inolvidable que rompió una racha de 11 años sin títulos nacionales.' },
  { year: '2026', titulo: '125 Años de Eternidad', descripcion: 'Celebramos un siglo y cuarto de historia, pasión y aliancismo.' },
];

export default function TimelineHistoria() {
  return (
    <section className="py-24 bg-[#0B132B] text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-20 text-blue-400 uppercase tracking-widest"
        >
          Nuestra Historia
        </motion.h2>

        {/* Línea vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-0 w-1 bg-blue-900/50 hidden md:block"></div>

        <div className="space-y-12">
          {eventos.map((evento, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Contenido (Texto) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-[45%] bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
                >
                  <span className="text-3xl font-black text-blue-400 mb-2 block">{evento.year}</span>
                  <h3 className="text-xl font-bold mb-2">{evento.titulo}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{evento.descripcion}</p>
                </motion.div>

                {/* Punto en la línea de tiempo */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="hidden md:flex w-10 h-10 bg-blue-500 rounded-full border-4 border-[#0B132B] items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>

                {/* Espacio vacío para el otro lado */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}