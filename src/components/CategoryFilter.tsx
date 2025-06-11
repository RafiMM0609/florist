'use client';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: { value: string; label: string }[];
}

export default function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange, 
  categories 
}: CategoryFilterProps) {
  return (
    <div className="mb-8 px-2">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Pilih Kategori
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 
                transform hover:scale-105 active:scale-95 whitespace-nowrap
                ${selectedCategory === category.value
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:border-pink-300 hover:text-pink-700 shadow-sm hover:shadow-md'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
