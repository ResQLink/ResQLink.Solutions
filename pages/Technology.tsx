import React from 'react';
import { Wifi, Radio, Zap, Share2 } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900 dark:text-white">The Power of LoRa Mesh</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Decentralized communication infrastructure for when the grid goes down.
          </p>
        </div>

        {/* Main Diagram Logic (Simulated with Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <img 
              src="https://picsum.photos/800/600?tech" 
              alt="Mesh Network Diagram" 
              className="relative z-10 rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white shadow-sm dark:bg-white/10 dark:shadow-none rounded-lg transition-colors">
                <Share2 className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">Mesh Networking</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Unlike traditional cellular networks that rely on towers, ResQLink devices connect directly to one another. Each device acts as a relay, extending the range of the network exponentially.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white shadow-sm dark:bg-white/10 dark:shadow-none rounded-lg transition-colors">
                <Zap className="text-yellow-500 dark:text-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">Shortest Path Routing</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our proprietary algorithm dynamically calculates the fastest route for your SOS signal to reach the nearest receiver or gateway, ensuring milliseconds of latency.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white shadow-sm dark:bg-white/10 dark:shadow-none rounded-lg transition-colors">
                <Radio className="text-red-500 dark:text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">Long Range (LoRa)</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Utilizing sub-gigahertz radio frequency bands, ResQLink can transmit signals over 10+ kilometers in line-of-sight conditions while consuming minimal power.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOS Mechanism */}
        <div className="bg-gray-100 dark:bg-neutral-900 rounded-3xl p-12 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 dark:bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Double-Tap Activation</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center animate-pulse bg-white dark:bg-transparent">
                <span className="font-bold text-red-500">SOS</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              In an emergency, fine motor skills degrade. We designed ResQLink with a tactile, physical double-tap mechanism that is impossible to miss but hard to trigger accidentally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;