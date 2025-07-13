export default function CartModal({ cart, onClose, onUpdate }) {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increment = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    onUpdate(updated);
  };

  const decrement = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    onUpdate(updated);
  };

  const cartMsg = encodeURIComponent(
    `Hi, I would like to buy these items:\n${cart
      .map(item => `${item.name} - ₹${item.price} × ${item.quantity}`)
      .join('\n')}\nTotal: ₹${getTotal()}`
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">Cart</h2>

        {cart.length === 0 ? (
          <p className="text-sm">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              <ul className="space-y-2">
                {cart.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">₹{item.price} × {item.quantity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrement(i)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        –
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increment(i)}
                        className="bg-cyan-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 font-bold text-cyan-900 dark:text-cyan-100">Total: ₹{getTotal()}</p>

            <a
              href={`https://wa.me/919062203601?text=${cartMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-cyan-600 text-white text-center py-2 rounded hover:bg-cyan-700"
            >
              Checkout on WhatsApp
            </a>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 dark:text-gray-400 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
