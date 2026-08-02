import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaHome, FaUtensils, FaBed, FaImages } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.bmp';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-1 rounded-lg">
              <img src={logoImg} alt="हॉटेल शुभारंभ Lodging & Family Restaurant Logo" className="h-12 w-auto object-contain" />
            </div>
            <h2 className="text-brand-gold font-display font-bold text-2xl">हॉटेल शुभारंभ Lodging & Family Restaurant</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            मुडशिंगी, कोल्हापूर मधील सर्वोत्तम फॅमिली रेस्टॉरंट आणि लॉजिंग. 
            चविष्ट जेवण, सुरक्षित वास्तव्य आणि उत्तम सेवा.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">महत्त्वाच्या लिंक्स</h3>
          <ul className="space-y-4">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:text-brand-gold transition-colors"><FaHome className="text-brand-gold/70" /> मुख्यपृष्ठ <span className="font-english text-xs text-gray-500 ml-1">(Home)</span></Link></li>
            <li><Link to="/menu" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:text-brand-gold transition-colors"><FaUtensils className="text-brand-gold/70" /> मेनू <span className="font-english text-xs text-gray-500 ml-1">(Menu)</span></Link></li>
            <li><Link to="/lodging" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:text-brand-gold transition-colors"><FaBed className="text-brand-gold/70" /> लॉजिंग <span className="font-english text-xs text-gray-500 ml-1">(Lodging)</span></Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:text-brand-gold transition-colors"><FaPhoneAlt className="text-brand-gold/70" /> संपर्क <span className="font-english text-xs text-gray-500 ml-1">(Contact)</span></Link></li>
            <li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:text-brand-gold transition-colors"><FaImages className="text-brand-gold/70" /> गॅलरी <span className="font-english text-xs text-gray-500 ml-1">(Gallery)</span></Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">संपर्क</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-brand-gold flex-shrink-0" />
              <span>कोल्हापूर-हुपरी रोड, मुडशिंगी,<br/>कोल्हापूर, महाराष्ट्र 416119</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-brand-gold flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-1.5">
                <a href="tel:+919168788989" className="hover:text-white transition-colors font-english font-medium text-[15px]">+91 91687 88989</a>
                <a href="tel:+919860842093" className="hover:text-white transition-colors font-english font-medium text-[15px]">+91 98608 42093</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-brand-gold flex-shrink-0" />
              <a href="https://wa.me/919168788989" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><span className="font-english">WhatsApp</span> वर मेसेज करा</a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <span className="font-english">&copy; {new Date().getFullYear()} हॉटेल शुभारंभ Lodging & Family Restaurant. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

