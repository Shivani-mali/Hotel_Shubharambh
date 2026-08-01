import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-bold text-2xl text-white">शुभारंभ</span>
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
            <li><Link to="/menu" className="hover:text-brand-gold transition-colors">मेनू (Menu)</Link></li>
            <li><Link to="/lodging" className="hover:text-brand-gold transition-colors">लॉजिंग (Lodging)</Link></li>
            <li><Link to="/hall" className="hover:text-brand-gold transition-colors">फंक्शन हॉल (Function Hall)</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">गॅलरी (Gallery)</Link></li>
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
              <a href="tel:+919860842093" className="hover:text-white transition-colors">+91 98608 42093</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-brand-gold flex-shrink-0" />
              <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp वर मेसेज करा</a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hotel Shubharambh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
