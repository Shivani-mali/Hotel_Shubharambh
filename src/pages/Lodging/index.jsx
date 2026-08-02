import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaBed, FaBath, 
  FaCar, FaUtensils, FaChild, FaTimes, FaShieldAlt, FaBroom, 
  FaStar, FaChevronDown, FaRoute, FaHospital, FaCheckCircle,
  FaGasPump, FaShoppingBag, FaTrain, FaBus, FaHotel, FaRegCheckCircle, FaStarHalfAlt
} from 'react-icons/fa';
import SEO from '../../components/SEO';

import room1 from '../../assets/Rooms/room1.jpeg';
import room2 from '../../assets/Rooms/room2.jpeg';
import room3 from '../../assets/Rooms/room3.jpeg';
import room4 from '../../assets/Rooms/room4.jpeg';
import room5 from '../../assets/Rooms/room5.jpeg';
import room6 from '../../assets/Rooms/room6.jpeg';
import hotelDay from '../../assets/Gallery/Hotel_1.jpg';
import hotelNight from '../../assets/Gallery/Hotel_at_night.jpg';
import hallImg from '../../assets/Gallery/Hall.jpg';
import restaurantImg from '../../assets/Gallery/Hotel2.jpg';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const galleryData = [
  { id: 1, type: 'रूम', src: room1 },
  { id: 2, type: 'रूम', src: room2 },
  { id: 3, type: 'रूम', src: room3 },
  { id: 4, type: 'रूम', src: room4 }
];

const faqs = [
  { q: "Check-in आणि Check-out ची वेळ काय आहे?", a: "आमची Check-in वेळ दुपारी 12:00 आणि Check-out वेळ सकाळी 11:00 आहे." },
  { q: "पार्किंगची सुविधा उपलब्ध आहे का?", a: "होय, हॉटेलमध्ये आमच्या ग्राहकांसाठी प्रशस्त आणि मोफत सुरक्षित पार्किंग उपलब्ध आहे." },
  { q: "रेस्टॉरंटची सुविधा आहे का?", a: "होय, हॉटेलच्या खालील मजल्यावर आमचे प्रसिद्ध 'शुभारंभ रेस्टॉरंट' आहे, जिथे अस्सल कोल्हापुरी जेवण मिळते." },
  { q: "24 तास गरम पाणी मिळते का?", a: "होय, सर्व रूम्समध्ये अटॅच बाथरूम आणि 24 तास गरम पाण्याची सुविधा उपलब्ध आहे." },
  { q: "UPI Payment किंवा कार्ड स्वीकारले जाते का?", a: "होय, आम्ही Google Pay, PhonePe, Paytm आणि सर्व प्रमुख Credit/Debit Cards स्वीकारतो." },
  { q: "कुटुंबासाठी राहणे सुरक्षित आहे का?", a: "100% सुरक्षित. आमचे हॉटेल विशेषतः फॅमिलीसाठी डिझाइन केलेले आहे आणि इथे पूर्णवेळ सुरक्षित आणि शांत वातावरण असते." }
];

