import { FaStar } from 'react-icons/fa';

const FeedbackSection = () => {
  const formUrl = "https://forms.gle/1ecfVmxpdEaBH4qE9";

  return (
    <section className="bg-[#111] border-t border-gray-800 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">फीडबॅक</h2>
        <p className="text-gray-400 text-lg mb-8">आपला अनुभव आमच्यासोबत शेअर करा.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <a 
            href={formUrl}
            target="_blank" 
            rel="noreferrer"
            className="bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl transition-all flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 w-64 max-w-full"
          >
            <FaStar className="text-black text-xl mb-0.5" />
            <span>फीडबॅक द्या</span>
          </a>
          
          <a 
            href="https://g.page/r/CSCQi72zK9wbEAE/review"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-2xl transition-all flex flex-col items-center justify-center gap-1 w-64 max-w-full"
          >
            <span className="text-[#D4AF37] flex gap-1 mb-0.5 text-lg">
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span> 
            <span>गुगल रिव्ह्यू</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
