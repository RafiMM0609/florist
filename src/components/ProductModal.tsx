'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import { X, MessageCircle, Instagram } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [imageError, setImageError] = useState(false);
  if (!product) return null;

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} dengan harga ${product.price}. Apakah masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/bukettcimahi', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Detail Produk</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Product Image */}
        <div className="relative aspect-square">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🌸</div>
                <p className="text-gray-500">Foto Produk</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-3">{product.description}</p>
          <p className="text-2xl font-bold text-pink-600 mb-4">{product.price}</p>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Pilih Warna:</h4>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(variant.color)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      selectedVariant === variant.color
                        ? 'bg-pink-500 text-white border-pink-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    {variant.color} - {variant.price}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
            <button
              onClick={handleInstagram}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Instagram size={20} />
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
