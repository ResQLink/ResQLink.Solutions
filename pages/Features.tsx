import React from 'react';
import { Shield, WifiOff, MapPin, BatteryCharging, CloudRain, Smartphone } from 'lucide-react';
import Button from '../components/Button';

const Features: React.FC = () => {
  const features = [
    {
      icon: <WifiOff size={32} />,
      title: 'Offline Connectivity',
      desc: 'Send messages and location data without any cellular or Wi-Fi connection.'
    },
    {
      icon: <CloudRain size={32} />,
      title: 'IP68 Waterproof',
      desc: 'Submersible up to 1.5 meters for 30 minutes. Dust tight and rugged.'
    },
    {
      icon: <BatteryCharging size={32} />,
      title: '30-Day Battery',
      desc: 'Ultra-low power consumption ensures your lifeline stays active when you need it.'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Live Beacon',
      desc: 'Real-time GPS tracking allows rescuers to pinpoint your exact location.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Smart Mesh',
      desc: 'Self-healing network architecture that routes around obstacles automatically.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'App Integration',
      desc: 'Connect via Bluetooth to our mobile app for detailed maps and chat.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-semibold mb-16 text-center text-gray-900 dark:text-white">Engineered for Extremes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 dark:bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors"></div>
              
              <div className="relative z-10 text-gray-900 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 relative z-10 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black p-12 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Ready to explore safely?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Join the waitlist to be notified when ResQLink becomes available in your region.
          </p>
          <Button variant="primary" className="px-12 py-3 text-lg">Coming Soon</Button>
        </div>
      </div>
    </div>
  );
};

export default Features;