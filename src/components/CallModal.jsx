import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaCopy, FaTimes, FaCheck } from 'react-icons/fa';

const CallModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openCallModal', handleOpen);

    const handleTelClick = (e) => {
      const target = e.target.closest('a[href^="tel:"]');
      if (target) {
        // If it's INSIDE the modal, let it act normally!
        if (target.closest('.call-modal-content')) return;
        
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleTelClick, { capture: true });

    return () => {
      window.removeEventListener('openCallModal', handleOpen);
      document.removeEventListener('click', handleTelClick, { capture: true });
    };
  }, []);

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="call-modal-content bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="bg-[#B71C1C] p-6 text-center relative">
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/10 hover:bg-black/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <FaTimes />
              </button>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <FaPhoneAlt className="text-[#B71C1C] text-2xl" />
              </div>
              <h3 className="text-white font-display font-bold text-2xl">कॉल करा</h3>
              <p className="text-red-100 text-sm mt-1">तुमच्या सर्व प्रश्नांसाठी आणि बुकिंगसाठी</p>
            </div>
            
            <div className="p-6 bg-[#FAF8F5] space-y-4">
              {[
                { label: 'मुख्य संपर्क', number: '+91 98608 42093', raw: '+919860842093' },
                { label: 'पर्यायी संपर्क', number: '+91 91687 88989', raw: '+919168788989' }
              ].map((contact, i) => (
                <div key={i} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{contact.label}</div>
                  <div className="text-xl font-bold text-gray-900 font-english mb-4">{contact.number}</div>
                  <div className="flex gap-2">
                    <a href={`tel:${contact.raw}`} className="flex-1 bg-[#111] hover:bg-black text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
                      <FaPhoneAlt size={12} /> कॉल
                    </a>
                    <button onClick={() => handleCopy(contact.number)} className="flex-[0.8] bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors border border-gray-200 shadow-sm">
                      {copied === contact.number ? <><FaCheck className="text-green-600" size={14}/> कॉपी केले</> : <><FaCopy className="text-gray-500" size={14}/> कॉपी</>}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallModal;
