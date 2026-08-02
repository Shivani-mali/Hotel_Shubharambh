import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearchPlus, FaSearchMinus, FaExpand, 
  FaChevronLeft, FaChevronRight, FaBookOpen, FaDownload, FaSpinner 
} from 'react-icons/fa';
import HTMLFlipBook from 'react-pageflip';

// Automatically import all images from the menu_book folder
const menuImageModules = import.meta.glob('../../assets/Menu/menu_book/*.{jpeg,jpg,png,webp}', { eager: true, import: 'default' });
const sortedMenuPages = Object.keys(menuImageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(key => menuImageModules[key]);

// Page Component for FlipBook
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-[#2a1610] flex items-center justify-center overflow-hidden" ref={ref} data-density="hard">
      {props.children}
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#FFFBF0] flex items-center justify-center overflow-hidden relative" ref={ref}>
       {/* Subtle spine shadow for realism */}
       <div className="absolute inset-y-0 left-0 w-4 lg:w-12 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none z-10" />
       {/* Subtle page edge highlight */}
       <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-10" />
       {props.children}
    </div>
  );
});

const DigitalMenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const bookRef = useRef(null);
  const containerRef = useRef(null);
  const fullscreenWrapperRef = useRef(null);

  const totalPages = sortedMenuPages.length; // Actually totalPages * 2 with splits, but keep for variable

  useEffect(() => {
    // Simulate initial load for smooth entry
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onPage = (e) => {
    setCurrentPage(e.data);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (fullscreenWrapperRef.current) {
        fullscreenWrapperRef.current.requestFullscreen().catch(err => console.log(err));
      }
    } else {
      document.exitFullscreen();
    }
  };

  const dragConstraints = zoom > 1 ? containerRef : { top: 0, left: 0, right: 0, bottom: 0 };

  return (
    <div 
      ref={fullscreenWrapperRef}
      className="w-full relative flex flex-col font-sans overflow-hidden bg-black/90 backdrop-blur-3xl h-[85vh] min-h-[500px] md:h-[90vh] md:rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10"
    >
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="absolute inset-0 z-[200] bg-[#111] flex flex-col items-center justify-center text-[#D4AF37]"
          >
            <FaSpinner className="animate-spin text-4xl mb-4" />
            <h2 className="text-xl font-bold tracking-wider">मेनू पुस्तक उघडत आहे...</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Minimal Toolbar */}
      <div className="h-[48px] bg-black/60 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-4 md:px-6 text-white shrink-0 z-50">
        <div className="flex items-center gap-2 w-1/3">
          <FaBookOpen className="text-[#D4AF37]" size={16} />
          <span className="font-bold text-sm tracking-wide hidden sm:block text-gray-200">डिजिटल मेनू</span>
        </div>
        
        <div className="flex items-center justify-center w-1/3">
          <span className="text-xs font-bold tracking-widest text-gray-300 bg-white/5 px-3 py-1 rounded-full shadow-inner whitespace-nowrap">
            पान {currentPage + 1} / {totalPages * 2}
          </span>
        </div>
        
        <div className="flex items-center justify-end gap-1 sm:gap-2 w-1/3">
          <button onClick={handleZoomOut} disabled={zoom === 1} className="p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30">
            <FaSearchMinus size={14} />
          </button>
          <button onClick={handleZoomIn} disabled={zoom === 3} className="p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30">
            <FaSearchPlus size={14} />
          </button>
          <button onClick={toggleFullscreen} className="p-2 hover:bg-white/10 rounded-full transition hidden sm:block" title="Fullscreen">
            <FaExpand size={14} />
          </button>
          <a href={sortedMenuPages[0]} download="Hotel_Shubharambh_Menu" className="p-2 hover:bg-white/10 rounded-full transition hidden sm:block text-[#D4AF37]" title="Download">
            <FaDownload size={14} />
          </a>
        </div>
      </div>

      {/* Book Viewer Area */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-hidden flex items-center justify-center relative select-none"
      >
        <motion.div 
          drag={zoom > 1}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
          style={{ scale: zoom }}
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 origin-center ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
        >
          {/* FlipBook Container - Maximized size */}
          <div className="h-[95%] w-[95%] max-w-[1400px] mx-auto flex items-center justify-center drop-shadow-2xl">
            <HTMLFlipBook 
              width={600} 
              height={850} 
              size="stretch"
              minWidth={280}
              maxWidth={800}
              minHeight={400}
              maxHeight={1100}
              maxShadowOpacity={0.6}
              showCover={true}
              mobileScrollSupport={true}
              usePortrait={true} // Force single page on mobile layout automatically
              onFlip={onPage}
              ref={bookRef}
              className="digital-menu-book rounded-sm md:rounded-md"
              style={{ margin: "0 auto" }}
            >
              {(() => {
                const pagesToRender = [];
                
                // 1. Front Cover
                pagesToRender.push(
                  <PageCover key={`cover`}>
                    <img 
                      src={sortedMenuPages[0]} 
                      alt="Front Cover" 
                      className="w-full h-full object-cover drop-shadow-md" 
                      draggable="false" 
                    />
                  </PageCover>
                );

                // 2. Double-page Spreads
                for (let i = 1; i < sortedMenuPages.length; i++) {
                  const page = sortedMenuPages[i];
                  
                  // Left Half
                  pagesToRender.push(
                    <Page key={`page-${i}-left`}>
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src={page} 
                          className="absolute top-0 left-0 w-[200%] h-full object-cover mix-blend-multiply opacity-[0.98] max-w-none" 
                          alt={`Page ${i * 2 - 1}`} 
                          draggable="false" 
                        />
                      </div>
                    </Page>
                  );
                  
                  // Right Half
                  pagesToRender.push(
                    <Page key={`page-${i}-right`}>
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src={page} 
                          className="absolute top-0 right-0 w-[200%] h-full object-cover mix-blend-multiply opacity-[0.98] max-w-none" 
                          alt={`Page ${i * 2}`} 
                          draggable="false" 
                        />
                      </div>
                    </Page>
                  );
                }

                // 3. Back Cover
                pagesToRender.push(
                  <PageCover key={`back-cover`}>
                    <div className="w-full h-full bg-[#2a1610] flex flex-col items-center justify-center relative overflow-hidden">
                       <img 
                         src={sortedMenuPages[0]} 
                         alt="Back Cover bg" 
                         className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale blur-sm" 
                         draggable="false" 
                       />
                       <div className="relative z-10 text-[#D4AF37] font-bold text-2xl tracking-widest text-center px-4">
                         🏨 हॉटेल शुभारंभ Lodging & Family Restaurant
                         <p className="text-white/50 text-sm mt-2 tracking-normal font-medium">Family Restaurant</p>
                       </div>
                    </div>
                  </PageCover>
                );

                return pagesToRender;
              })()}
            </HTMLFlipBook>
          </div>
        </motion.div>

        {/* Floating Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 md:left-6 flex items-center pointer-events-none z-40">
          <button 
            onClick={handlePrev} 
            disabled={currentPage === 0}
            className="w-12 h-12 md:w-14 md:h-14 bg-black/60 hover:bg-[#B71C1C] backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto disabled:opacity-0 disabled:pointer-events-none border border-white/10"
            title="मागील पान"
          >
            <FaChevronLeft size={20} className="-ml-1" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-2 md:right-6 flex items-center pointer-events-none z-40">
          <button 
            onClick={handleNext} 
            disabled={currentPage >= (totalPages * 2 - 2)}
            className="w-12 h-12 md:w-14 md:h-14 bg-black/60 hover:bg-[#B71C1C] backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto disabled:opacity-0 disabled:pointer-events-none border border-white/10"
            title="पुढील पान"
          >
            <FaChevronRight size={20} className="-mr-1" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default DigitalMenuBook;
