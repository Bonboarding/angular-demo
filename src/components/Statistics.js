import React from 'react';

const Statistics = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">1,234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-green-500">567</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-purple-500">$89,012</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
