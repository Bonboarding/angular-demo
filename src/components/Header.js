import React from 'react';
import { useUser } from '../services/UserService';

const Header = () => {
  const { username } = useUser();

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-blue-500">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button className="flex items-center text-gray-600 focus:outline-none">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {username ? username[0] : ''}
            </div>
            <span className="ml-2">{username}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
