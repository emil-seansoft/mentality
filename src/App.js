import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import pop from './images/logo.jpg';
import logo from './images/logo.png';
import wolf from './images/wolf.jpg';
import bb from './images/bb.jpg';
import SocialLinksAccordion from './accordion.js';
import mentalityIcon from './images/logo.png';
import myVideo from './images/mentality.MOV'

function App() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const buySectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assume mobile if width is less than 768px

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const introText = (
    <h1
      ref={headingRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold russo-one-regular select-none"
    >
      MENTALITY
    </h1>
  );

  const scrollToBuySection = () => {
    buySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const textToCopy = 'EJ6r55VaTxKwaPTBWU6naLsUoSnBJ59Q3jZtE5wrpump';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Contract Address copied to clipboard');
        alert('Contract Address copied to clipboard!'); // Optional: Provide user feedback
      })
      .catch(err => {
        console.error('Error copying text: ', err);
      });
  };

  const Header = (
    <>
      <div className='w-100 fixed-top p-3 bg-black row align-items-center' style={{ border: '1px solid #333333' }}>
        {isMobile ? (
          <img src={mentalityIcon} alt="Mentality Icon" className="icon" style={{ width: '40px', height: 'auto' }} />
        ) : (
          <p className='text-gold select-none col-3'>{`MENTALITY`}</p>
        )}
        
        {isMobile ? (
          <SocialLinksAccordion />
        ) : (
          <div className='col-6 d-flex justify-content-center gap-10 row'>
            <>
              <a href="https://dexscreener.com/solana/9ymen6enbr3zd4rtvmocbnvck5ltkh8yn2zdxj17jwtw" target="_blank" rel="noopener noreferrer" className="link-style">
                <i className="bi bi-bar-chart icon"></i>
                <p className='text-white mb-0'>Chart</p>
              </a>
              <a href="https://t.me/+YD9ox3ckONQ3M2Vl" target="_blank" rel="noopener noreferrer" className="link-style">
                <i className="bi bi-telegram icon"></i>
                <p className='text-white mb-0'>Telegram</p>
              </a>
              <a href="https://x.com/mentalitysolana/" target="_blank" rel="noopener noreferrer" className="link-style">
                <i className="bi bi-twitter icon"></i>
                <p className='text-white mb-0'>Twitter</p>
              </a>
            </>
          </div>
        )}
  
        <div className='col-2'>
          <button
            className='btn btn-gold'
            type='button'
            onClick={scrollToBuySection}
          >
            BUY $MENTALITY
          </button>
        </div>
      </div>
    </>
  );
  

  const footer = (
    <div className='w-100 p-3 row justify-content-around' style={{ backgroundColor: '#333333' }}>
      {isMobile ? (
        <img 
          src={mentalityIcon} 
          alt="Mentality Icon" 
          className="icon" 
          style={{ width: '40px', height: 'auto', maxWidth: '100%', objectFit: 'contain' }} 
        />
      ) : (
        <p className='text-gold col-6 select-none'>{`MENTALITY`}</p>
      )}
  
      <div className='col-6 d-flex justify-content-center gap-10 row'>
        {isMobile ? (
          <SocialLinksAccordion />
        ) : (
          <>
            <a href="https://dexscreener.com/solana/9ymen6enbr3zd4rtvmocbnvck5ltkh8yn2zdxj17jwtw" target="_blank" rel="noopener noreferrer" className="link-style">
              <i className="bi bi-bar-chart icon"></i>
              <p className='text-white mb-0'>Chart</p>
            </a>
            <a href="https://t.me/+YD9ox3ckONQ3M2Vl" target="_blank" rel="noopener noreferrer" className="link-style">
              <i className="bi bi-telegram icon"></i>
              <p className='text-white mb-0'>Telegram</p>
            </a>
            <a href="https://x.com/mentalitysolana/" target="_blank" rel="noopener noreferrer" className="link-style">
              <i className="bi bi-twitter icon"></i>
              <p className='text-white mb-0'>Twitter</p>
            </a>
          </>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    const runAnimation = () => {
      const tl = gsap.timeline();
  
      // Intro Text Fade In
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 100 },
        { 
          duration: 1.5, 
          opacity: 1, 
          y: 0,
          ease: "power4.out", 
          color: 'white' 
        }
      )
      .to(headingRef.current, { 
        duration: 1.5, 
        color: '#FFAA00', 
        ease: "power4.out" 
      })
      .to(headingRef.current, {
        duration: 1,
        color: 'black',
        opacity: 0,
        ease: "power4.out"
      })
      .set(headingRef.current, { display: 'none' })
      .call(() => {
        setShowContent(true); // Show content after intro is done
      });
    };
  
    window.addEventListener('load', runAnimation());
  
    return () => {
      window.removeEventListener('load', runAnimation()); // Clean up event listener
    };
  }, []);

      // Fade-in effect for content
      const fadeInContent = () => {
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0 }, // Start with hidden content
            { opacity: 1, duration: 2, ease: "power4.out" } // Fade in content
          );
        }
      };
  
  // Effect for showing content with fade-in animation
  useEffect(() => {
    if (showContent) {
      fadeInContent();
    }
  }, [showContent]);
  

  return (
    <>
      {introText}
      {showContent && (
        <div ref={contentRef} className='px-3 py-3 mt-10'>
        <div>
          {Header}
          <div className="d-flex justify-content-center align-items-center h-screen">
            <div className="text-center">
              <img className='mentality-img' style={{backgroundColor: 'white'}} src={logo} alt="hero" />
            </div>
          </div>
        </div>

        <div>
        {Header}
          
        <div>
          <div className='row align-items-center h-screen mt-3'> {/* Added h-screen to the row */}
            <div className='col-md-6 col-12 text-center'>
              <p className='text-4xl text-white'>
              Embracing bold mentality with Solana encourages us to take risks and foster independence, unlocking the true potential of decentralized finance. Together, we can reshape industries and drive impactful change.
              </p>
            </div>
            <div className='col-md-6 col-12 d-flex justify-content-center'>
              <img src={pop} alt='lion' className='img-fluid border-mentality' /> {/* Add img-fluid for responsiveness */}
            </div>
          </div>
        </div>

        <div>
          <div className='row align-items-center h-screen mt-3'> {/* Added h-screen to the row */}
            <div className='col-md-6 col-12 d-flex justify-content-center'>
              <img src={wolf} alt='lion' className='img-fluid border-mentality' /> {/* Add img-fluid for responsiveness */}
            </div>
            <div className='col-md-6 col-12 text-center'>
              <p className='text-4xl text-white'>
              With a resilient mentality, Solana encourages us to embrace risks and explore new horizons in decentralized finance. This mindset fosters innovation, enabling us to reshape the future and drive change.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='row align-items-center h-screen mt-3'> {/* Added h-screen to the row */}
            <div className='col-md-6 col-12 text-center'>
              <p className='text-4xl text-white'>
                <h1>TOKENOMICS</h1>
              </p>
              <div className='text-2xl text-white'>
                <p>0% TAX</p>
                <p>0% TEAM ALLOCATION</p>
                <p>1B SUPPLY</p>
                <p>MINT REVOKED</p>
              </div>
            </div>
            <div className='col-md-6 col-12 d-flex justify-content-center'>
              <img src={bb} alt='lion' className='img-fluid border-mentality' /> {/* Add img-fluid for responsiveness */}
            </div>
          </div>

              {/* Embed Video */}
              <div className='d-flex justify-content-center'>
                <video 
                  controls 
                  width="800" 
                  height="360" 
                  className="my-3" // Add any additional styles you want
                >
                  <source src={myVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

          <div ref={buySectionRef} className='row align-items-center h-screen'> {/* Added ref for scrolling */}
                <div className='col-12 text-center'>
                  <p className='text-6xl text-white'>
                    <h1>HOW TO BUY</h1>
                  </p>
                  <div className='text-2xl text-white'>
                    <p>Step 1: Download the Phantom Wallet chrome/firefox extension or the ios/android app.</p>
                    <p>STEP 2: Purchase Solana on a centralized exchange and send it to your phantom wallet.</p>
                    <p>STEP 3: Go to the swap tab of your phantom wallet and paste the contract address provided below, then swap your Solana for $mentality.</p>
                    <p>STEP 4: Embrace the trillionaire mentality and elevate your mindset.</p>
                  </div>

                  <button 
                    className='btn btn-gold mt-3'
                    type='button'
                    onClick={handleCopyToClipboard}
                  >
                    COPY CA
                  </button>
                </div>
              </div>

          <footer>
            {footer}
          </footer>
          </div>
      </div>

          
      </div>
      )}
    </>
  );
}

export default App;
