'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Definimos el tipo de dato (TypeScript)
type Leyenda = {
  id: number;
  nombre: string;
  posicion: string;
  descripcion: string;
  imagen_url: string;
};

export default function MuseoLeyendas() {
  const [leyendas, setLeyendas] = useState<Leyenda[]>([]);
  const [loading, setLoading] = useState(true);

  // Consumimos nuestra propia API al cargar el componente
  useEffect(() => {
    const fetchLeyendas = async () => {
      try {
        const res = await fetch('/api/leyendas');
        const data = await res.json();
        setLeyendas(data);
      } catch (error) {
        console.error("Error cargando leyendas", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeyendas();
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Cargando leyendas...</div>;

  return (
    <section className="py-24 bg-white text-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-widest text-blue-900 mb-4">Museo de Leyendas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Los inmortales que vistieron esta camiseta y dejaron su huella en la historia del club.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leyendas.map((leyenda, index) => (
            <motion.div 
              key={leyenda.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Efecto Hover 3D (se levanta y hace un pequeño giro)
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-200 group cursor-pointer"
            >
             <div className="relative h-72 w-full bg-blue-900/10 flex items-center justify-center overflow-hidden">
  {/* Mantenemos el gradiente oscuro */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60 z-10"></div>
  
  {/* Usamos una etiqueta img normal y le ponemos un fondo gris por si falla */}
  <Image 
  src={leyenda.imagen_url} 
  alt={leyenda.nombre}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500 z-0"
/>

                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {leyenda.posicion}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">{leyenda.nombre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{leyenda.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}