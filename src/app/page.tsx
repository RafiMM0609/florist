'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import FloatingButtons from '@/components/FloatingButtons';
import CategoryFilter from '@/components/CategoryFilter';
import { products } from '@/data/products';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Generate unique categories from products
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const categories = [
    { value: 'all', label: 'All Collection' },
    { value: 'kupu2', label: 'Kupu-kupu' },
    { value: 'boneka', label: 'Boneka' },
    { value: 'mawar', label: 'Mawar' },
    { value: 'lily', label: 'Lily' },
    { value: 'tulip', label: 'Tulip' },
    { value: 'mixed', label: 'Mixed Flowers' },
    { value: 'sunflower', label: 'Sunflower' },
    { value: 'baby-breath', label: 'Baby Breath' }
  ].filter(category => 
    category.value === 'all' || uniqueCategories.includes(category.value)
  );

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Katalog Kagita Craft
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koleksi buket kupu-kupu dan boneka terbaik untuk berbagai momen spesial Anda. 
            Dibuat dengan penuh cinta dan perhatian detail.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchTerm 
                ? `Tidak ada produk yang ditemukan untuk "${searchTerm}"`
                : selectedCategory !== 'all' 
                  ? `Tidak ada produk dalam kategori "${categories.find(c => c.value === selectedCategory)?.label}"`
                  : 'Tidak ada produk yang tersedia'
              }
            </p>
          </div>
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <FloatingButtons />
    </div>
  );
}
