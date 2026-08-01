import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import SEO from '../seo/SEO';
import FloatingMobileBar from '../components/FloatingMobileBar';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light pb-[72px] tb:pb-0">
      <SEO 
        title="हॉटेल शुभारंभ | Hotel Shubharambh" 
        description="मुडशिंगी, कोल्हापूर मधील सर्वोत्तम फॅमिली रेस्टॉरंट आणि लॉजिंग. (Best Family Restaurant & Lodging in Mudshingi, Kolhapur)" 
      />
      <Navbar />
      <Popup />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingMobileBar />
    </div>
  );
};

export default MainLayout;
