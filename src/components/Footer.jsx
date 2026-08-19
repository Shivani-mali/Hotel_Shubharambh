import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.bmp';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-16 px-4 sm:px-6 lg:px-8 mt-auto font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Brand & Description */}
        <div className="flex flex-col">
          <div className="flex flex-col items-start gap-4 mb-6">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <img src={logoImg} alt="हॉटेल शुभारंभ Lodging & Family Restaurant Logo" className="h-14 w-auto object-contain" />
            </div>
            <h2 className="text-brand-gold font-display font-bold text-2xl tracking-wide">हॉटेल शुभारंभ</h2>
          </div>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
            मुडशिंगी, कोल्हापूर मधील सर्वोत्तम फॅमिली रेस्टॉरंट आणि लॉजिंग. 
            चविष्ट जेवण, सुरक्षित वास्तव्य आणि उत्तम सेवा.
          </p>

          {/* Social Media & WhatsApp Links */}
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <a href="https://g.page/r/CSCQi72zK9wbEAE/review" target="_blank" rel="noreferrer" aria-label="Google Review" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#DB4437] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaGoogle className="text-xl" />
            </a>
            <a href="https://www.instagram.com/hotel_shubharambh__/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.facebook.com/hotelshubharambhkolhapur/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://x.com/hotelshubharamb" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://whatsapp.com/channel/0029VbCvWr70VycETVyILQ46" target="_blank" rel="noreferrer" aria-label="WhatsApp Channel" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>



        {/* Contact Info */}
        <div className="flex flex-col md:items-end md:text-right pt-2 md:pt-0">
          <ul className="space-y-4 text-[15px] text-gray-400">
            <li className="leading-relaxed">
              <span className="text-brand-gold font-bold flex items-center gap-2 mb-1"><FaMapMarkerAlt /> पत्ता:</span>
              <div className="ml-6">
                कोल्हापूर-हुपरी रोड, मुडशिंगी,<br/>कोल्हापूर, महाराष्ट्र 416119
              </div>
            </li>
            <li>
              <span className="text-brand-gold font-bold flex items-center gap-2 mb-1"><FaClock /> वेळ (Hours):</span>
              <div className="ml-6 font-english text-gray-300">
                11:00 AM to 11:00 PM (All Days)
              </div>
            </li>
            <li>
              <span className="text-brand-gold font-bold flex items-center gap-2 mb-2"><FaPhoneAlt /> फोन:</span>
              <div className="flex flex-col gap-1 ml-6">
                <a href="tel:+919860842093" className="hover:text-white transition-colors font-english">+91 98608 42093</a>
                <a href="tel:+919168788989" className="hover:text-white transition-colors font-english">+91 91687 88989</a>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
      {/* Copyright & Credits */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="font-english text-center md:text-left">
          &copy; {new Date().getFullYear()} हॉटेल शुभारंभ Lodging & Family Restaurant. All Rights Reserved.
        </div>
        <div className="text-center md:text-right font-english">
          Designed & Developed by <a href="https://shivanis-portfolio-website.vercel.app/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors font-medium">Shivani Mali</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

