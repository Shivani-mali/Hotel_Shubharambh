import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaUtensils, FaStar, FaCar, FaChild, FaBed, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Marquee } from '../../components/ui/marquee';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';

// Dynamically import all review images
const reviewImages = import.meta.glob('../../assets/reviews/*.png', { eager: true, query: '?url', import: 'default' });
const imagePaths = Object.values(reviewImages);

// Dynamically import gallery images
const galleryImagesMap = import.meta.glob('../../assets/Gallery/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const galleryImages = Object.values(galleryImagesMap);

const reviews = imagePaths.map(path => ({ img: path }));
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-[280px] sm:w-[350px] md:w-[400px] shrink-0 cursor-pointer overflow-hidden rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] self-center"
    >
      <img className="w-full h-auto block" alt="Customer Review" src={img} loading="lazy" />
    </div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="overflow-hidden">
      <SEO 
        title="होम (Home)"
        description="मुडशिंगी मधील सर्वोत्तम फॅमिली रेस्टॉरंट, आरामदायक लॉजिंग आणि तुमच्या खास क्षणांसाठी फंक्शन हॉल. अस्सल कोल्हापुरी चवीचा अनुभव."
        schema={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Hotel Shubharambh",
          "image": "https://hotelshubharambh.com/hero.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mudshingi Road",
            "addressLocality": "Kolhapur",
            "addressRegion": "MH",
            "postalCode": "416005",
            "addressCountry": "IN"
          },
          "telephone": "+919860842093",
          "servesCuisine": "Kolhapuri, Indian",
          "priceRange": "$$"
        }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] min-h-[550px] md:min-h-[600px] flex flex-col justify-end md:justify-center pb-40 md:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={hotelMainBg} 
            alt="Hotel Shubharambh Garden" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 md:bg-black/60"></div>
        </div>
        
        <div className="container-ds relative z-10 text-center px-6 md:px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center">
            <span className="text-brand-gold font-semibold uppercase text-[14px] md:text-base mb-5 block tracking-wide">
              परंपरेचा आणि चवीचा संगम
            </span>
            <h1 className="text-[32px] leading-[1.2] md:text-6xl lg:text-7xl font-bold text-white mb-6">
              हॉटेल <span className="text-brand-red">शुभारंभ</span>
            </h1>
            
            <p className="text-gray-200 text-[16px] md:hidden mb-8 font-medium">
              फॅमिली रेस्टॉरंट &bull; लॉजिंग &bull; हॉल
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 hidden md:block">
              मुडशिंगी मधील सर्वोत्तम फॅमिली रेस्टॉरंट, आरामदायक लॉजिंग आणि तुमच्या खास क्षणांसाठी फंक्शन हॉल.
            </p>
            
            <div className="hidden md:flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center max-w-[320px] mx-auto sm:max-w-none">
              <a href="tel:+919860842093" className="btn-primary flex items-center justify-center text-[16px] md:text-lg h-[52px] md:h-auto md:py-4 w-full sm:w-[220px]">
                <FaPhoneAlt className="mr-2" /> आता कॉल करा
              </a>
              <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="btn-outline text-white border-white hover:bg-white hover:text-brand-dark flex items-center justify-center text-[16px] md:text-lg h-[48px] md:h-auto md:py-4 w-full sm:w-[220px] bg-black/20 backdrop-blur-[2px] md:bg-transparent">
                <FaMapMarkerAlt className="mr-2" /> दिशा (Directions)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Action Cards (Hidden on mobile due to floating bar) */}
      <section className="relative z-20 -mt-10 px-4 hidden tb:block">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 bg-white p-4 md:p-6 rounded-2xl shadow-card">
            <a href="tel:+919860842093" className="flex flex-col items-center justify-center p-4 bg-red-50 rounded-xl hover:bg-brand-red hover:text-white transition-colors text-brand-red group">
              <FaPhoneAlt size={24} className="mb-2" />
              <span className="font-semibold text-sm md:text-base">कॉल करा</span>
            </a>
            <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-xl hover:bg-green-600 hover:text-white transition-colors text-green-600 group">
              <FaWhatsapp size={28} className="mb-2" />
              <span className="font-semibold text-sm md:text-base">WhatsApp</span>
            </a>
            <Link to="/menu" className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-xl hover:bg-brand-gold hover:text-white transition-colors text-[#8A6D15] group">
              <FaUtensils size={24} className="mb-2" />
              <span className="font-semibold text-sm md:text-base">मेनू पहा</span>
            </Link>
            <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white transition-colors text-blue-600 group">
              <FaMapMarkerAlt size={24} className="mb-2" />
              <span className="font-semibold text-sm md:text-base">लोकेशन</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-24 bg-brand-light">
        <div className="container-ds">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="section-subtitle text-left">आमच्याबद्दल</div>
              <h2 className="text-3xl tb:text-4xl font-bold text-brand-dark mb-6">कोल्हापूरची अस्सल चव आणि आपुलकीची सेवा</h2>
              <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
                <p>
                  हॉटेल शुभारंभमध्ये आपले मनःपूर्वक स्वागत!
                </p>
                <p>
                  अस्सल कोल्हापुरी चव, स्वच्छ आणि आरामदायी लॉजिंग, तसेच आपुलकीची सेवा यामुळे आम्ही अनेक कुटुंबांचा विश्वास संपादन केला आहे. आमचे स्पेशल बटर चिकन, तांबडा रस्सा, पांढरा रस्सा, तंदूर स्पेशालिटी आणि सीफूड पदार्थ ग्राहकांच्या विशेष पसंतीस उतरले आहेत.
                </p>
              </div>
              <Link to="/about" className="btn-secondary">आमच्याबद्दल अधिक जाणून घ्या &rarr;</Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <img src={hotelMainBg} alt="Restaurant Ambiance" className="rounded-2xl shadow-card w-full h-[400px] object-cover" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-popup hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-brand-gold">
                    <FaStar size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">४.८/५</div>
                    <div className="text-gray-500 font-medium">गूगल रिव्ह्यूज</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-24 bg-white">
        <div className="container-ds">
          <div className="section-header">
            <span className="section-subtitle">आमच्या सेवा</span>
            <h2 className="section-title">आम्ही काय देतो?</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Restaurant */}
            <motion.div variants={fadeIn} className="card-premium group">
              <div className="h-64 overflow-hidden relative">
                <img src={galleryImages[0] || hotelMainBg} alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-red font-bold flex items-center gap-2 shadow-sm">
                  <FaUtensils /> रेस्टॉरंट
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">फॅमिली व गार्डन रेस्टॉरंट</h3>
                <p className="text-gray-600 mb-6">चविष्ट शाकाहारी आणि मांसाहारी कोल्हापुरी जेवण. कुटुंबासाठी स्वतंत्र आणि सुरक्षित बैठक व्यवस्था.</p>
                <Link to="/restaurant" className="text-brand-red font-semibold hover:text-red-800 flex items-center gap-2">अधिक पहा &rarr;</Link>
              </div>
            </motion.div>

            {/* Lodging */}
            <motion.div variants={fadeIn} className="card-premium group">
              <div className="h-64 overflow-hidden relative">
                <img src={galleryImages[1] || hotelMainBg} alt="Lodging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-red font-bold flex items-center gap-2 shadow-sm">
                  <FaBed /> लॉजिंग
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">स्वच्छ आणि आरामदायी खोल्या</h3>
                <p className="text-gray-600 mb-6">प्रवाशांसाठी सुरक्षित आणि आरामदायी वास्तव्य. गरम पाणी, पार्किंग आणि 24 तास सेवा उपलब्ध.</p>
                <Link to="/lodging" className="text-brand-red font-semibold hover:text-red-800 flex items-center gap-2">अधिक पहा &rarr;</Link>
              </div>
            </motion.div>

            {/* Function Hall */}
            <motion.div variants={fadeIn} className="card-premium group">
              <div className="h-64 overflow-hidden relative">
                <img src={galleryImages[2] || hotelMainBg} alt="Function Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-red font-bold flex items-center gap-2 shadow-sm">
                  <FaUserFriends /> फंक्शन हॉल
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">छोट्या कार्यक्रमांसाठी हॉल</h3>
                <p className="text-gray-600 mb-6">वाढदिवस, नामकरण आणि कौटुंबिक कार्यक्रमांसाठी उत्तम. स्वादिष्ट जेवणासह संपूर्ण व्यवस्था.</p>
                <Link to="/hall" className="text-brand-red font-semibold hover:text-red-800 flex items-center gap-2">अधिक पहा &rarr;</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Today's Special (Horizontal Scroll) */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="container-ds">
          <div className="section-header !text-white">
            <span className="section-subtitle !text-brand-gold">आजची खासियत</span>
            <h2 className="text-3xl tb:text-4xl font-bold mb-4 text-white">आमचे लोकप्रिय पदार्थ</h2>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-6 md:grid md:grid-cols-4 md:overflow-visible md:p-0 md:mx-0">
            {[
              { name: "चिकन तंदुरी", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
              { name: "शाकाहारी स्पेशल थाळी", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80" }
            ].map((item, i) => (
              <div key={i} className="min-w-[280px] w-[80vw] md:w-auto snap-center bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">ताज्या मसाल्यांचा वापर करून बनवलेले अस्सल कोल्हापुरी जेवण.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
             <Link to="/menu" className="btn-secondary">संपूर्ण मेनू पहा</Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-16 bg-brand-light">
        <div className="container-ds px-2 md:px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-subtitle text-sm">आमची वैशिष्ट्ये</span>
            <h2 className="section-title text-3xl">आम्हाला का निवडावे?</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { icon: FaCar, title: "विशाल पार्किंग", desc: "मोफत आणि सुरक्षित पार्किंग व्यवस्था." },
              { icon: FaChild, title: "फॅमिली फ्रेंडली", desc: "कुटुंबासाठी अत्यंत सुरक्षित वातावरण." },
              { icon: FaUtensils, title: "ताजे अन्न", desc: "रोज ताजे दर्जेदार शाकाहारी-मांसाहारी जेवण." },
              { icon: FaShieldAlt, title: "सुरक्षित वातावरण", desc: "सीसीटीव्ही आणि सुरक्षिततेची पूर्ण हमी." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                className="group bg-white p-6 rounded-2xl shadow-subtle text-center flex flex-col items-center h-full hover:-translate-y-1.5 hover:shadow-hover transition-all duration-300 ease-in-out border border-transparent hover:border-brand-gold/30"
              >
                <div className="w-20 h-20 mx-auto bg-red-50 text-brand-red rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon size={36} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-3 whitespace-nowrap overflow-hidden text-ellipsis w-full">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container-ds">
          <div className="section-header">
            <span className="section-subtitle">आमची झलक</span>
            <h2 className="section-title">गॅलरी</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {galleryImages.slice(0, 4).map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Gallery photo ${i + 1}`} 
                className="rounded-xl h-48 md:h-64 w-full object-cover shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:scale-[1.02] duration-300" 
                loading="lazy" 
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="btn-outline">सर्व फोटो पहा</Link>
          </div>
        </div>
      </section>

      {/* 8. Google Reviews (Animated Marquee) */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="container-ds">
          <div className="section-header">
            <span className="section-subtitle">ग्राहकांचे मनोगत</span>
            <h2 className="section-title">गूगल रिव्ह्यूज</h2>
          </div>
          
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
            <Marquee pauseOnHover className="[--duration:40s] mb-6 items-center">
              {firstRow.map((review, i) => (
                <ReviewCard key={i} img={review.img} onClick={() => setSelectedReview(review.img)} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:50s] items-center">
              {secondRow.map((review, i) => (
                <ReviewCard key={i} img={review.img} onClick={() => setSelectedReview(review.img)} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-brand-light to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-light to-transparent z-10"></div>
          </div>
          
          <div className="text-center mt-12 relative z-10">
            <a 
              href="https://share.google/W5ooU7S6AwEb45kdv" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-red hover:bg-red-700 text-white font-bold text-lg md:text-xl py-4 px-8 md:px-12 rounded-full shadow-[0_10px_30px_rgba(200,30,30,0.3)] hover:shadow-[0_15px_40px_rgba(200,30,30,0.4)] transform hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="flex text-brand-gold text-xl group-hover:scale-110 transition-transform">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span>आम्हाला Google वर रेटिंग द्या</span>
            </a>
          </div>

          {/* Lightbox Modal */}
          {selectedReview && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedReview(null)}
            >
              <div className="relative max-w-5xl w-full max-h-[95vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute -top-12 right-0 md:-right-8 text-white text-5xl hover:text-brand-gold transition-colors z-50"
                  onClick={() => setSelectedReview(null)}
                >
                  &times;
                </button>
                <img 
                  src={selectedReview} 
                  alt="Review zoomed" 
                  className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" 
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. Google Map & 10. Contact CTA */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="h-[400px] lg:h-auto w-full bg-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=Hotel%20Shubharambh,%20Mudshingi,%20Kolhapur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Shubharambh Location Map"
            ></iframe>
          </div>
          
          {/* Contact Details & Banner */}
          <div className="bg-brand-red text-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">आम्हाला भेट द्या!</h2>
            <p className="text-red-100 text-lg mb-10">तुमच्या सर्व प्रश्नांसाठी आणि बुकिंगसाठी आम्हाला संपर्क करा.</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 text-lg">
                <FaMapMarkerAlt className="mt-1 text-brand-gold text-2xl flex-shrink-0" />
                <span>कोल्हापूर-हुपरी रोड, मुडशिंगी,<br/>कोल्हापूर, महाराष्ट्र ४१६११९</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <FaPhoneAlt className="text-brand-gold text-2xl flex-shrink-0" />
                <a href="tel:+919860842093" className="hover:text-brand-gold font-bold transition-colors">+91 98608 42093</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919860842093" className="btn-secondary text-brand-dark w-full sm:w-auto justify-center text-center">कॉल करा</a>
              <a href="https://wa.me/919860842093" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white btn-base w-full sm:w-auto justify-center text-center transition-colors shadow-md flex items-center gap-2">
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Fix FaUserFriends missing import by creating a quick custom import
import { FaUserFriends } from 'react-icons/fa';

export default Home;
