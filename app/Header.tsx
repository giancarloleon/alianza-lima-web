'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const isLight = theme === 'light';
  const isThird = theme === 'third';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // IMPORTANTE: Quitamos el bg-[#0B132B] cuando isDark para que el SVG sea el que pinte el fondo
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (isDark ? 'bg-transparent' : 
             isLight ? 'bg-white/90 backdrop-blur-md shadow-md' : 
             'bg-[#0A0F1C]/90 backdrop-blur-md shadow-lg') 
          : (isDark ? 'bg-transparent' : 
             isLight ? 'bg-white' : 
             'bg-[#0A0F1C]')
      }`}
    >
      {/* CUELLO PARA LA TITULAR (light) */}
      {isLight && (
        <div className="absolute top-0 left-0 w-full h-[110px] pointer-events-none -z-10">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
            <path d="M0,0 L100,0 L100,10 Q28,25 0,10 Z" fill="#ffffff" />
            <path d="M0,0 L55,0 L47,5 Q20,23 0,10 Z" fill="#0B132B" />
            <path d="M0,10 Q25,25 100,10 L100,10" fill="none" stroke="#0B132B" strokeWidth="0.6" strokeDasharray="2.5 0.8" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* CUELLO PARA LA ALTERNA (dark) */}
      {isDark && (
        <div className="absolute top-0 left-0 w-full h-[130px] pointer-events-none -z-10">
          <svg viewBox="0 0 100 18" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
            {/* EL FONDO AZUL AHORA TERMINA EXACTAMENTE EN LA LÍNEA (100,5) */}
            <path 
              d="M0,0 L100,0 L100,5 L75,18 L0,12 Z" 
              fill="#0B132B" 
            />
            
            {/* EL RIBETE BLANCO */}
            <path 
              d="M0,12 L75,18 L100,5" 
              fill="none" 
              stroke="#0B132B" 
              strokeWidth="0.6" 
              strokeDasharray="1.5 1" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4 relative z-10">
        
        {/* Logo */}
        <Link href="/" className={`font-black text-2xl tracking-tighter transition-colors ${
          isDark ? 'text-white' : 
          isLight ? 'text-[#0B132B]' : 
          'text-blue-200'
        }`}>
          ALIANZA<span className={isDark || isLight ? 'text-blue-400' : 'text-red-600'}>LIMA</span>
        </Link>

        {/* Enlaces */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Historia', 'Palmarés', 'El Escudo'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              className={`transition-colors text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-gray-300 hover:text-white' : 
                isLight ? 'text-[#0B132B] hover:text-red-600' : 
                'text-blue-200 hover:text-white'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
         
        <div className="flex gap-4 items-center">
          <button onClick={toggleTheme} className={`px-4 py-2 rounded-full font-bold text-sm transition-all border-2 ${
            isDark ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' : 
            isLight ? 'border-[#0B132B] text-[#0B132B] hover:bg-[#0B132B] hover:text-white bg-white/50 backdrop-blur-sm' : 
            'border-blue-300 text-blue-200 hover:bg-blue-900 hover:text-white'
          }`}>
            {isDark ? 'Modo Oscuro' : isLight ? 'Modo Claro' : 'Modo Tercero'}
          </button>

          <Link href="#tienda" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors hidden sm:block shadow-lg shadow-red-500/30">
            Tienda Oficial
          </Link>
        </div>
      </div>
    </motion.header>
  );
}