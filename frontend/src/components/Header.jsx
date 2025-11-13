import React from 'react';

// Você pode substituir <a> por <Link> do react-router-dom se estiver usando rotas
export default function Header() {
  return (
    <header className="bg-stone-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="text-yellow-500 text-2xl font-bold">
              e-Beer
            </a>
          </div>
          
          {/* Links da Navegação */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/produtos" className="text-gray-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Produtos</a>
              <a href="/beerfeed" className="text-gray-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">BeerFeed</a>
              <a href="/perfil" className="text-gray-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
              <a href="/sair" className="text-gray-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sair</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}