const Lodging = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    const currentIndex = galleryData.findIndex(img => img.src === lightboxImg);
    if (currentIndex < galleryData.length - 1) setLightboxImg(galleryData[currentIndex + 1].src);
    else setLightboxImg(galleryData[0].src);
  };

  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    const currentIndex = galleryData.findIndex(img => img.src === lightboxImg);
    if (currentIndex > 0) setLightboxImg(galleryData[currentIndex - 1].src);
    else setLightboxImg(galleryData[galleryData.length - 1].src);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-gray-800">
      <SEO 
        title="प्रीमियम रूम्स | हॉटेल शुभारंभ (Premium Lodging Kolhapur)"
        description="कोल्हापूरमध्ये कुटुंबासाठी सर्वात सुरक्षित आणि आरामदायक हॉटेल. स्वच्छ खोल्या, 24 तास गरम पाणी, आणि मोफत पार्किंग. आजच आपली रूम बुक करा."
      />

      {/* 1. Premium Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] md:h-[85vh] md:min-h-[600px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={room1} alt="Hotel Shubharambh Premium Room" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-90 h-32 bottom-0 top-auto"></div>
        </div>
        
        <div className="container-ds relative z-10 px-4 md:px-8 mt-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 flex items-center gap-2">
               <FaHotel /> शुभारंभ RESTO & ROOMS
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              कुटुंब आणि प्रवाशांसाठी <br/> <span className="text-[#D4AF37]">आरामदायी मुक्काम</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium mb-8 leading-relaxed drop-shadow-md">
              स्वच्छ • सुरक्षित • परवडणारे • कोल्हापूरमधील विश्वासार्ह निवास
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-bold text-white mb-10">
              <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm text-yellow-400">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/> <span className="text-white ml-1">4.8 Google Rating</span>
              </span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> कुटुंबासाठी योग्य</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> स्वच्छ खोल्या</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> 24 तास गरम पाणी</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> मोफत पार्किंग</span>
            </div>
            
            {/* CTA Buttons - Hidden on Mobile to avoid clutter */}
            <div className="hidden md:flex flex-row gap-4 mt-6">
              <a href="tel:+919168788989" className="bg-[#B71C1C] hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full text-center flex items-center justify-center gap-3 text-lg shadow-[0_8px_25px_rgba(183,28,28,0.4)] transition-all active:scale-95 border border-red-500/30">
                <FaPhoneAlt /> कॉल करा
              </a>
              <a href="https://wa.me/919168788989?text=मला रूम बुकिंगबद्दल माहिती हवी आहे." target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 px-8 rounded-full text-center flex items-center justify-center gap-3 text-lg shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all active:scale-95 border border-green-500/30">
                <FaWhatsapp size={22} /> WhatsApp
              </a>
              <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full text-center flex items-center justify-center gap-3 text-lg shadow-lg transition-all active:scale-95 border border-gray-200">
                <FaMapMarkerAlt className="text-red-500" /> लोकेशन
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Premium Room Section */}
      <section className="pb-16 md:py-24 relative z-20">
        <div className="container-ds px-4 max-w-6xl mx-auto -mt-24 md:-mt-40 relative">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-gray-100/50 relative"
          >
            {/* Room Image */}
            <div className="w-full lg:w-1/2 relative h-72 lg:h-auto">
              <img src={room2} alt="Premium Room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md mb-2 inline-block">Best Seller</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Premium Room</h3>
              </div>
            </div>
            
            {/* Room Details */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
              {/* Glass decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-[50px] -z-10"></div>
              
              <div className="mb-8">
                <p className="text-[#B71C1C] font-black text-5xl md:text-6xl mb-2 font-display">₹899<span className="text-lg text-gray-500 font-medium"> / रात्र</span></p>
                <p className="text-gray-500 font-bold flex items-center gap-2 bg-gray-50 inline-flex px-4 py-2 rounded-full border border-gray-100">
                  <FaChild className="text-[#D4AF37] text-lg"/> क्षमता: 2 प्रौढ + 1 लहान मूल
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:gap-x-4 text-gray-700 font-bold mb-10 text-xs md:text-base">
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaBed className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">डबल बेड</span></div>
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaBath className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">अटॅच बाथरूम</span></div>
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaShieldAlt className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">कुटुंबासाठी सुरक्षित</span></div>
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaBath className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">24 तास गरम पाणी</span></div>
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaUtensils className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">रेस्टॉरंट सुविधा</span></div>
                <div className="flex items-center gap-2 md:gap-3"><div className="bg-amber-50 p-2 md:p-2.5 rounded-full shrink-0"><FaCar className="text-[#D4AF37] text-sm md:text-lg"/></div> <span className="leading-tight">मोफत पार्किंग</span></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                 <a href="tel:+919168788989" className="w-full bg-[#111] hover:bg-[#B71C1C] text-white font-bold py-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md">
                  <FaPhoneAlt /> आता कॉल करा
                </a>
                <a href="https://wa.me/919168788989?text=मला प्रीमियम रूम बुक करायची आहे." target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md">
                  <FaWhatsapp size={20} /> WhatsApp बुक
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. आमच्या सुविधा (Premium Icon List) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container-ds px-4 text-center max-w-5xl mx-auto">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Our Amenities</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111] mb-12">आमच्या सुविधा</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { label: "स्वच्छ खोल्या", icon: <FaBroom /> },
              { label: "डबल बेड", icon: <FaBed /> },
              { label: "अटॅच बाथरूम", icon: <FaBath /> },
              { label: "24 तास गरम पाणी", icon: <FaBath /> },
              { label: "रेस्टॉरंट सुविधा", icon: <FaUtensils /> },
              { label: "मोफत पार्किंग", icon: <FaCar /> },
              { label: "शांत वातावरण", icon: <FaHotel /> },
              { label: "कुटुंबासाठी सुरक्षित", icon: <FaShieldAlt /> }
            ].map((item, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-100 px-3 py-4 md:px-6 md:py-5 rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 hover:shadow-md hover:border-[#D4AF37]/30 transition-all text-center md:text-left cursor-default"
              >
                <span className="text-[#D4AF37] text-2xl md:text-xl shrink-0 bg-amber-50 md:bg-transparent p-2 md:p-0 rounded-full">{item.icon}</span>
                <span className="font-bold text-gray-800 text-sm md:text-base leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. फोटो गॅलरी */}
      <section className="py-24 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container-ds px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Take A Look</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">हॉटेल गॅलरी</h2>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryData.map((img) => (
                <motion.div
                  layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                  key={img.src} onClick={() => setLightboxImg(img.src)}
                  className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group relative border border-white/10 bg-white/5"
                >
                  <img src={img.src} alt={img.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="bg-black/60 backdrop-blur-md text-white border border-white/20 px-5 py-2.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">मोठा फोटो पहा</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. का निवडाल शुभारंभ? */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111]">का निवडाल शुभारंभ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              {[
                { title: "स्वच्छ व प्रशस्त खोल्या", desc: "आम्ही स्वच्छतेला सर्वोच्च प्राधान्य देतो. तुम्हाला नेहमी ताजे आणि नीटनेटके वातावरण मिळेल." },
                { title: "परवडणारे दर", desc: "कोणतेही छुपे शुल्क नाही. फक्त ₹899 मध्ये तुम्हाला कोल्हापुरातील सर्वोत्तम प्रीमियम अनुभव मिळेल." },
                { title: "इमारतीतच रेस्टॉरंट", desc: "जेवणासाठी बाहेर जाण्याची गरज नाही. आमच्या प्रसिद्ध रेस्टॉरंटमध्ये अस्सल कोल्हापुरी जेवणाचा आस्वाद घ्या." },
                { title: "कुटुंबासाठी योग्य व सुरक्षित", desc: "24 तास सुरक्षितता आणि कौटुंबिक वातावरण असल्यामुळे तुम्ही निवांत राहू शकता." }
              ].map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-5 bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-100 transition-all">
                  <div className="w-12 h-12 bg-red-50 text-[#B71C1C] rounded-full flex items-center justify-center shrink-0 border border-red-100"><FaRegCheckCircle size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-full min-h-[400px]">
              <img src={hotelNight} alt="Hotel Shubharambh Night View" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                   <p className="font-bold text-xl mb-2 drop-shadow-md">"कोल्हापूरला भेट देणाऱ्या प्रत्येकासाठी आमचे दरवाजे नेहमी उघडे आहेत."</p>
                   <p className="text-[#D4AF37] font-bold">— हॉटेल शुभारंभ व्यवस्थापन</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Booking Process (Timeline) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container-ds px-4 max-w-5xl mx-auto text-center">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Easy Booking</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111] mb-16">बुकिंग प्रक्रिया</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "1", label: "कॉल करा", icon: <FaPhoneAlt/> },
              { step: "2", label: "उपलब्धता तपासा", icon: <FaBed/> },
              { step: "3", label: "WhatsApp माहिती", icon: <FaWhatsapp/> },
              { step: "4", label: "Booking Confirm", icon: <FaCheckCircle/> }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group">
                <div className="w-16 h-16 bg-white border-4 border-[#F5F5F5] group-hover:border-[#D4AF37] text-gray-800 group-hover:text-[#D4AF37] rounded-full flex items-center justify-center text-2xl mb-4 transition-all shadow-md">
                  {step.icon}
                </div>
                <h4 className="font-bold text-gray-800">{step.label}</h4>
                {i < 3 && <div className="md:hidden w-1 h-8 bg-gray-200 my-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. जवळची ठिकाणे */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Location</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111]">जवळची ठिकाणे</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { icon: <FaBus />, title: "बस स्थानक" },
              { icon: <FaTrain />, title: "रेल्वे स्टेशन" },
              { icon: <FaHotel />, title: "मंदिर" },
              { icon: <FaHospital />, title: "हॉस्पिटल" },
              { icon: <FaRoute />, title: "राष्ट्रीय महामार्ग" },
              { icon: <FaShoppingBag />, title: "बाजारपेठ" }
            ].map((place, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform cursor-default">
                <div className="text-[#D4AF37] text-3xl mb-3 bg-amber-50 p-3 rounded-full">{place.icon}</div>
                <h4 className="font-bold text-gray-800 text-sm md:text-base">{place.title}</h4>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-xl border border-gray-200 relative h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=Hotel%20Shubharambh,%20Mudshingi,%20Kolhapur&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hotel Shubharambh Map"
            ></iframe>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-full shadow-xl flex items-center gap-2 transition-colors whitespace-nowrap border border-white/20">
                <FaMapMarkerAlt /> Google Maps मध्ये उघडा
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Google Reviews & 9. FAQ */}
      <section className="py-24 bg-white">
        <div className="container-ds px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Trust Snippet */}
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111] mb-8">Google वर आमच्या ग्राहकांचा विश्वास</h2>
            <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-6 rounded-full shadow-md shrink-0">
                <div className="flex text-yellow-400 text-2xl mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div>
                <span className="font-black text-4xl text-gray-900">4.8</span>
                <span className="text-gray-500 font-bold block mt-1">Rating</span>
              </div>
              <div>
                 <p className="text-gray-600 font-medium text-lg mb-6 italic">"खूप छान सर्व्हिस, स्वच्छ खोल्या आणि चविष्ट जेवण. कुटुंबासाठी अतिशय उत्तम हॉटेल."</p>
                 <a href="https://share.google/iquNQQfUOWcsQC9dE" target="_blank" rel="noreferrer" className="inline-flex font-bold text-[#B71C1C] hover:text-red-800 items-center gap-2 border-b-2 border-[#B71C1C] pb-1 transition-colors">
                   सर्व Google Reviews पहा <FaChevronDown className="-rotate-90" />
                 </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Any Questions?</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111] mb-8">नेहमी विचारले जाणारे प्रश्न</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-gray-900 focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-[#B71C1C]' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="p-5 md:p-6 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gray-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Booking CTA */}
      <section className="pt-10 pb-32 md:py-24 bg-[#111] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src={hotelDay} alt="Background" className="w-full h-full object-cover filter blur-sm" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto bg-black/60 backdrop-blur-md px-6 py-9 md:p-16 rounded-[40px] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white drop-shadow-lg leading-tight">
            आजच तुमची रूम बुक करा
          </h2>
          
          <p className="text-base md:text-2xl text-[#D4AF37] mb-5 font-medium tracking-wide leading-tight">
            आरामदायी मुक्काम • स्वच्छ खोल्या • परवडणारे दर
          </p>

          {/* Premium Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 text-xs md:text-sm text-gray-300 font-medium">
            <span className="flex items-center gap-1.5"><FaCheckCircle className="text-green-400"/> सुरक्षित मुक्काम</span>
            <span className="flex items-center gap-1.5"><FaCheckCircle className="text-green-400"/> स्वच्छ खोल्या</span>
            <span className="flex items-center gap-1.5"><FaCheckCircle className="text-green-400"/> 24 तास सेवा</span>
          </div>
          
          <div className="flex flex-col tb:flex-row justify-center items-center gap-3 w-full">
            <a href="tel:+919168788989" className="w-[88%] tb:w-auto h-[52px] px-8 bg-[#B71C1C] hover:bg-red-700 text-white font-bold rounded-[18px] flex items-center justify-center gap-2 text-base md:text-lg shadow-lg transition-transform hover:scale-105 border border-red-500/50">
              <FaPhoneAlt /> कॉल करा
            </a>
            <a href="https://wa.me/919168788989?text=मला रूम बुक करायची आहे." target="_blank" rel="noreferrer" className="w-[88%] tb:w-auto h-[52px] px-8 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-[18px] flex items-center justify-center gap-2 text-base md:text-lg shadow-lg transition-transform hover:scale-105 border border-green-400/50">
              <FaWhatsapp size={20} /> WhatsApp वर बुक करा
            </a>
            <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="flex w-[88%] tb:w-auto h-[52px] px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-[18px] items-center justify-center gap-2 text-base md:text-lg shadow-lg transition-transform hover:scale-105 backdrop-blur-md border border-white/20">
              <FaMapMarkerAlt className="text-[#D4AF37]" /> लोकेशन
            </a>
          </div>
        </motion.div>
      </section>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-4" onClick={() => setLightboxImg(null)}>
            <button onClick={() => setLightboxImg(null)} className="absolute top-6 right-6 z-[60] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20">
              <FaTimes size={20} />
            </button>
            
            <button onClick={handleLightboxPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 hidden md:flex">
               <FaChevronDown className="rotate-90" />
            </button>
            <button onClick={handleLightboxNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 hidden md:flex">
               <FaChevronDown className="-rotate-90" />
            </button>

            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImg} alt="Gallery Fullscreen" className="max-w-full max-h-[100vh] md:max-h-[90vh] object-contain rounded-none md:rounded-lg shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lodging;

