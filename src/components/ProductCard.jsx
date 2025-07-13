export default function ProductCard({ product, onAdd, onView }) {
  const message = encodeURIComponent(
    `Hi, I'm interested in buying ${product.name} for ₹${product.price}.`
  );

  return (
    <div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 flex flex-col">
      {/* Image */}
      <div
        className="relative h-48 bg-gradient-to-br from-cyan-100/30 to-cyan-200/10 dark:from-cyan-900/20 dark:to-cyan-800/10 flex items-center justify-center cursor-pointer"
        onClick={() => onView(product)}
      >
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Artistic Glow */}
        <div className="absolute inset-0 pointer-events-none rounded-t-3xl bg-white/10 dark:bg-cyan-900/10 blur-xl opacity-10"></div>
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col flex-1 text-gray-900 dark:text-white">
        <h3
          className="text-lg font-bold tracking-wide hover:underline cursor-pointer"
          onClick={() => onView(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 flex-1">{product.description}</p>

        {/* Price */}
        <div className="mt-2 text-cyan-700 dark:text-cyan-300 text-lg font-semibold">
          ₹{product.price}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => onAdd(product)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-xl transition duration-200 shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>

          <a
            href={`https://wa.me/919062203601?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/wa inline-flex items-center justify-center gap-2 border border-cyan-600 text-cyan-700 dark:border-cyan-300 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-gray-700 py-2 rounded-xl text-center transition duration-200"
          >
            <span>Buy on WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M380.9 97.1C339 55.1 283.6 32 224 32 100.3 32 0 132.3 0 256c0 45 11.9 88.3 34.5 126.6L0 480l100.3-32.8C138.6 468.1 181.9 480 224 480c123.7 0 224-100.3 224-224 0-59.6-23.1-115-67.1-158.9zM224 432c-38.2 0-75.4-10.3-108-29.8l-7.7-4.6-59.6 19.5 20.1-57.8-5-8C44.4 319.1 32 288.4 32 256 32 149.5 117.5 64 224 64s192 85.5 192 192-85.5 192-192 192zm101.6-138.6c-5.5-2.8-32.4-15.9-37.4-17.7-5-1.9-8.6-2.8-12.2 2.8-3.6 5.5-14 17.7-17.1 21.4-3.1 3.6-6.3 4.1-11.7 1.4-5.5-2.8-23.1-8.5-44-27.1-16.3-14.5-27.3-32.4-30.5-37.9-3.1-5.5-.3-8.5 2.5-11.2 2.6-2.6 5.5-6.8 8.3-10.2 2.8-3.4 3.7-5.7 5.5-9.5 1.8-3.7.9-7.1-.5-9.9s-12.2-29.4-16.8-40.3c-4.4-10.6-8.9-9.1-12.2-9.3-3.1-.2-6.6-.2-10.1-.2s-9.3 1.4-14.1 7.1c-4.9 5.7-18.5 18-18.5 43.9 0 25.9 19 51 21.6 54.5 2.6 3.4 37.4 57.1 90.7 80.1 12.7 5.5 22.6 8.8 30.3 11.2 12.7 4 24.2 3.4 33.3 2 10.1-1.5 32.4-13.2 37-25.9 4.6-12.6 4.6-23.3 3.1-25.5-1.5-2.3-5-3.6-10.5-6.3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
