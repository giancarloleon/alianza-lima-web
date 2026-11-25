import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-white py-12 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Marca */}
        <div>
          <h3 className="text-2xl font-black mb-4">ALIANZA<span className="text-blue-500">LIMA</span></h3>
          <p className="text-gray-400 text-sm">El club más querido del Perú. Fundado en 1901.</p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg mb-2">Enlaces Rápidos</h4>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">Noticias</Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">Partidos</Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">Socios</Link>
        </div>

        {/* Columna 3: Redes */}
        <div>
          <h4 className="font-bold text-lg mb-2">Síguenos</h4>
          <div className="flex gap-4">
            {/* Íconos simulados */}
            <span className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">FB</span>
            <span className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">IG</span>
            <span className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">X</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-blue-900/30 text-center text-sm text-gray-500">
       © 2026 Club Alianza Lima. Proyecto de portafolio.
      </div>
    </footer>
  );
}