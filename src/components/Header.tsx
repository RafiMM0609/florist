'use client';

import { Search, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {  return (
    <header className="bg-gradient-to-r from-rose-100 to-pink-100 shadow-sm border-b border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.jpg" 
              alt="Kagita Craft Logo" 
              className="h-12 w-auto mr-4 rounded-lg shadow-sm"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kagita Craft
            </h1>
            {/* <span className="ml-2 text-sm text-gray-600 hidden sm:block">KAGITA CRAFT</span> */}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Temukan Koleksi Anda"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
