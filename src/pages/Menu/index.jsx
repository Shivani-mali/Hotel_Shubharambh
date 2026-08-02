import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, FaWhatsapp, FaLeaf, FaDrumstickBite, FaTimes, 
  FaSearch, FaUtensils, FaMapMarkerAlt, FaStar, FaFire, FaBookOpen,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import SEO from '../../components/SEO';
import { mainTabs, specialOffers, chefRecommends, menuData } from './menuData';
import DigitalMenuBook from './DigitalMenuBook';

// Flyers
import offerPoster from '../../assets/Gallery/Offer.jpeg';
import flayer1 from '../../assets/Gallery/Flayer1.jpeg';
import flayer2 from '../../assets/Gallery/Flayer2.jpeg';
import flayer3 from '../../assets/Gallery/Flayer3.jpeg';
import flayer4 from '../../assets/Gallery/Flayer4.jpeg';
import flayer5 from '../../assets/Gallery/Flayer5.jpeg';
import flayer6 from '../../assets/Gallery/Flayer6.jpeg';
import flayer7 from '../../assets/Gallery/Flayer7.jpeg';
import flayer8 from '../../assets/Gallery/Flayer8.jpeg';
import flayer9 from '../../assets/Gallery/Flayer9.jpeg';

const promotionalOffers = [
  { id: 1, title: 'तंदूर स्पेशल ऑफर', img: offerPoster, badge: '🔥 आजची खास ऑफर', desc: '⏳ मर्यादित कालावधीसाठी उपलब्ध', isOffer: true },
  { id: 2, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer1, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 3, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer2, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 4, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer3, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 5, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer4, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 6, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer5, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 7, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer6, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 8, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer7, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 9, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer8, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false },
  { id: 10, title: 'हॉटेल शुभारंभ Lodging & Family Restaurant खासियत', img: flayer9, badge: '✨ आमची खासियत', desc: 'कोल्हापुरी अस्सल चव', isOffer: false }
];

