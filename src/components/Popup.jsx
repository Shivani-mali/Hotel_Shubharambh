import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import offerPoster from '../assets/Gallery/Sravanoffer.jpeg';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkPopup = () => {
      const lastSeen = sessionStorage.getItem('shubharambh_popup_last_seen');
      if (!lastSeen) {
        // Show popup after 2.5 seconds of page load
        setTimeout(() => setIsOpen(true), 2500);
      }
    };
    checkPopup();
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('shubharambh_popup_last_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closePopup}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="popup-content relative w-full max-w-lg bg-transparent rounded-2xl shadow-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex justify-end mb-4">
               <button onClick={closePopup} className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors border border-white/30">
                 <FaTimes size={16} />
               </button>
            </div>
            <img src={offerPoster} alt="Special Offer" className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
