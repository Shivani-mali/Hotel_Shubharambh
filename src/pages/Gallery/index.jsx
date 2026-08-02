import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaCamera, FaImage } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Local Assets
import video1 from '../../assets/Gallery/Video_1 (1).mp4';
const videoFiles = import.meta.glob('../../assets/Gallery/*.mp4', { eager: true, query: '?url', import: 'default' });
const videos = Object.values(videoFiles);

import hotel1 from '../../assets/Gallery/Hotel_1.jpg';
import hotel2 from '../../assets/Gallery/Hotel2.jpg';
import hotelNight from '../../assets/Gallery/Hotel_at_night.jpg';
import hotelNight2 from '../../assets/Gallery/Hotel_at_night (2).jpg';
import hall from '../../assets/Gallery/Hall.jpg';


import room1 from '../../assets/Rooms/room1.jpeg';
import room2 from '../../assets/Rooms/room2.jpeg';
import room3 from '../../assets/Rooms/room3.jpeg';
import room4 from '../../assets/Rooms/room4.jpeg';
import room5 from '../../assets/Rooms/room5.jpeg';
import room6 from '../../assets/Rooms/room6.jpeg';

const menuImagesMap = import.meta.glob([
  '../../assets/Menu/**/*.{jpg,jpeg,png}',
  '!../../assets/Menu/menu_book/**'
], { eager: true, query: '?url', import: 'default' });
const foodImages = Object.values(menuImagesMap);

const hotelImages = [
  hotel1, hotel2, hotelNight, hotelNight2, hall
];

const roomImages = [
  room1, room2, room3, room4, room5, room6
];

const eventImages = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8892bf309c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80"
];



