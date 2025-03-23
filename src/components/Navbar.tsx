
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogOut, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isLoggedIn = location.pathname !== '/' && location.pathname !== '/login';

  const navLinks = [
    { name: 'Home', path: '/', showWhen: 'always' },
    { name: 'Login', path: '/login', showWhen: 'loggedOut' },
    { name: 'Dashboard', path: '/dashboard', showWhen: 'loggedIn' },
    { name: 'Admin', path: '/admin', showWhen: 'loggedIn', icon: Shield },
  ];

  const filteredLinks = navLinks.filter(link => {
    if (link.showWhen === 'always') return true;
    if (link.showWhen === 'loggedIn' && isLoggedIn) return true;
    if (link.showWhen === 'loggedOut' && !isLoggedIn) return true;
    return false;
  });

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold text-xl">BS</span>
          </div>
          <span className="font-bold text-xl sm:text-2xl text-navy-dark">
             VOTE CHAIN
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {filteredLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium px-2 py-1 text-navy hover:text-primary transition-colors relative flex items-center ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {link.icon && <link.icon className="h-4 w-4 mr-1" />}
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          {isLoggedIn && (
            <button 
              className="flex items-center space-x-1 text-sm font-medium text-navy hover:text-red-500 transition-colors"
              onClick={() => console.log('Logout')}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="block md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect mt-4 rounded-lg overflow-hidden"
        >
          <div className="py-4 px-4 space-y-3">
            {filteredLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-lg font-medium ${
                  location.pathname === link.path 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-navy hover:bg-gray-50'
                }`}
              >
                {link.icon && <link.icon className="h-4 w-4 mr-2" />}
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn && (
              <button 
                className="flex w-full items-center space-x-2 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                onClick={() => console.log('Logout')}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
