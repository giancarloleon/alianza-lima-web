'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function EscudoParallax() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Ajustamos los tiempos para que el efecto empiece más rápido
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.9, 1.1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  
  // Los textos aparecen casi al inicio del scroll
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 0.95], [0, 1, 1, 0]);
  
  // La línea de la flecha crece al hacer scroll
  const arrowLineWidth = useTransform(scrollYProgress, [0.15, 0.35], ["0px", "80px"]);

  return (
    <section ref={ref} className="relative h-[100vh] bg-[#0B132B]">
      
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Escudo */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 w-64 h-64 md:w-[28rem] md:h-[28rem]"
        >
          <Image 
            src="/escudo.webp"
            alt="Escudo Alianza Lima"
            fill
            className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
          />
        </motion.div>

        {/* Contenedor de Textos y Flechas */}
        <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 hidden md:block pointer-events-none">
          
          {/* Detalle 1: Las Franjas (Izquierda) */}
          <div className="absolute top-[40%] left-[5%] xl:left-[15%] flex items-center">
            <div className="text-right mr-4">
              <h4 className="text-white font-bold text-xl">Las 3 Franjas</h4>
              <p className="text-gray-400 text-sm max-w-[200px]">Emblema del club y la camiseta que nos identifica.</p>
            </div>
            
            {/* Flecha apuntando a la derecha */}
            <div className="flex items-center">
              <motion.div style={{ width: arrowLineWidth }} className="h-[2px] bg-blue-500"></motion.div>
              {/* Triángulo de la flecha */}
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-blue-500 border-b-[6px] border-b-transparent"></div>
            </div>
          </div>

          {/* Detalle 2: Las Coronas (Derecha - Superior) */}
          <div className="absolute top-[25%] right-[5%] xl:right-[15%] flex items-center flex-row-reverse">
            <div className="text-left ml-4">
              <h4 className="text-white font-bold text-xl">Las 3 Coronas</h4>
              <p className="text-gray-400 text-sm max-w-[200px]">Simbolizan las 3 veces que Lima fue coronada como Ciudad de los Reyes.</p>
            </div>
            
            {/* Flecha apuntando a la izquierda */}
            <div className="flex items-center">
              {/* Triángulo de la flecha */}
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-blue-500 border-b-[6px] border-b-transparent"></div>
              <motion.div style={{ width: arrowLineWidth }} className="h-[2px] bg-blue-500"></motion.div>
            </div>
          </div>

          {/* Detalle 3: La Estrella (Derecha - Inferior) */}
          <div className="absolute top-[60%] right-[5%] xl:right-[15%] flex items-center flex-row-reverse">
            <div className="text-left ml-4">
              <h4 className="text-white font-bold text-xl">La Estrella</h4>
              <p className="text-gray-400 text-sm max-w-[200px]">El faro que guía nuestro camino a la gloria.</p>
            </div>
            
            {/* Flecha apuntando a la izquierda */}
            <div className="flex items-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-blue-500 border-b-[6px] border-b-transparent"></div>
              <motion.div style={{ width: arrowLineWidth }} className="h-[2px] bg-blue-500"></motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}