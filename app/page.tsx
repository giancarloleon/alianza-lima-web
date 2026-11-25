'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from './context/ThemeContext'; 

import Header from './Header';
import ContadorTitulos from './ContadorTitulos';
import TimelineHistoria from './TimelineHistoria';
import EscudoParallax from './EscudoParallax';
import MuseoLeyendas from './MuseoLeyendas';
import Footer from './Footer';
import SelectorCamisetas from './SelectorCamisetas';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
const isLight = theme === 'light';
const isThird = theme === 'third';

  return (
    <>
      <Header />
      
                                <main 
        className={`min-h-screen overflow-hidden relative transition-colors duration-500 ${
          isDark ? 'bg-white text-[#0B132B]' : 
          isLight ? 'bg-white text-[#0B132B]' : 
          'bg-[#F8FAFC] text-[#0B132B]' 
        }`}
      >


        {/* FONDO CON TRIÁNGULOS (Solo para la Alterna - dark) */}
        {isDark && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              {/* 1. Fondo blanco base */}
              <rect width="100%" height="100%" fill="#ffffff" />
              
              {/* 2. Franja central azul (del 35% al 65%) */}
              <rect x="27%" y="0" width="45%" height="100%" fill="#0B132B" />

              {/* 3. LOS TRIÁNGULOS (Zigzag a los lados de la franja) */}
              <defs>
                {/* Patrón de triángulos blancos (apuntando a la derecha) */}
                <pattern id="zigzag" width="16" height="20" patternUnits="userSpaceOnUse">
                  <polygon points="0,0 16,8 0,16" fill="#ffffff" />
                </pattern>
              </defs>

              {/* LADO IZQUIERDO: Pegado al borde del 35% */}
              {/* Dibujamos un rectángulo blanco con el patrón, justo en el borde izquierdo de la franja */}
              <rect 
                x="35%" 
                y="0" 
                width="15px" 
                height="100%" 
                fill="url(#zigzag)" 
                style={{ transform: 'translateX(63.1%) scaleX(-1)' }} 
              />

              {/* LADO DERECHO: Pegado al borde del 65% */}
              {/* Para que apunten hacia la izquierda, usamos un truco: dibujamos el patrón y lo volteamos con un grupo */}
              <g style={{ transform: 'translateX(70.8%) scaleX(1)' }}>
                <rect 
                  x="0" 
                  y="0" 
                  width="15px" 
                  height="100%" 
                  fill="url(#zigzag)" 
                />
              </g>
            </svg>
          </div>
        )}

        {/* FONDO DE FRANJAS PARA LA TITULAR (light) */}
        {isLight && (
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #ffffff 0%, #ffffff 15%, #0B132B 15%, #0B132B 30%)',
              backgroundSize: '100% 100%',
            }}
          ></div>
        )}
        
        {/* ... resto del contenido (Hero, Contador, etc.) ... */}
        
        {/* =========================================
            SECCIÓN 1: HERO (Camiseta y Textos)
            ========================================= */}
        <section className="relative pt-32 pb-20">
          {/* Fondo decorativo del Hero */}
          <div className={`absolute inset-0 z-0 transition-colors duration-500 ${
            isDark ? 'bg-gradient-to-br from-blue-900/20 to-transparent' : 'bg-gradient-to-br from-red-100/20 to-transparent'
          }`}></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12">
              
              {/* SECCIÓN IZQUIERDA: Textos y Botones */}
                                        <motion.div 
                className={`w-full lg:w-1/2 flex flex-col items-start p-8 md:p-12 rounded-3xl backdrop-blur-md border ${
                  isDark ? 'bg-white/90 border-[#0B132B]/20 shadow-xl' : // Alterna: Blanca y texto oscuro
                  isLight ? 'bg-white/70 border-[#0B132B]/10 shadow-2xl' : 
                  'bg-white17 20[#0B132B]/10 shadow-xl'
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className={`font-semibold tracking-wider uppercase mb-4 ${
                  isDark ? 'text-blue-600' : 
                  isLight ? 'text-red-600' : 
                  'text-red-600'
                }`}>
                  Temporada 2026 / 125 Años de Historia
                </span>
                
                <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 ${
                  isDark ? 'text-[#0B132B]' : 
                  isLight ? 'text-[#0B132B]' : 
                  'text-[#0B132B]'
                }`}>
                  El Orgullo de <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                    isDark ? 'from-[#0B132B] to-blue-600' : 
                    isLight ? 'from-[#0B132B] to-red-600' : 
                    'from-[#0B132B] to-red-600'
                  }`}>
                    La Victoria
                  </span>
                </h1>
                
                <p className={`text-lg mb-10 max-w-lg ${
                  isDark ? 'text-gray-700' : 
                  isLight ? 'text-gray-700' : 
                  'text-gray-700'
                }`}>
                  Más que un club, una pasión que se lleva en la sangre. Descubre la historia, los ídolos y la gloria del equipo más querido del Perú.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="#historia" className={`font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isDark 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30' 
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/30'
                  }`}>
                    Explorar Historia
                  </Link>
                  <Link href="#tienda" className={`bg-transparent border-2 font-bold py-4 px-8 rounded-full transition-all duration-300 ${
                    isDark ? 'border-white/30 text-white hover:border-white hover:bg-white/10' : 'border-[#0B132B]/30 text-[#0B132B] hover:border-[#0B132B] hover:bg-black/5'
                  }`}>
                    Comprar Camiseta
                  </Link>
                </div>
              </motion.div>

             {/* SECCIÓN DERECHA: La Camiseta Animada */}
              <motion.div className="w-full lg:w-1/2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blur-[100px] rounded-full transition-colors duration-500 ${
                  isDark ? 'bg-blue-500/20' : 
                  isLight ? 'bg-red-500/20' : 
                  'bg-blue-400/20'
                }`}></div>
                                <Image 
                  src={
                    isDark ? "/alterna.png" : // Si es alterna, muestra alterna.png
                    isLight ? "/camiseta-alianza-lima.png" : // Si es titular, muestra la original
                    "/retro.png" // Si es retro, muestra la del 125
                  }
                  alt="Camiseta Alianza Lima" 
                  width={600} 
                  height={600} 
                  className="object-contain drop-shadow-2xl z-10 transition-opacity duration-500"
                  priority 
                />
              </motion.div>

            </div>
          </div>

          {/* INDICADOR DE SCROLL */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Descubre más</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </section>

        {/* =========================================
            SECCIÓN 2: CONTADOR DE TÍTULOS
            ========================================= */}
        <ContadorTitulos />

        {/* =========================================
            SECCIÓN 3: LÍNEA DE TIEMPO HISTÓRICA
            ========================================= */}
        <TimelineHistoria />

        {/* AQUÍ AGREGAMOS EL MUSEO */}
        <MuseoLeyendas />
        
        {/* =========================================
            SECCIÓN 4: PARALLAX DEL ESCUDO
            ========================================= */}
        <EscudoParallax />

      </main>

      {/* El pie de página */}
           <Footer />
      <SelectorCamisetas /> {/* <-- AQUÍ */}
    </>
  );
}