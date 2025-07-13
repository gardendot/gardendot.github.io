import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { X, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';

import { trackGAEvent } from './GA';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductModal({ product, onClose, onAdd }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    trackGAEvent('product_view', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      price: product.price,
    });
  }, [product]);

  const message = encodeURIComponent(
    `Hi, I'm interested in buying ${product.name} for ₹${product.price}.`
  );

  return (
    <div className="modal-overlay fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl bg-white/10 dark:bg-gray-900/80 backdrop-blur-md text-white rounded-2xl p-6 shadow-2xl transition-all">
        {/* Close Button */}
        <button
  onClick={onClose}
  className="absolute top-4 right-4 z-50 text-white bg-black/30 hover:bg-red-500 hover:text-white rounded-full w-8 h-8 flex items-center justify-center"
  aria-label="Close"
>
  <X className="w-5 h-5" />
</button>

        {/* Swiper Carousel */}
        {product.images?.length > 0 && (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                el: '.custom-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
              }}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              className="rounded-xl overflow-hidden"
            >
              {product.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-64 object-contain bg-white/10 rounded-xl"
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev text-cyan-400 hover:text-cyan-600 text-2xl" />
              <div className="swiper-button-next text-cyan-400 hover:text-cyan-600 text-2xl" />
            </Swiper>

            {/* Custom pagination outside swiper to avoid overlap */}
            <div className="custom-pagination flex justify-center mt-3" />
          </>
        )}

        {/* Product Content */}
        <div className="text-center px-2 sm:px-6 mt-6">
          <h2 className="text-3xl font-bold text-cyan-300 mb-2">{product.name}</h2>
          <p className="text-gray-200 mb-2">{product.description}</p>
          <p className="text-cyan-200 text-xl font-semibold mb-6">₹{product.price}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
            >
              Add to Cart
            </button>

            <a
              href={`https://wa.me/919062203601?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-cyan-300 text-cyan-200 font-medium py-2 px-6 rounded-full transition flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.6 32 224 32 100.3 32 0 132.3 0 256c0 45 11.9 88.3 34.5 126.6L0 480l100.3-32.8C138.6 468.1 181.9 480 224 480c123.7 0 224-100.3 224-224 0-59.6-23.1-115-67.1-158.9zM224 432c-38.2 0-75.4-10.3-108-29.8l-7.7-4.6-59.6 19.5 20.1-57.8-5-8C44.4 319.1 32 288.4 32 256 32 149.5 117.5 64 224 64s192 85.5 192 192-85.5 192-192 192z"/>
              </svg>
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Pagination dot style fix */}
      <style jsx>{`
        .custom-bullet {
          background-color: white;
          opacity: 0.3;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          border-radius: 9999px;
          transition: transform 0.3s ease;
        }

        .custom-bullet-active {
          background-color: #22d3ee;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