// Helper Component for Masonry Grid Rows
const MasonryGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {images.map((src, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className={`relative overflow-hidden rounded-xl cursor-pointer group ${
            idx === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
          }`}
          onClick={() => onImageClick(images, idx)}
        >
          <img src={src} alt="Gallery item" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <FaCamera className="text-white opacity-0 group-hover:opacity-100 text-2xl md:text-3xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Gallery = () => {
  // Lightbox State
  const [lightboxData, setLightboxData] = useState({ images: [], index: 0, isOpen: false });

  // Grid Expansion State
  const [showAllFood, setShowAllFood] = useState(false);
  const [showAllRooms, setShowAllRooms] = useState(false);

  // Video Playback Control
  const handleVideoPlay = (e) => {
    const vids = document.querySelectorAll('.gallery-video');
    vids.forEach(v => {
      if (v !== e.target) v.pause();
    });
  };

  // Typewriter State
  const [typedText, setTypedText] = useState('');
  const fullText = "CHECK OUT GALLERY";

  useEffect(() => {
    let currentIdx = 0;
    let isDeleting = false;
    let timeout;
    
    const type = () => {
      if (!isDeleting && currentIdx <= fullText.length) {
        setTypedText(fullText.slice(0, currentIdx));
        currentIdx++;
        timeout = setTimeout(type, 150);
      } else if (isDeleting && currentIdx >= 0) {
        setTypedText(fullText.slice(0, currentIdx));
        currentIdx--;
        timeout = setTimeout(type, 100);
      } else if (currentIdx > fullText.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2000); // Wait 2s before deleting
      } else if (currentIdx < 0) {
        isDeleting = false;
        currentIdx = 0;
        timeout = setTimeout(type, 500); // Wait 0.5s before restarting
      }
    };
    
    timeout = setTimeout(type, 150);
    return () => clearTimeout(timeout);
  }, []);

  const openLightbox = (images, index) => {
    setLightboxData({ images, index, isOpen: true });
  };

  const closeLightbox = () => setLightboxData({ ...lightboxData, isOpen: false });

  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxData(prev => ({ ...prev, index: (prev.index + 1) % prev.images.length }));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxData(prev => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxData.isOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData.isOpen]);

  return (
    <div className="bg-[#111] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <SEO 
        title="गॅलरी | 🏨 हॉटेल शुभारंभ Lodging & Family Restaurant (Premium Gallery)"
        description="🏨 हॉटेल शुभारंभ Lodging & Family Restaurantचे प्रीमियम फोटो आणि व्हिडिओ. आमचे स्वादिष्ट पदार्थ, स्वच्छ रूम्स, आणि भव्य हॉलची झलक पहा."
      />

      {/* 1. Hero Section (Cinematic Video) */}
      <section className="relative h-[85vh] min-h-[500px] md:h-screen md:min-h-[600px] flex items-end justify-center pb-32 md:pb-40 overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 block drop-shadow-md">Experience Luxury</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white drop-shadow-2xl uppercase tracking-wider min-h-[36px] md:min-h-[48px] lg:min-h-[60px]">
              {typedText}<span className="animate-pulse">|</span>
            </h1>
            <div className="flex flex-row justify-center gap-4 mt-8">
              <button 
                onClick={() => document.getElementById('photos-section').scrollIntoView({ behavior: 'smooth' })} 
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold py-3 px-6 md:px-8 rounded-full flex items-center gap-2 transition-all"
              >
                <FaImage className="text-[#D4AF37]" /> Photos
              </button>
              <button 
                onClick={() => document.getElementById('videos-section').scrollIntoView({ behavior: 'smooth' })} 
                className="bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-3 px-6 md:px-8 rounded-full flex items-center gap-2 transition-all shadow-lg"
              >
                <FaPlay /> Videos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. स्वादिष्ट पदार्थ */}
      <section id="photos-section" className="py-24 bg-[#1a1a1a]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Our Cuisine</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">स्वादिष्ट पदार्थ</h2>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
               <button 
                 onClick={() => document.getElementById('photos-section').scrollIntoView({ behavior: 'smooth' })} 
                 className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm md:text-base font-bold py-2.5 px-5 rounded-full flex items-center gap-2 transition-all"
               >
                 <FaImage className="text-[#D4AF37]" /> Photos
               </button>
               <button 
                 onClick={() => document.getElementById('videos-section').scrollIntoView({ behavior: 'smooth' })} 
                 className="bg-[#D4AF37] hover:bg-yellow-500 text-black text-sm md:text-base font-bold py-2.5 px-5 rounded-full flex items-center gap-2 transition-all shadow-lg"
               >
                 <FaPlay /> Videos
               </button>
            </div>
          </div>
          <MasonryGrid images={showAllFood ? foodImages : foodImages.slice(0, 5)} onImageClick={openLightbox} />
          {!showAllFood && (
            <div className="mt-10 text-center">
               <button onClick={() => setShowAllFood(true)} className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center gap-2 mx-auto">
                  <FaImage className="text-[#D4AF37]" /> अजून पदार्थ पहा
               </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. हॉटेल आणि रेस्टॉरंट */}
      <section className="py-24 bg-[#111]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Ambience</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">हॉटेल आणि रेस्टॉरंट</h2>
            </div>
          </div>
          <MasonryGrid images={hotelImages} onImageClick={openLightbox} />
          <div className="mt-10 text-center">
             <button onClick={() => openLightbox(hotelImages, 0)} className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center gap-2 mx-auto">
                <FaImage className="text-[#D4AF37]" /> संपूर्ण हॉटेल गॅलरी
             </button>
          </div>
        </div>
      </section>

      {/* 4. रूम्स */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Accommodation</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">आरामदायी रूम्स</h2>
            </div>
          </div>
          <MasonryGrid images={showAllRooms ? roomImages : roomImages.slice(0, 5)} onImageClick={openLightbox} />
          {!showAllRooms && (
            <div className="mt-10 text-center">
               <button onClick={() => setShowAllRooms(true)} className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center gap-2 mx-auto">
                  <FaImage className="text-[#D4AF37]" /> सर्व रूम फोटो
               </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. Video Gallery */}
      <section id="videos-section" className="py-24 bg-[#1a1a1a]">
        <div className="container-ds px-4 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-[#B71C1C] font-bold tracking-widest uppercase text-sm mb-2 block">Cinematic View</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">व्हिडिओ गॅलरी</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">आमच्या हॉटेलची सुंदर झलक पाहण्यासाठी व्हिडिओ गॅलरीला भेट द्या.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative shadow-lg aspect-square sm:aspect-video md:aspect-[4/5] lg:aspect-[4/3]"
              >
                <video 
                  src={vid} 
                  controls 
                  preload="metadata"
                  onPlay={handleVideoPlay}
                  className="w-full h-full object-contain bg-black gallery-video"
                ></video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 bg-[#111] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#2a0808]"></div>
        <div className="container-ds px-4 relative z-10 max-w-3xl mx-auto">
          <FaCamera className="text-5xl text-[#D4AF37] mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">संपूर्ण गॅलरी पहा</h2>
          <p className="text-gray-400 font-medium text-lg md:text-xl mb-12">आमच्या हॉटेलच्या सर्व कोपऱ्यांची सफर करा.</p>
          
          <button 
            onClick={() => openLightbox([...foodImages, ...hotelImages, ...roomImages], 0)} 
            className="bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-full text-lg shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
          >
            Complete Gallery
          </button>
        </div>
      </section>

      {/* Universal Lightbox Modal */}
      <AnimatePresence>
        {lightboxData.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-0 md:p-4" onClick={closeLightbox}>
            
            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-[60] text-white/50 font-bold tracking-widest text-sm">
              {lightboxData.index + 1} / {lightboxData.images.length}
            </div>

            {/* Close */}
            <button onClick={closeLightbox} className="absolute top-6 right-6 z-[60] w-12 h-12 bg-white/5 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors border border-white/10">
              <FaTimes size={20} />
            </button>
            
            {/* Prev/Next Arrows */}
            <button onClick={prevImage} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/50 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] text-white rounded-full flex items-center justify-center transition-colors border border-white/20">
               <FaChevronLeft size={16} />
            </button>
            <button onClick={nextImage} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/50 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] text-white rounded-full flex items-center justify-center transition-colors border border-white/20">
               <FaChevronRight size={16} />
            </button>

            {/* Image Container with swipe support */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-screen p-4 md:p-0 flex items-center justify-center w-full h-full"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -100) nextImage();
                else if (swipe > 100) prevImage();
              }}
            >
              <img 
                key={lightboxData.index} // Forces re-render for animation on index change
                src={lightboxData.images[lightboxData.index]} 
                alt="Gallery Fullscreen" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)]" 
                draggable="false"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
