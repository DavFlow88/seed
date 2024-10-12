import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Video, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Leaf className="mr-2" />
          EcoCrypto
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/marketplace" className="flex items-center"><ShoppingBag className="mr-1" /> Marketplace</Link></li>
            <li><Link to="/green-tech" className="flex items-center"><Video className="mr-1" /> Green-Tech</Link></li>
            <li><Link to="/profile" className="flex items-center"><User className="mr-1" /> Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;