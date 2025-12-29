import React from 'react';
import { Clock, Activity, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      
      {/* Hero / Header for About Page */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center animate-fade-in">
        <h1 className="text-5xl font-semibold mb-6 text-gray-900 dark:text-white">Our Mission</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are dedicated to revolutionizing emergency communication through decentralized technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Faster, Smarter, <br className="hidden md:block"/>Connected.
            </h2>
            <div className="w-24 h-1 bg-red-600 rounded-full"></div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              ResQLink is built with one purpose: to make emergency response faster, smarter, and more connected. We are developing a next-generation safety platform that bridges the gap between individuals, rescue teams, and authorities during critical situations.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our system enables instant alerts, live location updates, and real-time coordination so that help reaches people when every second matters.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://picsum.photos/800/600?rescue" 
              alt="Rescue Team" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white max-w-xs">
              <p className="font-medium text-sm uppercase tracking-wider mb-1 text-red-400">Our Commitment</p>
              <p className="font-light">Empowering communities and protecting lives when it counts the most.</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 transition-colors">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Real-time Coordination</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether it’s an accident, a disaster, or an urgent medical situation, ResQLink ensures accurate information flow and quicker decision-making.
            </p>
          </div>
          
          <div className="space-y-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 transition-colors">
            <div className="inline-block p-3 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Reliable Ecosystem</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We combine technology, design, and safety innovation to build a reliable ecosystem that improves response efficiency.
            </p>
          </div>
          
          <div className="space-y-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 transition-colors">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Empowering Communities</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are committed to creating tools that enhance public safety and enable faster action when it counts the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;