import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FloatingMobileBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 tb:hidden flex justify-around px-2 py-2 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] pb-safe">
      <a href="tel:+919860842093" className="flex flex-col items-center justify-center p-2 text-brand-red flex-1 active:scale-95 transition-transform">
        <FaPhoneAlt size={22} className="mb-1" />
        <span className="text-[11px] font-bold">कॉल</span>
      </a>
      <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2 text-green-600 flex-1 active:scale-95 transition-transform">
        <FaWhatsapp size={24} className="mb-1" />
        <span className="text-[11px] font-bold">WhatsApp</span>
      </a>
      <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2 text-blue-600 flex-1 active:scale-95 transition-transform">
        <FaMapMarkerAlt size={22} className="mb-1" />
        <span className="text-[11px] font-bold">मॅप</span>
      </a>
      <Link to="/menu" className="flex flex-col items-center justify-center p-2 text-[#8A6D15] flex-1 active:scale-95 transition-transform">
        <FaUtensils size={22} className="mb-1" />
        <span className="text-[11px] font-bold">मेनू</span>
      </Link>
    </div>
  );
};

export default FloatingMobileBar;
