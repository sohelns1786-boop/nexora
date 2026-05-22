import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Lock, Bell, LogOut, Eye, EyeOff } from 'lucide-react';

const Settings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    emailUpdates: true,
    smsUpdates: false
  });

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/settings' } } });
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Handle profile save logic here
    alert('Profile updated successfully!');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle password change logic here
    alert('Password changed successfully!');
    setFormData(prev => ({ ...prev, password: '', newPassword: '', confirmPassword: '' }));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon size={40} className="text-white" />
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter">
              ACCOUNT SETTINGS
            </h1>
          </div>
          <p className="text-white text-opacity-50 text-lg">
            Manage your account preferences and security
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <div className="glass-dark rounded-2xl p-6 space-y-2 sticky top-32">
              {[
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'security', label: 'Security', icon: Lock },
                { id: 'notifications', label: 'Notifications', icon: Bell },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeTab === tab.id
                      ? 'bg-white bg-opacity-10 text-white'
                      : 'text-white text-opacity-60 hover:text-opacity-100'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
              
              <div className="pt-4 border-t border-white border-opacity-10 mt-4">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400 hover:bg-opacity-10 transition-all text-left font-medium"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3"
          >
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="glass-dark p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-opacity-60 text-sm font-medium mb-3">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-white placeholder-opacity-30 focus:outline-none focus:border-opacity-40 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-opacity-60 text-sm font-medium mb-3">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled
                          className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-white placeholder-opacity-30 focus:outline-none focus:border-opacity-40 transition-all opacity-60 cursor-not-allowed"
                          placeholder="your.email@example.com"
                        />
                        <p className="text-xs text-white text-opacity-40 mt-2">Email cannot be changed</p>
                      </div>
                    </div>
                    <button type="submit" className="premium-button">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="glass-dark p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Change Password</h2>
                  <form onSubmit={handleChangePassword} className="space-y-6">
                    <div>
                      <label className="block text-white text-opacity-60 text-sm font-medium mb-3">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 pr-12 text-white placeholder-white placeholder-opacity-30 focus:outline-none focus:border-opacity-40 transition-all"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 hover:text-opacity-100"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-opacity-60 text-sm font-medium mb-3">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-white placeholder-opacity-30 focus:outline-none focus:border-opacity-40 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-opacity-60 text-sm font-medium mb-3">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-white placeholder-opacity-30 focus:outline-none focus:border-opacity-40 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <button type="submit" className="premium-button">
                      Update Password
                    </button>
                  </form>
                </div>

                <div className="glass-dark p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-4">Two-Factor Authentication</h2>
                  <p className="text-white text-opacity-60 mb-6">
                    Enhance your account security with two-factor authentication.
                  </p>
                  <button className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-white font-medium transition-all">
                    Enable 2FA
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="glass-dark p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                  <form className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Push Notifications</p>
                        <p className="text-sm text-white text-opacity-60">
                          Get notified about order updates and promotions
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Email Updates</p>
                        <p className="text-sm text-white text-opacity-60">
                          Receive updates and newsletters via email
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="emailUpdates"
                        checked={formData.emailUpdates}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                      <div>
                        <p className="font-medium text-white">SMS Updates</p>
                        <p className="text-sm text-white text-opacity-60">
                          Receive important updates via SMS
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="smsUpdates"
                        checked={formData.smsUpdates}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                    </div>

                    <button type="submit" className="premium-button w-full">
                      Save Preferences
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
