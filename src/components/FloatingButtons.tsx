'use client';

import { MessageCircle, Instagram } from 'lucide-react';

export default function FloatingButtons() {
  const handleWhatsApp = () => {
    const message = 'Halo, saya ingin menanyakan produk buket yang tersedia.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/bukettcimahi', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      
      <button
        onClick={handleInstagram}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Follow on Instagram"
      >
        <Instagram size={24} />
      </button>
    </div>
  );
}
