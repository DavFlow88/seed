import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to EcoCrypto</h1>
      <p className="mb-8">Connect sustainability with the world of cryptocurrencies</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</Link>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
      </div>
    </div>
  );
};

export default Home;