import React from 'react';

const Marketplace: React.FC = () => {
  // Mock data for sustainable products
  const products = [
    { id: 1, name: 'Eco-friendly Water Bottle', price: 100, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Bamboo Toothbrush Set', price: 50, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Reusable Shopping Bags', price: 75, image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">{product.price} Tokens</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;