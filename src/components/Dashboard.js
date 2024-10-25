import React from 'react';
import { useUser } from '../services/UserService';

const Dashboard = () => {
  const { username } = useUser();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hi {username},</h2>
      <h3>you are now logged in</h3>
    </div>
  );
};

export default Dashboard;
