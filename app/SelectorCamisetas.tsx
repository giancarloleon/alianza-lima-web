'use client';

import { useTheme, Theme } from './context/ThemeContext';
import Image from 'next/image';

export default function SelectorCamisetas() {
  const { theme, setTheme } = useTheme();

  // Mapeamos los temas con sus respectivas imágenes
  const camisetas: { id: Theme; nombre: string; img: string }[] = [
    { id: 'light', nombre: 'Original', img: '/titular.webp' }, // La clásica
    { id: 'dark', nombre: 'Alternativa', img: '/alterna.webp' }, // La blanca con franja azul
    { id: 'third', nombre: 'Retro', img: '/125.webp' }, // La de rayas horizontales
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-gray-200">
      <p className="text-xs font-bold text-center text-gray-600 uppercase tracking-widest mb-1">Elige Camiseta</p>
      
      <div className="flex gap-3">
        {camisetas.map((camiseta) => (
          <button
            key={camiseta.id}
            onClick={() => setTheme(camiseta.id)}
            className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 bg-gray-50 ${
              theme === camiseta.id 
                ? 'ring-4 ring-red-600 scale-110 shadow-lg' 
                : 'ring-2 ring-transparent hover:scale-105 opacity-70 hover:opacity-100'
            }`}
            title={camiseta.nombre}
          >
            <Image 
              src={camiseta.img} 
              alt={camiseta.nombre} 
              fill 
              className="object-contain p-1" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}