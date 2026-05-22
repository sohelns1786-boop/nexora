import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Check if user is already logged in on initial load & register Google postMessage listener
  useEffect(() => {
    const savedUser = localStorage.getItem('nexora_logged_in_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('nexora_logged_in_user');
      }
    }

    const handleAuthMessage = (e) => {
      if (e.data && e.data.type === 'GOOGLE_AUTH_SUCCESS' && e.data.user) {
        const googleUser = {
          name: e.data.user.name,
          email: e.data.user.email,
          role: 'member',
          joinedAt: new Date().toLocaleDateString(),
          initials: e.data.user.initials,
          color: e.data.user.color,
          isGoogle: true
        };
        setUser(googleUser);
        localStorage.setItem('nexora_logged_in_user', JSON.stringify(googleUser));
        // Show toast notification after brief delay to ensure state is updated
        setTimeout(() => {
          showToast(`Welcome, ${googleUser.name}! (Signed in with Google)`, 'success');
        }, 100);
      }
    };

    window.addEventListener('message', handleAuthMessage);
    return () => window.removeEventListener('message', handleAuthMessage);
  }, []);

  // Custom Toast notification system
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Mock API - Login
  const login = (email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Normalize input
        const normEmail = email.toLowerCase().trim();

        // 1. Check default Guest Account
        if (normEmail === 'guest@nexora.com' && password === 'password123') {
          const guestUser = {
            name: 'Guest Explorer',
            email: 'guest@nexora.com',
            role: 'guest',
            joinedAt: new Date().toLocaleDateString()
          };
          setUser(guestUser);
          localStorage.setItem('nexora_logged_in_user', JSON.stringify(guestUser));
          setLoading(false);
          showToast('Welcome back, Guest Explorer!', 'success');
          resolve(guestUser);
          return;
        }

        // 2. Check Registered Users in LocalStorage
        const registeredUsers = JSON.parse(localStorage.getItem('nexora_users') || '[]');
        const foundUser = registeredUsers.find(
          (u) => u.email.toLowerCase().trim() === normEmail && u.password === password
        );

        if (foundUser) {
          const loggedInUser = {
            name: foundUser.name,
            email: foundUser.email,
            role: 'member',
            joinedAt: foundUser.joinedAt || new Date().toLocaleDateString()
          };
          setUser(loggedInUser);
          localStorage.setItem('nexora_logged_in_user', JSON.stringify(loggedInUser));
          setLoading(false);
          showToast(`Welcome back, ${loggedInUser.name}!`, 'success');
          resolve(loggedInUser);
        } else {
          setLoading(false);
          showToast('Invalid email or password.', 'error');
          reject('Invalid email or password.');
        }
      }, 1000); // 1s luxury simulation delay
    });
  };

  // Mock API - Register
  const register = (name, email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const normEmail = email.toLowerCase().trim();

        // Check if email conflicts with guest or existing user
        if (normEmail === 'guest@nexora.com') {
          setLoading(false);
          showToast('This email is reserved.', 'error');
          reject('This email is reserved.');
          return;
        }

        const registeredUsers = JSON.parse(localStorage.getItem('nexora_users') || '[]');
        const userExists = registeredUsers.some((u) => u.email.toLowerCase().trim() === normEmail);

        if (userExists) {
          setLoading(false);
          showToast('Email address already registered.', 'error');
          reject('Email address already registered.');
          return;
        }

        // Create new user
        const newUser = {
          name: name.trim(),
          email: normEmail,
          password: password,
          joinedAt: new Date().toLocaleDateString()
        };

        // Save user to simulated DB
        registeredUsers.push(newUser);
        localStorage.setItem('nexora_users', JSON.stringify(registeredUsers));

        // Automatically log user in
        const loggedInUser = {
          name: newUser.name,
          email: newUser.email,
          role: 'member',
          joinedAt: newUser.joinedAt
        };
        setUser(loggedInUser);
        localStorage.setItem('nexora_logged_in_user', JSON.stringify(loggedInUser));
        setLoading(false);
        showToast(`Account created! Welcome, ${newUser.name}!`, 'success');
        resolve(loggedInUser);
      }, 1000); // 1s luxury simulation delay
    });
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('nexora_logged_in_user');
    showToast('Signed out successfully. Have a wonderful day!', 'info');
  };

  // Google Popup Login Action
  const loginWithGoogle = () => {
    const width = 450;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    window.open(
      './google-login.html',
      'Google Sign-In',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no`
    );
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, loginWithGoogle, showToast }}>
      {children}
      
      {/* Toast Notification Container */}
      <div className="fixed top-24 right-6 z-[9999] flex flex-col gap-4 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20, transition: { duration: 0.2 } }}
              className="pointer-events-auto flex items-center justify-between gap-4 p-4 rounded-2xl glass-dark shadow-2xl border border-white border-opacity-10 backdrop-blur-md relative overflow-hidden"
              style={{
                boxShadow: toast.type === 'success' 
                  ? '0 10px 30px -10px rgba(74,222,128,0.15), 0 1px 1px 0 rgba(255,255,255,0.05) inset' 
                  : toast.type === 'error'
                  ? '0 10px 30px -10px rgba(248,113,113,0.15), 0 1px 1px 0 rgba(255,255,255,0.05) inset'
                  : '0 10px 30px -10px rgba(96,165,250,0.15), 0 1px 1px 0 rgba(255,255,255,0.05) inset'
              }}
            >
              {/* Type Accent Glow */}
              <div 
                className={`absolute left-0 top-0 w-[4px] h-full ${
                  toast.type === 'success' ? 'bg-green-400' : toast.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
                }`}
              />

              <div className="flex items-start gap-3 pl-1.5">
                <div className="mt-0.5">
                  {toast.type === 'success' && <CheckCircle className="text-green-400" size={18} />}
                  {toast.type === 'error' && <XCircle className="text-red-400" size={18} />}
                  {toast.type === 'info' && <Info className="text-blue-400" size={18} />}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">{toast.message}</p>
                </div>
              </div>

              <button 
                onClick={() => removeToast(toast.id)} 
                className="text-white text-opacity-35 hover:text-opacity-100 transition-colors p-1"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
