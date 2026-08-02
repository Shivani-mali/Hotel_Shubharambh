import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaStar, FaUsers, FaClock, FaCar, FaLeaf, FaBed, FaUtensils, FaShieldAlt, FaChild, FaBuilding } from 'react-icons/fa';
import SEO from '../../components/SEO';
import hotelMainBg from '../../assets/hotel_main_page.png';
import aboutPageImg from '../../assets/about_page.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const About = () => {
  const stats = [
    { icon: FaStar, value: "4.5/5", label: "गुगल रेटिंग", color: "text-yellow-500" },
    { icon: FaUsers, value: "4 लाख+", label: "आनंदी ग्राहक", color: "text-blue-500" },
    { icon: FaClock, value: "8+", label: "वर्षांचा अनुभव", color: "text-brand-gold" },
    { icon: FaChild, value: "100%", label: "कौटुंबिक वातावरण", color: "text-green-500" },
  ];

  const facilities = [
    { icon: FaUtensils, label: "Restaurant" },
    { icon: FaBed, label: "Lodging" },
    { icon: FaBuilding, label: "Function Hall" },
    { icon: FaCar, label: "Parking" },
    { icon: FaLeaf, label: "Garden" },
    { icon: FaShieldAlt, label: "CCTV" },
    { icon: FaChild, label: "Family Friendly" },
    { icon: FaBed, label: "Clean Rooms" }, // Used FaBed again for Clean Rooms, maybe a sparkle icon is better, but FaBed is fine
  ];

  return (
    <div className="overflow-hidden bg-brand-light">
      <SEO 
        title="आमच्याबद्दल"
        description="विश्वास, गुणवत्ता आणि आपुलकीचा अनुभव. हॉटेल शुभारंभ मधील आमची कथा, मिशन आणि सुविधा."
      />

      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex flex-col justify-center pb-10 md:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutPageImg} 
            alt="Hotel Shubharambh About" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-ds relative z-10 text-center px-4 pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4">
              आमच्या<span className="text-brand-red">बद्दल</span>
            </h1>
            <p className="text-brand-gold text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto italic">
              "विश्वास, गुणवत्ता आणि आपुलकीचा अनुभव."
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a href="tel:+919168788989" className="btn-primary flex items-center justify-center text-sm md:text-base px-6 py-3 rounded-full">
                <FaPhoneAlt className="mr-2" /> कॉल करा
              </a>
              <a href="https://wa.me/919168788989" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaWhatsapp className="mr-2" size={18} /> <span className="font-english">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-ds">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <span className="section-subtitle">आमची कथा</span>
              <h2 className="section-title text-left mb-6">हॉटेल शुभारंभमध्ये आपले मनःपूर्वक स्वागत आहे!</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                <p>
                  मुडशिंगी, कोल्हापूर येथे स्थित <strong className="text-brand-dark">हॉटेल शुभारंभ</strong> हे केवळ एक रेस्टॉरंट आणि लॉजिंग नसून, प्रेम, मेहनत आणि उत्कृष्ट सेवेतून उभा राहिलेला एक विश्वासाचा प्रवास आहे.
                </p>
                <p>
                  या प्रवासाची सुरुवात <strong className="text-brand-dark">Founder – Mr. Datta D. Mali</strong> आणि <strong className="text-brand-dark">Co-Founder – Mrs. Snehal D. Mali</strong> यांनी एका साध्या स्वप्नातून केली. पती-पत्नी या दोघांनीही अथक परिश्रम, प्रामाणिक सेवा आणि ग्राहकांप्रती असलेल्या समर्पणाच्या बळावर हॉटेल शुभारंभ शून्यातून उभारून आज कोल्हापूर परिसरातील विश्वासार्ह आणि लोकप्रिय फॅमिली रेस्टॉरंट व लॉजिंगपैकी एक बनवले आहे.
                </p>
                <p>
                  गेल्या <strong className="text-brand-dark font-english">8</strong> वर्षांमध्ये, आम्ही <strong className="text-brand-dark font-english">4</strong> लाखांहून अधिक ग्राहकांचे प्रेम आणि विश्वास संपादन केला आहे. आमच्याकडे अस्सल कोल्हापुरी चव, स्वादिष्ट शाकाहारी व मांसाहारी पदार्थ, तंदूर, सी-फूड, आरामदायी लॉजिंग आणि मनापासूनची सेवा यांचा अनोखा संगम अनुभवायला मिळतो.
                </p>
                <p>
                  आमचे ध्येय केवळ स्वादिष्ट जेवण देणे नाही, तर प्रत्येक पाहुण्याला घरच्यासारखे प्रेम, आत्मीयता आणि आदरातिथ्य देणे आहे. म्हणूनच अनेक कुटुंबे, प्रवासी आणि नियमित ग्राहक आजही आमच्यावर विश्वास ठेवतात.
                </p>
                <p>
                  याशिवाय, वाढदिवस, नामकरण, साखरपुडा, वर्धापनदिन आणि इतर छोट्या कौटुंबिक कार्यक्रमांसाठी आमच्याकडे <strong className="text-brand-dark">मल्टिपर्पज फंक्शन हॉल</strong> देखील उपलब्ध आहे.
                </p>
                <p className="font-medium text-brand-dark">
                  हॉटेल शुभारंभमध्ये आम्ही फक्त जेवण किंवा मुक्काम देत नाही, तर प्रत्येक पाहुण्यासाठी आनंददायी, सुरक्षित आणि अविस्मरणीय अनुभव घडवण्याचा प्रयत्न करतो.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src={aboutPageImg} 
                  alt="Hotel Shubharambh Story" 
                  className="w-full h-auto object-cover md:h-[500px]"
                />
                <div className="absolute inset-0 border-4 border-white/20 rounded-[32px] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-brand-light">
        <div className="container-ds">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaUsers size={28} />
              </div>
              <h3 className="card-title mb-4">आमचे ध्येय (Mission)</h3>
              <p className="text-xl text-gray-700 italic font-medium">
                "प्रत्येक पाहुण्याला घरासारखा अनुभव देणे आणि उत्कृष्ट सेवा प्रदान करणे."
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaStar size={28} />
              </div>
              <h3 className="card-title mb-4">आमचा दृष्टिकोन (Vision)</h3>
              <p className="text-xl text-gray-700 italic font-medium">
                "मुडशिंगीतील सर्वात विश्वासार्ह फॅमिली रेस्टॉरंट आणि लॉजिंग बनणे."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Customers Trust Us */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-ds">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">विश्वास</span>
            <h2 className="text-3xl md:text-4xl font-display font-normal text-white">ग्राहकांचा आमच्यावर विश्वास का आहे?</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className={`text-3xl ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 font-english">{stat.value}</div>
                <div className="text-gray-400 font-medium font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Facilities */}
      <section className="py-24 bg-white">
        <div className="container-ds">
          <div className="section-header">
            <span className="section-subtitle">आमच्या सुविधा</span>
            <h2 className="section-title">उत्कृष्ट अनुभव</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((fac, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-light p-6 rounded-2xl text-center border border-gray-100 hover:border-brand-gold/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-red">
                  <fac.icon size={24} />
                </div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base font-english">{fac.label}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 relative overflow-hidden bg-brand-red">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="container-ds relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">आजच भेट द्या!</h2>
          <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            हॉटेल शुभारंभ मध्ये येऊन आमची स्वादिष्ट चव आणि आदरातिथ्य नक्की अनुभवा. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <a href="tel:+919168788989" className="bg-white text-brand-red hover:bg-gray-50 font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center">
              <FaPhoneAlt className="mr-2" /> कॉल करा
            </a>
            <a href="https://wa.me/919168788989" target="_blank" rel="noreferrer" className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center">
              <FaWhatsapp className="mr-2" size={20} /> <span className="font-english">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

