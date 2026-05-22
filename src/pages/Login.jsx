import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome, User, Check, Loader2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { user, login, register, loading, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect destination (defaults to root)
  const from = location.state?.from?.pathname || '/';

  // Reactive redirect when user state changes (e.g. from Google popup callback)
  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      tempErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
    }

    if (!isLogin) {
      if (!name.trim()) {
        tempErrors.name = 'Full name is required.';
      }
      if (password !== confirmPassword) {
        tempErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      // Redirect after successful auth
      navigate(from, { replace: true });
    } catch (err) {
      // Errors are handled and displayed via custom Toast inside AuthContext
      console.error('Authentication failed:', err);
    }
  };

  const handleGuestLogin = async () => {
    setEmail('guest@nexora.com');
    setPassword('password123');
    setErrors({});
    
    try {
      await login('guest@nexora.com', 'password123');
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Guest login failed:', err);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: isLogin ? 50 : -50, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' }
    })
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-[#050505] px-4">
      {/* Cinematic abstract lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white opacity-[0.01] blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-500 opacity-[0.015] blur-[150px] rounded-full pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="glass-dark p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white border-opacity-[0.05]">
          
          <div className="text-center mb-8">
            <motion.h1 
              key={isLogin ? 'welcome' : 'join'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tighter uppercase"
            >
              {isLogin ? 'WELCOME BACK' : 'JOIN NEXORA'}
            </motion.h1>
            <motion.p 
              key={isLogin ? 'sub-welcome' : 'sub-join'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-opacity-40 text-xs md:text-sm tracking-wide"
            >
              {isLogin 
                ? 'Enter your credentials to access your luxury portfolio.' 
                : 'Create a personal account to begin your luxury shopping experience.'}
            </motion.p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-form' : 'register-form'}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                {/* Full Name (Registration only) */}
                {!isLogin && (
                  <motion.div custom={0} variants={itemVariants} className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-opacity-20" />
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                      }}
                      className={`w-full bg-white bg-opacity-5 border ${
                        errors.name ? 'border-red-500 border-opacity-40' : 'border-white border-opacity-10'
                      } rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-opacity-40 focus:ring-1 focus:ring-white focus:ring-opacity-10 transition-all text-sm`}
                      disabled={loading}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium tracking-wide">{errors.name}</p>
                    )}
                  </motion.div>
                )}

                {/* Email Address */}
                <motion.div custom={isLogin ? 0 : 1} variants={itemVariants} className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-opacity-20" />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: null }));
                    }}
                    className={`w-full bg-white bg-opacity-5 border ${
                      errors.email ? 'border-red-500 border-opacity-40' : 'border-white border-opacity-10'
                    } rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-opacity-40 focus:ring-1 focus:ring-white focus:ring-opacity-10 transition-all text-sm`}
                    disabled={loading}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium tracking-wide">{errors.email}</p>
                  )}
                </motion.div>

                {/* Password */}
                <motion.div custom={isLogin ? 1 : 2} variants={itemVariants} className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-opacity-20" />
                  <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors(prev => ({ ...prev, password: null }));
                    }}
                    className={`w-full bg-white bg-opacity-5 border ${
                      errors.password ? 'border-red-500 border-opacity-40' : 'border-white border-opacity-10'
                    } rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-opacity-40 focus:ring-1 focus:ring-white focus:ring-opacity-10 transition-all text-sm`}
                    disabled={loading}
                  />
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium tracking-wide">{errors.password}</p>
                  )}
                </motion.div>

                {/* Confirm Password (Registration only) */}
                {!isLogin && (
                  <motion.div custom={3} variants={itemVariants} className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-opacity-20" />
                    <input 
                      type="password" 
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: null }));
                      }}
                      className={`w-full bg-white bg-opacity-5 border ${
                        errors.confirmPassword ? 'border-red-500 border-opacity-40' : 'border-white border-opacity-10'
                      } rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-opacity-40 focus:ring-1 focus:ring-white focus:ring-opacity-10 transition-all text-sm`}
                      disabled={loading}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium tracking-wide">{errors.confirmPassword}</p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-xs text-white text-opacity-30 hover:text-opacity-100 transition-all tracking-wide">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full premium-button py-4 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden mt-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  <span>Processing luxury portfolio...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Quick Guest Access & Separator */}
          <div className="mt-8">
            <div className="relative flex items-center mb-6">
              <div className="flex-grow border-t border-white border-opacity-5"></div>
              <span className="flex-shrink mx-4 text-[9px] uppercase font-bold tracking-[0.3em] text-white text-opacity-25">
                Developer/Tester Access
              </span>
              <div className="flex-grow border-t border-white border-opacity-5"></div>
            </div>

            <button 
              onClick={handleGuestLogin}
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-2xl border border-dashed border-white border-opacity-10 bg-white bg-opacity-[0.02] hover:bg-opacity-[0.06] hover:border-opacity-25 transition-all text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center space-x-2 text-white text-opacity-60 hover:text-opacity-100 disabled:opacity-50"
            >
              <span>Instant Guest Experience</span>
              <span className="text-[10px] text-white text-opacity-35 bg-white bg-opacity-5 px-2 py-0.5 rounded font-mono lowercase">guest@nexora.com</span>
            </button>
          </div>

          {/* Social Sign In */}
          <div className="mt-8">
            <div className="relative flex items-center mb-6">
              <div className="flex-grow border-t border-white border-opacity-5"></div>
              <span className="flex-shrink mx-4 text-[9px] uppercase font-bold tracking-[0.3em] text-white text-opacity-25">
                Or Continue With
              </span>
              <div className="flex-grow border-t border-white border-opacity-5"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={loginWithGoogle}
                disabled={loading}
                className="glass py-3.5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-white hover:bg-opacity-5 transition-all border border-white border-opacity-[0.04] text-white text-opacity-80 hover:text-opacity-100 disabled:opacity-50"
              >
                <Chrome size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Google</span>
              </button>
              <button 
                type="button"
                className="glass py-3.5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-white hover:bg-opacity-5 transition-all border border-white border-opacity-[0.04] text-white text-opacity-80 hover:text-opacity-100"
              >
                <Github size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Github</span>
              </button>
            </div>
          </div>

          {/* Toggle Screen */}
          <p className="mt-8 text-center text-xs md:text-sm text-white text-opacity-40">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setName('');
                setConfirmPassword('');
              }}
              disabled={loading}
              className="text-white font-bold hover:underline ml-1"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
