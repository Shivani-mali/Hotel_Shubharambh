import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaUtensils, FaTimes } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkPopup = () => {
      const lastSeen = localStorage.getItem('shubharambh_popup_last_seen');
      const now = new Date().getTime();
      // 24 hours in ms = 86400000
      if (!lastSeen || now - parseInt(lastSeen) > 86400000) {
        // Show popup after 3 seconds of page load
        setTimeout(() => setIsOpen(true), 3000);
      }
    };
    checkPopup();
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('shubharambh_popup_last_seen', new Date().getTime().toString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-overlay fixed inset-0 z-50 flex items-end tb:items-center justify-center p-0 tb:p-4 pb-0 tb:pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="popup-content relative w-full max-w-sm bg-white rounded-t-3xl tb:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] tb:shadow-popup p-6 pb-12 tb:pb-6 text-center"
          >
            <button onClick={closePopup} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-red bg-gray-50 rounded-full transition-colors">
              <FaTimes size={18} />
            </button>
            
            <h2 className="text-2xl font-bold text-brand-dark mb-2 mt-4">नमस्कार! 🙏</h2>
            <p className="text-gray-600 mb-6 text-sm">हॉटेल शुभारंभ मध्ये आपले स्वागत आहे. आपण काय शोधत आहात?</p>
            
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:+919860842093" className="flex flex-col items-center justify-center p-4 bg-red-50 text-brand-red rounded-xl hover:bg-brand-red hover:text-white transition-colors">
                <FaPhoneAlt size={22} className="mb-2" />
                <span className="font-semibold text-sm">कॉल करा</span>
              </a>
              <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-colors">
                <FaWhatsapp size={24} className="mb-2" />
                <span className="font-semibold text-sm">WhatsApp</span>
              </a>
              <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                <FaMapMarkerAlt size={22} className="mb-2" />
                <span className="font-semibold text-sm">दिशा (Map)</span>
              </a>
              <a href="/menu" className="flex flex-col items-center justify-center p-4 bg-yellow-50 text-[#8A6D15] rounded-xl hover:bg-brand-gold hover:text-white transition-colors">
                <FaUtensils size={22} className="mb-2" />
                <span className="font-semibold text-sm">मेनू पहा</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
