import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Users from './components/Users';
import Settings from './components/Settings';
import AuthGuard from './guards/AuthGuard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <Switch>
                <Route path="/login" component={Login} />
                <AuthGuard path="/dashboard" component={Dashboard} />
                <AuthGuard path="/statistics" component={Statistics} />
                <AuthGuard path="/users" component={Users} />
                <AuthGuard path="/settings" component={Settings} />
                <AuthGuard path="/" exact component={Dashboard} />
                <Route path="*" component={Login} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
