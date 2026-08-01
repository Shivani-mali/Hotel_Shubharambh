import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light">
      <style>{`
        .hotel-loader-wrapper {
          font-size: 24px;
        }
        
        .hotel-loader {
          padding: 0.5em;
          width: 5.5em;
          height: 9.5em;
          background: #444444;
          position: relative;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
          border-radius: 4px;
        }
        
        .hotel-loader .hotel-sign {
          padding: 0.25em 0;
          position: absolute;
          right: -1.5em;
          width: 1.3em;
          text-align: center;
          background: #444444;
          font-family: sans-serif;
          font-weight: 700;
          border-radius: 4px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          animation: neon 3s infinite ease;
          color: white;
          display: flex;
          flex-direction: column;
          font-size: 0.8em;
        }
        
        .hotel-loader .hotel-sign span {
          line-height: 1.1;
        }
        
        .hotel-loader .window {
          background: transparent;
          width: 0.5em;
          height: 1em;
          float: left;
          margin: 0 0.5em 0.5em 0;
          border-radius: 2px;
        }
        
        .hotel-loader .window:nth-of-type(5n) {
          margin: 0 0 0.5em 0;
        }
        
        .hotel-loader .door {
          background: #facc15;
          position: absolute;
          bottom: 0;
          width: 1em;
          height: 1.5em;
          left: 50%;
          margin-left: -0.5em;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          box-shadow: 0 0 10px #facc15;
        }
        
        @keyframes flicker {
          0% { background: transparent; box-shadow: none; }
          50% { background: #facc15; box-shadow: 0 0 8px #facc15; }
          100% { background: transparent; box-shadow: none; }
        }
        
        @keyframes neon {
          0% { text-shadow: none; color: #6b7280; }
          50% { text-shadow: 0 0 15px #facc15, 0 0 5px #facc15; color: #ffffff; }
          100% { text-shadow: none; color: #6b7280; }
        }
      `}</style>
      
      <div className="hotel-loader-wrapper">
        <div className="hotel-loader">
          {[...Array(25)].map((_, i) => {
            let delay = 0;
            let duration = 0;
            const index = i + 1;
            
            if (index >= 1 && index <= 5) { 
              delay = index / 2; duration = index / 2; 
            } else if (index >= 6 && index <= 10) { 
              delay = index / 4; duration = index / 4; 
            } else if (index >= 11 && index <= 20) { 
              delay = index / 10; duration = index / 10; 
            } else { 
              delay = index / 15; duration = index / 12; 
            }

            return (
              <div 
                key={i} 
                className="window"
                style={{
                  animation: `flicker ${duration}s infinite ease ${delay}s`
                }}
              ></div>
            );
          })}
          
          <div className="door"></div>
          
          <div className="hotel-sign">
            <span>H</span>
            <span>O</span>
            <span>T</span>
            <span>E</span>
            <span>L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
