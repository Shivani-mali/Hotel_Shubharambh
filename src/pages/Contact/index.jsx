import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaCar, FaEnvelope } from 'react-icons/fa';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const faqs = [
  { q: "तुम्ही होम डिलिव्हरी देता का? (Do you offer home delivery?)", a: "सध्या आम्ही फक्त Dine-in आणि Takeaway (पार्सल) सेवा देतो. स्विगी/झोमॅटो लवकरच सुरू होईल." },
  { q: "पार्किंग उपलब्ध आहे का? (Is parking available?)", a: "होय, हॉटेलच्या आवारात प्रशस्त आणि मोफत पार्किंग उपलब्ध आहे." },
  { q: "लॉजिंग चे चेक-इन वेळ काय आहे? (What is the check-in time?)", a: "चेक-इन दुपारी 12:00 वाजता आणि चेक-आउट दुसऱ्या दिवशी सकाळी 11:00 वाजता आहे." },
  { q: "फंक्शन हॉल ची क्षमता किती आहे? (What is the hall capacity?)", a: "आमचा लहान फंक्शन हॉल 50 ते 100 लोकांच्या छोट्या कार्यक्रमांसाठी (वाढदिवस, नामकरण) उत्तम आहे." }
];

const Contact = () => {
  return (
    <div className="bg-brand-light">
      <SEO 
        title="संपर्क (Contact Us)"
        description="हॉटेल शुभारंभ, मुडशिंगी. पत्ता, फोन नंबर, गुगल मॅप आणि संपर्क माहिती."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex flex-col justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img src={hotelMainBg} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container-ds relative z-10 text-center px-4 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-display font-normal text-white mb-4"
          >
            आमच्याशी <span className="text-brand-red">संपर्क</span> करा
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto"
          >
            तुमच्या प्रश्नांची उत्तरे देण्यासाठी आम्ही नेहमी तत्पर आहोत.
          </motion.p>
        </div>
      </section>

      <div className="container-ds">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Info Cards */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-display font-normal text-brand-dark mb-8">संपर्क माहिती</h2>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 items-start">
              <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">पत्ता (Address)</h3>
                <p className="text-gray-600 leading-relaxed">
                  हॉटेल शुभारंभ, फॅमिली रेस्टॉरंट आणि लॉजिंग,<br />
                  मुडशिंगी रोड, कोल्हापूर, महाराष्ट्र 416005
                </p>
                <a href="https://maps.app.goo.gl/eMeHdpesVxN9zmtf8" target="_blank" rel="noreferrer" className="inline-block mt-3 text-brand-red font-bold hover:underline text-sm uppercase tracking-wide">
                  मॅपवर पहा →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 items-start">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">फोन आणि <span className="font-english">WhatsApp</span></h3>
                <p className="text-gray-600 mb-2">ऑर्डर आणि बुकिंग साठी संपर्क करा.</p>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-brand-red shrink-0" size={16} />
                    <a href="tel:+919168788989" className="font-bold text-[15px] sm:text-lg text-brand-dark hover:text-brand-red font-english whitespace-nowrap">+91 91687 88989</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-brand-red shrink-0" size={16} />
                    <a href="tel:+919860842093" className="font-bold text-[15px] sm:text-lg text-brand-dark hover:text-brand-red font-english whitespace-nowrap">+91 98608 42093</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <FaClock size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">वेळ (Hours)</h3>
                  <p className="text-gray-600 text-sm">सकाळी 11:00 ते<br />रात्री 11:00 पर्यंत</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                  <FaCar size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">पार्किंग</h3>
                  <p className="text-gray-600 text-sm">मोफत आणि<br />प्रशस्त पार्किंग</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.059296535574!2d74.27599055!3d16.6917578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101af719c2a8f%3A0xc39f8d7eb80ed1a4!2sHotel%20Shubharambh%20Family%20%26%20Garden%20Restaurant!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>

        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mt-24 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-normal text-brand-dark mb-4">नेहमी विचारले जाणारे प्रश्न (FAQ)</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-gold/40 transition-colors">
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex gap-3">
                  <span className="text-brand-red">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-600 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-brand-dark py-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-display font-normal text-white mb-8">आम्ही तुमच्या स्वागतासाठी तयार आहोत!</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919168788989" className="btn-primary flex items-center justify-center text-lg px-8 py-3 rounded-full">
            <FaPhoneAlt className="mr-2" /> कॉल करा
          </a>
          <a href="https://wa.me/919168788989" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center text-lg px-8 py-3 rounded-full transition-colors">
            <FaWhatsapp className="mr-2" size={20} /> <span className="font-english">WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;
