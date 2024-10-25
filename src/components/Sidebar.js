import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../services/UserService';

const Sidebar = () => {
  const { logout } = useUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <div className="h-full flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="flex justify-center">
          <span className="sr-only">Bonboarding Integration Demo</span>
          <img src="/logo-dark.png" alt="Logo" className="h-12" />
        </h1>
      </div>
      <ul className="flex-grow flex flex-col py-4">
        <li>
          <Link to="/dashboard" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fas fa-home"></i>
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/statistics" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fas fa-chart-bar"></i>
            </span>
            <span className="text-sm font-medium">Statistics</span>
          </Link>
        </li>
        <li>
          <Link to="/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fas fa-users"></i>
            </span>
            <span className="text-sm font-medium">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fas fa-cog"></i>
            </span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto mb-4 mx-4 p-4">
        <button onClick={handleLogout} className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
