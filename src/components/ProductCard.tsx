'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-6xl mb-1 sm:mb-2">🌸</div>
              <p className="text-gray-500 text-xs hidden sm:block">Foto Produk</p>
            </div>
          </div>
        )}
      </div>
        <div className="p-2 sm:p-3 lg:p-4">
        <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-xs mb-1 sm:mb-2 line-clamp-2 hidden sm:block">{product.description}</p>
        <p className="font-bold text-pink-600 text-xs sm:text-sm">{product.price}</p>
      </div>
    </div>
  );
}