const DishCard = ({ dish, onSelect }) => (
  <motion.div
    whileHover={{ y: -5 }}
    onClick={onSelect}
    className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(183,28,28,0.08)] border border-gray-100 overflow-hidden cursor-pointer group flex flex-col relative transition-all duration-300 h-full"
  >
    {dish.badge && (
      <div className="absolute top-4 left-4 z-20">
        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-widest flex items-center gap-1 backdrop-blur-md 
          ${dish.badge.includes('शेफ') ? 'bg-black/80 text-[#D4AF37] border border-[#D4AF37]/50' : 'bg-[#B71C1C]/90 text-white border border-white/20'}`}
        >
          {(dish.badge.includes('स्पेशल') || dish.badge.includes('ऑफर')) && <FaFire className="text-yellow-400" />}
          {dish.badge.includes('लोकप्रिय') && <FaStar className="text-yellow-400" />}
          {dish.badge.includes('शेफ') && <FaUtensils className="text-[#D4AF37]" />}
          <span className="ml-0.5">{dish.badge.replace(/[🔥⭐👨‍🍳✨]/g, '').trim()}</span>
        </span>
      </div>
    )}

    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-full shadow-sm flex items-center">
      {dish.type === 'Veg' ? <FaLeaf className="text-green-600" size={12} /> : <FaDrumstickBite className="text-[#B71C1C]" size={12} />}
    </div>

    {dish.img && (
      <div className="relative h-56 shrink-0 overflow-hidden bg-gray-50">
        <img src={dish.img} alt={dish.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
      </div>
    )}

    <div className={`p-6 flex flex-col flex-grow ${!dish.img ? 'pt-12' : ''}`}>
      <span className="text-xs text-gray-400 font-bold mb-2 uppercase tracking-widest">{dish.category}</span>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#B71C1C] transition-colors">{dish.name}</h3>
      {dish.desc && <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{dish.desc}</p>}
      
      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
        <span className="text-xl md:text-2xl font-black text-[#111]">
          ₹ {dish.price?.toString().includes(' ') 
              ? dish.price.toString().replace('/- ', ' / ') 
              : dish.price?.toString().replace('/-', '')}
        </span>
        <button className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[#B71C1C] text-gray-400 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  </motion.div>
);

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [activePromoIndex, setActivePromoIndex] = useState(0);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [foodType, setFoodType] = useState('All'); // 'All', 'Veg', 'Non-Veg'
  const [activeCategory, setActiveCategory] = useState(mainTabs[0].id);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allDishes = useMemo(() => {
    return [...specialOffers, ...chefRecommends, ...menuData];
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    // Quick fallback for English searches of popular dishes
    const enToMr = {
      'paneer tikka': 'पनीर टिक्का',
      'butter chicken': 'बटर चिकन',
      'chicken tandoori': 'चिकन तंदुरी',
      'tandoori': 'तंदुरी',
      'paneer platter': 'पनीर प्लॅटर',
      'mutton thali': 'मटण',
      'chicken thali': 'चिकन',
      'veg thali': 'व्हेज थाळी',
      'chicken lollipop': 'चिकन लॉलीपॉप',
      'chicken crispy': 'चिकन क्रिस्पी'
    };

    let mrQuery = query;
    for (const [en, mr] of Object.entries(enToMr)) {
      if (query.includes(en)) {
        mrQuery = mr;
        break;
      }
    }

    return allDishes.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.name.includes(mrQuery) ||
      (item.category && item.category.toLowerCase().includes(query)) ||
      (item.desc && item.desc.toLowerCase().includes(query))
    ).filter((item, index, self) => 
      index === self.findIndex((t) => t.name === item.name)
    ).slice(0, 6);
  }, [searchQuery, allDishes]);

  const categoryDishes = useMemo(() => {
    let dishes = menuData.filter(d => d.tab === activeCategory);
    if (foodType !== 'All') {
      dishes = dishes.filter(d => d.type === foodType);
    }
    return dishes.slice(0, 8);
  }, [activeCategory, foodType]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#111]">
      <SEO title="आमचे मेनू | हॉटेल शुभारंभ Lodging & Family Restaurant (Fine Dining Menu)" description="अस्सल कोल्हापुरी चव आणि लक्झरी अनुभव. आमचे प्रीमियम डिजिटल मेनू पहा." />

      {/* 1. Minimal Luxury Hero Section */}
      <section className="relative pt-20 pb-2 md:pt-32 md:pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="container-ds text-center px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-2 block">Fine Dining Experience</span>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-[#111] mb-2 tracking-tight">
              आमचे <span className="text-[#B71C1C] italic">मेनू</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-xl font-medium max-w-sm md:max-w-2xl mx-auto leading-relaxed line-clamp-2">
              अस्सल कोल्हापुरी चव, ताजे साहित्य आणि उत्कृष्ट सेवेचा अनोखा संगम.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Search & Quick Actions */}
      <div className="relative z-30 bg-white border-b border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] py-3 md:py-6 transition-all">
        <div className="container-ds px-4 mx-auto max-w-5xl">
          
          {/* Premium Search Bar with inline Food Type toggles */}
          <div className="relative mb-4" ref={searchRef}>
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center bg-gray-50/80 border border-gray-200/60 rounded-[24px] md:rounded-full p-1.5 shadow-inner transition-all focus-within:bg-white focus-within:border-[#D4AF37]/50 focus-within:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              
              <div className="relative flex-grow flex items-center w-full">
                <FaSearch className="absolute left-4 md:left-5 text-gray-400 text-lg" />
                <input 
                  type="text" 
                  placeholder="🔍 पदार्थ शोधा... (उदा. पनीर टिक्का)" 
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full bg-transparent text-gray-800 text-sm md:text-lg rounded-full py-2.5 md:py-3.5 pl-11 pr-4 focus:outline-none font-medium placeholder-gray-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 text-gray-400 hover:text-red-500 bg-gray-100 p-1.5 rounded-full transition-colors">
                    <FaTimes size={12} />
                  </button>
                )}
              </div>

              {/* Elegant Veg/Non-Veg Toggles */}
              <div className="flex bg-white rounded-full p-1 border border-gray-100 shadow-sm w-full md:w-auto overflow-x-auto hide-scrollbar shrink-0">
                <div className="flex w-max mx-auto md:mx-0">
                  <button 
                    onClick={() => setFoodType('All')}
                    className={`h-[42px] px-5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${foodType === 'All' ? 'bg-[#111] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    सर्व
                  </button>
                  <button 
                    onClick={() => setFoodType('Veg')}
                    className={`h-[42px] px-5 rounded-full text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap ${foodType === 'Veg' ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:text-green-700'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${foodType === 'Veg' ? 'bg-white' : 'bg-green-500'}`}></span> शाकाहारी
                  </button>
                  <button 
                    onClick={() => setFoodType('Non-Veg')}
                    className={`h-[42px] px-5 rounded-full text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap ${foodType === 'Non-Veg' ? 'bg-[#B71C1C] text-white shadow-md' : 'text-gray-500 hover:text-red-700'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${foodType === 'Non-Veg' ? 'bg-white' : 'bg-[#B71C1C]'}`}></span> मांसाहारी
                  </button>
                </div>
              </div>

            </div>

            {/* Auto Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && searchQuery.trim() && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 max-h-80 overflow-y-auto"
                >
                  {searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((dish) => (
                        <div 
                          key={dish.id} onClick={() => { setSelectedDish(dish); setShowSuggestions(false); setSearchQuery(''); }}
                          className="px-5 py-4 hover:bg-gray-50 rounded-xl cursor-pointer flex items-center justify-between border-b border-gray-50 last:border-0 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${dish.type === 'Veg' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-[#B71C1C] border-red-100'}`}>
                              {dish.type === 'Veg' ? <FaLeaf size={14} /> : <FaDrumstickBite size={14} />}
                            </span>
                            <div>
                              <p className="font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">{dish.name}</p>
                              <p className="text-xs text-gray-400 font-bold tracking-wider uppercase mt-0.5">{dish.category}</p>
                            </div>
                          </div>
                          <span className="font-black text-gray-900 bg-white shadow-sm border border-gray-100 px-3 py-1 rounded-lg">₹{dish.price?.toString().replace('/-', '')}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500 font-medium">
                      <FaSearch className="mx-auto text-3xl mb-3 opacity-30 text-gray-400" />
                      <p className="mb-4 text-sm md:text-base">माफ करा, हा पदार्थ शोधण्यात आम्हाला अडचण येत आहे.</p>
                      <button 
                        onClick={() => {
                          setShowSuggestions(false);
                          const menuBookSection = document.getElementById('digital-menu-book');
                          if (menuBookSection) {
                            menuBookSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#111] font-bold py-2.5 px-6 rounded-full text-xs md:text-sm transition-colors border border-[#D4AF37]/30 inline-flex items-center justify-center gap-2 mx-auto"
                      >
                        <FaBookOpen className="text-[#D4AF37]" /> आमचे डिजिटल मेनूपुस्तक पहा
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Direct Menu Button */}
          <div className="flex justify-center my-4">
            <button 
              onClick={() => {
                const menuBookSection = document.getElementById('digital-menu-book');
                if (menuBookSection) {
                  menuBookSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex w-auto bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#111] font-bold text-xs md:text-sm py-2.5 px-6 rounded-full items-center justify-center gap-2 transition-all shadow-sm"
            >
              <FaBookOpen className="text-[#D4AF37]" /> संपूर्ण डिजिटल मेनू पहा
            </button>
          </div>

        </div>
      </div>

      {/* 3. आजची खास ऑफर (Premium Offer Cards) */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="container-ds px-4 relative z-10">
          <div className="text-center mb-5">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs md:text-sm mb-1 block">Special Promotions</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-[#111]">आजची खास ऑफर</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-[24px] p-3 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 group transition-all duration-500 hover:shadow-[0_30px_70px_rgba(183,28,28,0.1)]">
              <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center w-full">
                <span className="bg-[#B71C1C] text-white text-xs md:text-base font-bold px-6 md:px-8 py-2 md:py-2.5 rounded-full shadow-xl tracking-widest uppercase border border-red-500/50 flex items-center gap-2 whitespace-nowrap w-max">
                  {(promotionalOffers[activePromoIndex].badge.includes('स्पेशल') || promotionalOffers[activePromoIndex].badge.includes('ऑफर')) && <FaFire className="text-yellow-400" />}
                  {promotionalOffers[activePromoIndex].badge.includes('खासियत') && <FaStar className="text-yellow-400" />}
                  {promotionalOffers[activePromoIndex].badge.replace(/[🔥⭐👨‍🍳✨]/g, '').trim()}
                </span>
              </div>

              <div className="relative h-[340px] md:h-[450px] w-full rounded-xl overflow-hidden bg-[#111] cursor-pointer" onClick={() => setIsPromoModalOpen(true)}>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activePromoIndex} src={promotionalOffers[activePromoIndex].img} alt={promotionalOffers[activePromoIndex].title}
                    initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                    className="w-full h-full object-contain md:object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <button onClick={(e) => { e.stopPropagation(); setActivePromoIndex(p => (p - 1 + promotionalOffers.length) % promotionalOffers.length); }} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0">
                  <FaChevronLeft />
                </button>
                <button onClick={(e) => { e.stopPropagation(); setActivePromoIndex(p => (p + 1) % promotionalOffers.length); }} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <FaChevronRight />
                </button>
              </div>

              <div className="mt-5 text-center pb-1">
                <button onClick={() => setIsPromoModalOpen(true)} className="bg-transparent hover:bg-gray-50 text-[#111] font-bold py-2.5 px-6 rounded-full text-sm transition-all border-2 border-gray-200 hover:border-[#111]">
                  संपूर्ण ऑफर पहा
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. शेफची खास शिफारस (Only 6 Signature Dishes) */}
      <section className="py-10 bg-[#FAF8F5]">
        <div className="container-ds px-4 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center flex flex-col items-center"
          >
            {/* Flaticon Chef Hat SVG */}
            <div className="text-[#D4AF37] mb-2 w-[36px] md:w-[48px] h-[36px] md:h-[48px]">
              <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M416,192c0-52.9-43.1-96-96-96c-17.7,0-34.3,4.8-48.4,13.1C257.5,100.8,240.9,96,223.2,96c-52.9,0-96,43.1-96,96 c0,9.8,1.5,19.3,4.2,28.3C102.7,225,80,252.1,80,284c0,38,28.7,69.3,65.6,74.8v57.2C145.6,433.7,159.9,448,177.6,448h156.8 c17.7,0,32-14.3,32-32v-57.2C403.3,353.3,432,322,432,284c0-31.9-22.7-59-51.4-63.7C383.3,211.3,384.8,201.8,384.8,192 M334.4,416H177.6v-32h156.8V416z M366.4,284c0,21.2-17.2,38.4-38.4,38.4H184c-21.2,0-38.4-17.2-38.4-38.4 c0-20.2,15.6-36.8,35.6-38.2l9.5-0.7l2.1-9.3c3.5-15.6,17.4-27,33.5-27c10.4,0,19.8,4.7,25.9,12.7l5.9,7.7l8.7-3.9 c8-3.6,16.8-5.4,25.8-5.4c17.5,0,32.4,12.2,36.5,29.1l2.2,9.1l9.1,1.5C351.4,249,366.4,265,366.4,284z" />
              </svg>
            </div>
            
            <span className="text-[#D4AF37] font-bold uppercase text-[10px] md:text-sm mb-1 block" style={{ letterSpacing: '2px' }}>
              SIGNATURE DISHES
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-[#111] mb-2">
              शेफची खास शिफारस
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[...specialOffers, ...chefRecommends]
              .filter(dish => foodType === 'All' || dish.type === foodType)
              .map((dish, i) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={dish.id}>
                <DishCard dish={dish} onSelect={() => setSelectedDish(dish)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. संपूर्ण डिजिटल मेनूपुस्तक */}
      <section id="digital-menu-book" className="py-10 md:py-16 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        
        <div className="container-ds px-0 md:px-4 max-w-6xl mx-auto relative z-10 pb-10 md:pb-0">
           <div className="text-center mb-3 md:mb-10 px-4">
             <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-2 block">Official Digital Menu</span>
             <h2 className="text-2xl md:text-5xl font-display text-white font-bold mb-4 drop-shadow-2xl">
               संपूर्ण डिजिटल मेनूपुस्तक
             </h2>
             
             <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[11px] md:text-sm font-bold text-gray-300 mx-auto max-w-2xl px-2 md:px-4">
               {["सर्व पदार्थ", "किंमत सूची", "विशेष ऑफर्स"].map((badge, idx) => (
                 <span key={idx} className="bg-white/5 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 uppercase tracking-widest text-[#D4AF37] whitespace-nowrap">
                   {badge}
                 </span>
               ))}
             </div>
           </div>
           
           <div className="w-[95%] sm:w-full mx-auto">
             <DigitalMenuBook />
           </div>
        </div>
      </section>

      {/* 7. Big CTA */}
      <section className="pt-10 pb-24 md:pb-16 bg-[#D4AF37] relative overflow-hidden">
        <div className="container-ds px-4 relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-display font-bold text-[#111] mb-4">चला, अनुभव घेऊया!</h2>
          <p className="text-base md:text-xl text-[#111]/80 font-bold mb-8">आजच तुमची ऑर्डर द्या किंवा हॉटेलला भेट द्या.</p>
          
          <div className="flex flex-col tb:flex-row justify-center items-center gap-3">
            <a href="tel:+919168788989" className="w-[88%] tb:w-auto bg-[#111] hover:bg-black text-white font-bold py-3 md:py-4 px-8 rounded-full flex items-center justify-center gap-3 text-base md:text-lg transition-all active:scale-95 shadow-xl">
              <FaPhoneAlt /> कॉल करा
            </a>
            <a href="https://wa.me/919168788989" target="_blank" rel="noreferrer" className="w-[88%] tb:w-auto bg-white hover:bg-gray-50 text-[#111] font-bold py-3 md:py-4 px-8 rounded-full flex items-center justify-center gap-3 text-base md:text-lg transition-all active:scale-95 shadow-xl">
              <FaWhatsapp size={20} className="text-[#25D366]" /> WhatsApp
            </a>
            <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="w-[88%] tb:w-auto bg-white/30 hover:bg-white/40 border border-[#111]/20 text-[#111] font-bold py-3 md:py-4 px-8 rounded-full flex items-center justify-center gap-3 text-base md:text-lg transition-all active:scale-95 backdrop-blur-sm">
              <FaMapMarkerAlt /> लोकेशन
            </a>
          </div>
        </div>
      </section>

      {/* Modals for Dish Details and Promo... (Kept identical logic but styled premium) */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-4 pb-0">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDish(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-t-[32px] md:rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[92vh] md:max-h-[85vh] flex flex-col"
            >
              <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/30 backdrop-blur-md text-white rounded-full flex items-center justify-center transition hover:bg-black/50">
                <FaTimes size={14} />
              </button>
              
              <div className="relative h-64 shrink-0 bg-[#111]">
                {selectedDish.img && <img src={selectedDish.img} alt={selectedDish.name} className="w-full h-full object-cover" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  {selectedDish.badge && (
                    <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest mb-3">
                      {(selectedDish.badge.includes('स्पेशल') || selectedDish.badge.includes('ऑफर')) && <FaFire className="text-[#B71C1C]" />}
                      {selectedDish.badge.includes('लोकप्रिय') && <FaStar className="text-[#B71C1C]" />}
                      {selectedDish.badge.includes('शेफ') && <FaUtensils className="text-[#B71C1C]" />}
                      {selectedDish.badge.replace(/[🔥⭐👨‍🍳✨]/g, '').trim()}
                    </span>
                  )}
                  <h2 className="text-white text-3xl font-display font-bold leading-tight">{selectedDish.name}</h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-grow pb-32">
                <p className="text-gray-600 font-medium text-sm md:text-base mb-6 leading-relaxed">
                  {selectedDish.desc || "अस्सल कोल्हापुरी चवीचा उत्तम पदार्थ. ताजे मसाले आणि उत्कृष्ट दर्जा."}
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">किंमत</span>
                  {selectedDish.price?.toString().includes('/') ? (
                    <div className="flex gap-4">
                       <span className="text-lg font-black text-[#111]">₹{selectedDish.price.toString().split('/')[0].replace(/[-]/g, '').trim()} <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Half</span></span>
                       <span className="text-lg font-black text-[#B71C1C]">₹{selectedDish.price.toString().split('/')[1].replace(/[-]/g, '').trim()} <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Full</span></span>
                    </div>
                  ) : (
                    <span className="text-2xl font-black text-[#111]">₹{selectedDish.price?.toString().replace(/[-]/g, '').trim()}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex flex-col gap-1 bg-white border border-gray-100 p-4 rounded-xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">प्रकार</span>
                    <span className="font-bold text-gray-800">{selectedDish.category || 'स्पेशल डिश'}</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-white border border-gray-100 p-4 rounded-xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">आहार</span>
                    <span className="font-bold flex items-center gap-1.5">
                      {selectedDish.type === 'Veg' ? <><span className="w-2.5 h-2.5 bg-green-500 rounded-sm"></span> शाकाहारी</> : <><span className="w-2.5 h-2.5 bg-[#B71C1C] rounded-sm"></span> मांसाहारी</>}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex items-center gap-3 pb-safe z-20">
                <a href="tel:+919168788989" className="flex-[1] bg-gray-100 hover:bg-gray-200 text-[#111] font-bold py-3.5 rounded-xl text-center transition-colors">कॉल</a>
                <a href={`https://wa.me/919168788989?text=मला ${selectedDish.name} ची ऑर्डर द्यायची आहे.`} target="_blank" rel="noreferrer" className="flex-[2] bg-[#B71C1C] hover:bg-red-800 text-white font-bold py-3.5 rounded-xl text-center transition-colors shadow-lg">WhatsApp ऑर्डर</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPromoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-0 md:p-4" onClick={() => setIsPromoModalOpen(false)}>
            <div className="relative w-full max-w-3xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <div className="w-full flex justify-end mb-4 px-4">
                 <button onClick={() => setIsPromoModalOpen(false)} className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20">
                   <FaTimes size={16} />
                 </button>
              </div>
              <img src={promotionalOffers[activePromoIndex].img} alt="Offer" className="max-w-full max-h-[80vh] object-contain rounded-none md:rounded-2xl shadow-2xl" />
              
              <div className="mt-8 flex gap-4 w-full px-4 justify-center">
                 <button onClick={() => setActivePromoIndex(p => (p - 1 + promotionalOffers.length) % promotionalOffers.length)} className="w-12 h-12 bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white rounded-full flex items-center justify-center transition-colors">
                   <FaChevronLeft />
                 </button>
                 <a href={`https://wa.me/919168788989?text=मला ${promotionalOffers[activePromoIndex].title} बद्दल माहिती हवी आहे.`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 flex-grow max-w-xs justify-center">
                   <FaWhatsapp size={20} /> WhatsApp
                 </a>
                 <button onClick={() => setActivePromoIndex(p => (p + 1) % promotionalOffers.length)} className="w-12 h-12 bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white rounded-full flex items-center justify-center transition-colors">
                   <FaChevronRight />
                 </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
