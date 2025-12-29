
import React, { useState, useEffect, useRef } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Button from '../components/Button';
import { Signal, Battery, Shield } from 'lucide-react';

const { NavLink } = ReactRouterDOM;

const Home: React.FC = () => {
  const heroVideoUrl = "https://cdn.pixabay.com/video/2021/08/21/85888-592317585_large.mp4";
  const fallbackImageUrl = "https://i.ibb.co/JjvWNBBb/Gemini-Generated-Image-h6wqdkh6wqdkh6wq-1.png";

  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const distance = window.innerHeight - rect.top;
          setOffset(distance * 0.15);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 dark:opacity-70 transition-opacity duration-1000"
            poster={fallbackImageUrl}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/40 via-transparent to-black/20 dark:from-black dark:via-transparent dark:to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl animate-slide-up flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 drop-shadow-2xl">
            ResQLink
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide max-w-lg">
            Safety without boundaries. <br className="hidden md:block" /> Connected anywhere on Earth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
            <Button variant="primary" className="flex-1 rounded-md py-3 text-[13px] uppercase tracking-[0.2em] font-bold">
              Join Waitlist
            </Button>
            <NavLink to="/technology" className="flex-1">
              <Button variant="secondary" className="w-full rounded-md py-3 text-[13px] uppercase tracking-[0.2em] font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10 opacity-60">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center group">
            <Signal className="w-10 h-10 mb-6 text-gray-800 dark:text-white transition-transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-semibold mb-2">Satellite Mesh</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Global coverage through decentralized LoRa relay nodes.</p>
          </div>
          <div className="flex flex-col items-center group">
            <Shield className="w-10 h-10 mb-6 text-gray-800 dark:text-white transition-transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-semibold mb-2">5-Star Safety</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Built for extreme durability and military-grade encryption.</p>
          </div>
          <div className="flex flex-col items-center group">
            <Battery className="w-10 h-10 mb-6 text-gray-800 dark:text-white transition-transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-semibold mb-2">Range King</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Optimized low-power silicon for 400+ hours of SOS broadcasting.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
