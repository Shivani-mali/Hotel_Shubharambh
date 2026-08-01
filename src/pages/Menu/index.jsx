import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaSearch, FaLeaf, FaDrumstickBite, FaFire, FaTimes, FaChevronDown } from 'react-icons/fa';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';

const categories = ["All", "Starter", "Main Course", "Thali", "Chinese", "Breakfast", "Beverages", "Desserts"];

// Removed local gallery image imports since they are hotel exteriors

const menuData = [
  {
    id: 1,
    name: "Special Mutton Thali",
    category: "Thali",
    type: "Non-Veg",
    price: 350,
    desc: "Authentic Kolhapuri mutton thali with tambda & pandhra rassa.",
    ingredients: "Mutton, Kolhapuri Masala, Onion, Garlic, Coconut",
    spice: 3,
    serving: "1 Person",
    isChefSpecial: true,
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Veg Kolhapuri",
    category: "Main Course",
    type: "Veg",
    price: 220,
    desc: "Spicy and flavorful mixed vegetable curry.",
    ingredients: "Mixed Veggies, Special Spices, Tomato Gravy",
    spice: 2,
    serving: "2 Persons",
    isChefSpecial: false,
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    category: "Main Course",
    type: "Non-Veg",
    price: 280,
    desc: "Aromatic basmati rice cooked with marinated chicken.",
    ingredients: "Basmati Rice, Chicken, Biryani Masala, Saffron",
    spice: 2,
    serving: "1-2 Persons",
    isChefSpecial: true,
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Paneer Tikka Masala",
    category: "Main Course",
    type: "Veg",
    price: 250,
    desc: "Grilled paneer cubes in a rich and creamy tomato gravy.",
    ingredients: "Paneer, Tomato, Cream, Indian Spices",
    spice: 1,
    serving: "2 Persons",
    isChefSpecial: false,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Fish Fry",
    category: "Starter",
    type: "Non-Veg",
    price: 290,
    desc: "Crispy and spicy shallow-fried local fish.",
    ingredients: "Fresh Fish, Malvani Masala, Rice Flour",
    spice: 2,
    serving: "1 Person",
    isChefSpecial: true,
    img: "https://images.unsplash.com/photo-1599487405270-8e12eb00d026?auto=format&fit=crop&q=80"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState("All");
  const [selectedDish, setSelectedDish] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredMenu = useMemo(() => {
    return menuData.filter(item => {
      const matchCategory = activeCategory === "All" || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchVeg = vegFilter === "All" || item.type === vegFilter;
      return matchCategory && matchSearch && matchVeg;
    });
  }, [activeCategory, searchQuery, vegFilter]);

  const chefSpecials = menuData.filter(item => item.isChefSpecial);

  return (
    <div className="bg-brand-light min-h-screen pb-24">
      <SEO 
        title="आमचा मेनू (Restaurant Menu)"
        description="अस्सल कोल्हापुरी चवीचा अनुभव. हॉटेल शुभारंभ मधील शाकाहारी आणि मांसाहारी मेनू."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img src={hotelMainBg} alt="Menu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-ds relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-display font-normal text-white mb-4"
          >
            आमचा <span className="text-brand-gold">मेनू</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto italic"
          >
            "अस्सल कोल्हापुरी चवीचा अनुभव."
          </motion.p>
        </div>
      </section>

      {/* Controls: Search, Filter Dropdown & Veg Toggle */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4">
        <div className="container-ds flex flex-col sm:flex-row gap-4 items-center justify-between px-4">
          
          <div className="flex w-full sm:max-w-lg gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="शोधा (Search dishes)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
              />
            </div>
            
            {/* Category Dropdown (Custom) */}
            <div className="relative w-1/3 min-w-[140px] sm:min-w-[160px]">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-full flex items-center justify-between pl-4 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red bg-white hover:bg-gray-50 text-brand-dark font-bold text-sm cursor-pointer shadow-sm transition-colors"
              >
                <span className="truncate">{activeCategory === "All" ? "All Categories" : activeCategory}</span>
                <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={12} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden"
                    >
                      <div className="max-h-64 overflow-y-auto py-2">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setActiveCategory(cat);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-2.5 text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-brand-red/10 text-brand-red' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-dark'}`}
                          >
                            {cat === "All" ? "All Categories" : cat}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Veg / Non-Veg Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-full relative w-full sm:w-auto">
            {["All", "Veg", "Non-Veg"].map((type) => (
              <button
                key={type}
                onClick={() => setVegFilter(type)}
                className={`flex-1 sm:px-6 py-2 rounded-full text-sm font-bold z-10 transition-colors ${vegFilter === type ? (type === 'Veg' ? 'text-green-700' : type === 'Non-Veg' ? 'text-red-700' : 'text-brand-dark') : 'text-gray-500'}`}
              >
                {type === "Veg" && <FaLeaf className="inline mr-1" />}
                {type === "Non-Veg" && <FaDrumstickBite className="inline mr-1" />}
                {type === "All" && "All"}
                {type !== "All" && type}
              </button>
            ))}
            {/* Animated Pill Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[33.33%] bg-white rounded-full shadow-sm transition-all duration-300 ease-out border ${vegFilter === 'Veg' ? 'border-green-500 left-1/3' : vegFilter === 'Non-Veg' ? 'border-red-500 left-[66.66%]' : 'border-gray-200 left-1'}`}
            ></div>
          </div>

        </div>
      </div>

      <div className="container-ds pt-10">
        
        {/* Chef Specials Banner (Only show if "All" is selected) */}
        {activeCategory === "All" && searchQuery === "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-normal text-brand-dark mb-6 flex items-center gap-2">
              <span className="text-brand-gold">★</span> शेफ स्पेशल (Chef Special)
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
              {chefSpecials.map(dish => (
                <div 
                  key={dish.id} 
                  onClick={() => setSelectedDish(dish)}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-4 shadow-sm border border-brand-gold/30 flex gap-4 cursor-pointer hover:shadow-md transition-shadow snap-start relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Chef Special</div>
                  <img src={dish.img} alt={dish.name} className="w-24 h-24 rounded-xl object-cover" />
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      {dish.type === 'Veg' ? <FaLeaf className="text-green-600" size={12} /> : <FaDrumstickBite className="text-red-600" size={12} />}
                      <h3 className="font-bold text-gray-900 leading-tight">{dish.name}</h3>
                    </div>
                    <p className="font-bold text-brand-red text-lg mb-1">₹{dish.price}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMenu.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    {dish.type === 'Veg' ? <FaLeaf className="text-green-600" size={12} /> : <FaDrumstickBite className="text-red-600" size={12} />}
                    <span className={`text-xs font-bold ${dish.type === 'Veg' ? 'text-green-700' : 'text-red-700'}`}>{dish.type}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-brand-dark leading-tight">{dish.name}</h3>
                    <span className="text-lg font-bold text-brand-red">₹{dish.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{dish.desc}</p>
                  <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
                    <span className="flex items-center gap-1 text-orange-500">
                      {[...Array(dish.spice)].map((_, i) => <FaFire key={i} />)}
                    </span>
                    <button className="text-brand-red font-bold uppercase tracking-wider group-hover:text-red-700 transition-colors">Details →</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">कोणतेही डिश सापडले नाही (No dishes found).</p>
          </div>
        )}

      </div>

      {/* Dish Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative bg-white w-full max-w-lg rounded-[28px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col"
            >
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur"
              >
                <FaTimes />
              </button>
              
              <img src={selectedDish.img} alt={selectedDish.name} className="w-full h-64 sm:h-72 object-cover" />
              
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${selectedDish.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {selectedDish.type === 'Veg' ? <FaLeaf /> : <FaDrumstickBite />} {selectedDish.type}
                  </span>
                  {selectedDish.isChefSpecial && (
                    <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700 flex items-center gap-1">
                      ★ Chef Special
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">{selectedDish.name}</h2>
                  <span className="text-2xl sm:text-3xl font-bold text-brand-red">₹{selectedDish.price}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedDish.desc}</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">साहित्य (Ingredients):</span>
                    <span className="text-gray-900 font-medium text-sm text-right max-w-[60%]">{selectedDish.ingredients}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">प्रमाण (Serving):</span>
                    <span className="text-gray-900 font-medium text-sm">{selectedDish.serving}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">तिखटपणा (Spice Level):</span>
                    <span className="flex text-orange-500">
                      {[...Array(selectedDish.spice)].map((_, i) => <FaFire key={i} size={14} />)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={`tel:+919860842093`} className="btn-primary w-full py-4 text-center flex justify-center items-center gap-2 text-lg">
                    <FaPhoneAlt /> कॉल करून ऑर्डर करा
                  </a>
                  <a href={`https://wa.me/919860842093?text=I would like to order: ${selectedDish.name}`} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold w-full py-4 rounded-full text-center flex justify-center items-center gap-2 text-lg transition-colors">
                    <FaWhatsapp size={20} /> <span className="font-english">WhatsApp</span> वर ऑर्डर द्या
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
