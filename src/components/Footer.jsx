import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.bmp';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Link to="/">
              <img src={logoImg} alt="Hotel Shubharambh Logo" className="h-16 w-auto object-contain rounded-md" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            मुडशिंगी, कोल्हापूर मधील सर्वोत्तम फॅमिली रेस्टॉरंट आणि लॉजिंग. 
            चविष्ट जेवण, सुरक्षित वास्तव्य आणि उत्तम सेवा.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">महत्त्वाच्या लिंक्स</h3>
          <ul className="space-y-3">
            <li><Link to="/menu" className="hover:text-brand-gold transition-colors">मेनू <span className="font-english">(Menu)</span></Link></li>
            <li><Link to="/lodging" className="hover:text-brand-gold transition-colors">लॉजिंग <span className="font-english">(Lodging)</span></Link></li>
            <li><Link to="/hall" className="hover:text-brand-gold transition-colors">फंक्शन हॉल <span className="font-english">(Function Hall)</span></Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">गॅलरी <span className="font-english">(Gallery)</span></Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">संपर्क</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-brand-gold flex-shrink-0" />
              <span>कोल्हापूर-हुपरी रोड, मुडशिंगी,<br/>कोल्हापूर, महाराष्ट्र ४१६११९</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-brand-gold flex-shrink-0" />
              <a href="tel:+919860842093" className="hover:text-white transition-colors font-english">+91 98608 42093</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-brand-gold flex-shrink-0" />
              <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><span className="font-english">WhatsApp</span> वर मेसेज करा</a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <span className="font-english">&copy; {new Date().getFullYear()} Hotel Shubharambh. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
