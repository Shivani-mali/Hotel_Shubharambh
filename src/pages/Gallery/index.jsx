import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand } from 'react-icons/fa';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';

// Dynamically import gallery images
const galleryImagesMap = import.meta.glob('../../assets/Gallery/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const rawImages = Object.values(galleryImagesMap);

const categories = ["All", "Restaurant", "Food", "Lodging", "Function Hall", "Garden", "Events"];

// For the sake of the demo, assign random categories to existing images
// In a real app, you'd fetch this from an API or have a structured folder.
const galleryData = rawImages.map((img, i) => ({
  id: i,
  src: img,
  category: categories[(i % (categories.length - 1)) + 1], // distribute across categories
  title: `Shubharambh ${i + 1}`
}));

// Removed extra placeholders as requested by the user

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-brand-light min-h-screen pb-24">
      <SEO 
        title="गॅलरी (Gallery)"
        description="हॉटेल शुभारंभ चे काही क्षणचित्रे. आमचे रेस्टॉरंट, लॉजिंग आणि स्वादिष्ट जेवणाचे फोटो."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex flex-col justify-center mb-10">
        <div className="absolute inset-0 z-0">
          <img src={hotelMainBg} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-ds relative z-10 text-center px-4 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            आमची <span className="text-brand-red">गॅलरी</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto"
          >
            "क्षणचित्रे जी खूप काही सांगून जातात."
          </motion.p>
        </div>
      </section>

      <div className="container-ds">
        {/* Filter Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-6 mb-8 hide-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand-red text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="break-inside-avoid relative rounded-[24px] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
              >
                <img src={img.src} alt={img.title} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <FaExpand className="text-white opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-sm bg-brand-red/90 px-2 py-1 rounded">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">कोणतेही फोटो सापडले नाहीत.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes size={20} />
            </button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
              <div className="absolute bottom-[-40px] text-center w-full">
                <span className="text-white font-medium bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
