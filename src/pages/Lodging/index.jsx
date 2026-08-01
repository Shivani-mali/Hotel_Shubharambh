import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaWifi, FaCar, FaCoffee, FaBed, FaChild, FaHotTub, FaInfoCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const rooms = [
  {
    type: "Standard Room",
    capacity: "2 Adults",
    price: "₹800 - ₹1000",
    desc: "आरामदायक आणि बजेट-फ्रेंडली रूम.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80"
  },
  {
    type: "Deluxe Room",
    capacity: "2 Adults + 1 Child",
    price: "₹1200 - ₹1500",
    desc: "अधिक प्रशस्त, एसी (AC) सुविधेसह.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
  },
  {
    type: "Family Suite",
    capacity: "4-5 Persons",
    price: "₹2000+",
    desc: "संपूर्ण कुटुंबासाठी मोठी आणि आरामदायी खोली.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
  }
];

const Lodging = () => {
  return (
    <div className="bg-brand-light pb-20">
      <SEO 
        title="लॉजिंग (Lodging)"
        description="हॉटेल शुभारंभ मध्ये आरामदायक लॉजिंग सुविधा. स्वच्छ खोल्या, २४ तास सेवा आणि फॅमिलीसाठी उत्तम वातावरण."
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img src={hotelMainBg} alt="Lodging" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-ds relative z-10 text-center px-4 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-display font-normal text-white mb-6"
          >
            आरामदायक <span className="text-brand-red">लॉजिंग</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            तुमच्या सुरक्षित आणि आरामदायी मुक्कामासाठी उत्तम सोय.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center gap-4">
            <a href="tel:+919860842093" className="btn-primary py-3 px-8 rounded-full shadow-lg">बुक करा (Book Now)</a>
          </motion.div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-white">
        <div className="container-ds">
          <div className="section-header">
            <span className="section-subtitle">रूम्स</span>
            <h2 className="section-title">आमच्या खोल्या (Rooms)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img src={room.img} alt={room.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="card-title mb-2">{room.type}</h3>
                  <p className="text-brand-red font-bold text-lg mb-4">{room.price} <span className="text-sm text-gray-500 font-normal">/ night (approx)</span></p>
                  <p className="text-gray-600 mb-6">{room.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium bg-gray-50 p-3 rounded-lg">
                    <FaChild /> क्षमता (Capacity): {room.capacity}
                  </div>
                  <a href="tel:+919860842093" className="btn-outline w-full text-center flex justify-center items-center gap-2 rounded-full py-3">
                    <FaPhoneAlt size={14} /> चौकशी करा
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-brand-light">
        <div className="container-ds text-center">
          <h2 className="text-2xl md:text-3xl font-display font-normal text-brand-dark mb-10">लॉजिंग मधील सुविधा</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaWifi, label: "मोफत वाय-फाय (WiFi)" },
              { icon: FaCar, label: "विशाल पार्किंग" },
              { icon: FaHotTub, label: "२४ तास गरम पाणी" },
              { icon: FaCoffee, label: "रूम सर्व्हिस" },
              { icon: FaBed, label: "स्वच्छ व सुंदर खोल्या" },
              { icon: FaInfoCircle, label: "२४x७ असिस्टन्स" },
              { icon: FaChild, label: "फॅमिली फ्रेंडली" },
            ].map((fac, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center">
                <fac.icon size={32} className="text-brand-red mb-3" />
                <span className="font-bold text-gray-700 text-sm md:text-base">{fac.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 bg-white">
        <div className="container-ds max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-display font-normal text-brand-dark mb-6 text-center border-b border-gray-200 pb-4">नियम व अटी (Rules & Guidelines)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <span className="block text-gray-500 text-sm mb-1 font-english">Check-in Time</span>
                <span className="text-xl font-bold text-brand-red font-english">12:00 PM</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <span className="block text-gray-500 text-sm mb-1 font-english">Check-out Time</span>
                <span className="text-xl font-bold text-brand-red font-english">11:00 AM</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-brand-gold mt-1">✔</span> चेक-इन करताना सर्व पाहुण्यांचे वैध ओळखपत्र (ID Proof) आवश्यक आहे.</li>
              <li className="flex items-start gap-3"><span className="text-brand-gold mt-1">✔</span> कुटुंबासाठी पूर्णपणे सुरक्षित आणि शांततापूर्ण वातावरण.</li>
              <li className="flex items-start gap-3"><span className="text-brand-gold mt-1">✔</span> रेस्टॉरंट मधून रूम सर्व्हिस उपलब्ध आहे.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lodging;
