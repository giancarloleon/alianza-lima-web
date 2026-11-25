'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ContadorTitulos() {
  const ref = useRef(null);
  // Detecta cuando la sección entra en la pantalla
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animación del número
      const controls = animate(0, 26, {
        duration: 2.5, // 2.5 segundos
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    // Usamos un fondo blanco para contrastar con el azul oscuro de arriba
    <section ref={ref} className="py-24 bg-white text-[#0B132B] relative z-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-widest text-blue-900"
        >
          Palmarés Histórico
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Contador Animado Principal */}
          <div className="flex flex-col items-center">
            <span className="text-7xl md:text-9xl font-black text-blue-600 leading-none">
              {count}
            </span>
            <span className="text-lg font-bold mt-4 uppercase tracking-wide text-gray-600">
              Títulos Nacionales
            </span>
          </div>

          {/* Datos Estáticos */}
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0">
             <span className="text-5xl font-black text-[#0B132B]">125</span>
             <span className="text-sm font-bold mt-2 uppercase tracking-wide text-gray-500">Años de Historia</span>
          </div>

          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0">
             <span className="text-5xl font-black text-[#0B132B]">1901</span>
             <span className="text-sm font-bold mt-2 uppercase tracking-wide text-gray-500">Año de Fundación</span>
          </div>

        </div>
      </div>
    </section>
  );
}