import React from 'react';
import { Leaf, Gift, Sprout } from 'lucide-react';

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    tokenBalance: 500,
    level: 3,
    inviteCode: 'ECO123',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex items-center mb-4">
          <div className="bg-green-500 text-white p-3 rounded-full mr-4">
            <Leaf size={32} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-100 p-4 rounded">
            <h4 className="font-semibold mb-2">Token Balance</h4>
            <p className="text-2xl text-green-600">{user.tokenBalance}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <h4 className="font-semibold mb-2">Level</h4>
            <p className="text-2xl text-blue-600">{user.level}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Invite Friends</h4>
          <div className="flex items-center">
            <input
              type="text"
              value={user.inviteCode}
              readOnly
              className="bg-gray-100 px-3 py-2 rounded-l"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600">
              Copy
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            <Gift className="mr-2" /> Redeem Rewards
          </button>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <Sprout className="mr-2" /> Grow Your Garden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;