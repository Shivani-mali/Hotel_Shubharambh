import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaGlobe, FaHome, FaInfoCircle, FaUtensils, FaBed, FaBuilding } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('MR');

  const toggleLang = () => setLang(lang === 'MR' ? 'EN' : 'MR');

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-bold text-xl text-brand-dark">शुभारंभ</span>
          </Link>

          {/* Desktop Nav - Hidden on mobile */}
          <div className="hidden tb:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-red font-medium">होम</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-red font-medium">आमच्याबद्दल</Link>
            <Link to="/menu" className="text-gray-700 hover:text-brand-red font-medium">मेनू</Link>
            <Link to="/lodging" className="text-gray-700 hover:text-brand-red font-medium">लॉजिंग</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-brand-red font-medium">गॅलरी</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-red font-medium">संपर्क</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-gold">
              <FaGlobe /> {lang}
            </button>
            <a href="tel:+919860842093" className="hidden sm:flex btn-primary !min-h-[40px] !px-4 text-sm gap-2">
              <FaPhoneAlt size={14} /> कॉल करा
            </a>
            
            {/* Hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="tb:hidden p-2 text-gray-600 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="tb:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaHome className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> होम
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaInfoCircle className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> आमच्याबद्दल
              </NavLink>
              <NavLink to="/menu" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaUtensils className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> मेनू
              </NavLink>
              <NavLink to="/lodging" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaBed className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> लॉजिंग
              </NavLink>
              <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaBuilding className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> गॅलरी
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({isActive}) => `flex justify-center items-center gap-3 px-4 py-3.5 rounded-xl text-base min-h-[48px] ${isActive ? 'font-bold text-brand-red bg-red-50' : 'font-medium text-gray-900 hover:bg-gray-50'}`}>
                <FaPhoneAlt className={({isActive}) => isActive ? 'text-brand-red' : 'text-gray-400'} size={20} /> संपर्क
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
