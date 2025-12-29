import React from 'react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Drakshi .M. Meshram",
      role: "Founder & CEO",
      image: "https://picsum.photos/400/400?person=1",
      bio: "Visionary leader with 15+ years in RF engineering."
    },
    {
      id: 2,
      name: "Shagun .S. Jha",
      role: "Chief Of Operations (COO)",
      image: "https://picsum.photos/400/400?person=2",
      bio: "Former lead designer at major outdoor tech firms."
    },
    {
      id: 3,
      name: "Dhruv .S. Mankar",
      role: "Chief Technology Officer (CTO)",
      image: "https://picsum.photos/400/400?person=3",
      bio: "Expert in mesh networking algorithms and embedded systems."
    },
    {
      id: 4,
      name: "Ansh .D. Padole",
      role: "Head Of Research & Development (R&D)",
      image: "https://picsum.photos/400/400?person=4",
      bio: "Specialist in supply chain for rugged hardware."
    },
    {
      id: 5,
      name: "Ashvat .B. Yadav",
      role: "Chief Design Officer (CDO)",
      image: "https://picsum.photos/400/400?person=5",
      bio: "Hardware architect focused on low-power consumption."
    },
    {
      id: 6,
      name: "Arnav Bodas",
      role: "Head Of Marketing (HOM)",
      image: "https://picsum.photos/400/400?person=6",
      bio: "Building the global community of safe explorers."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 relative inline-block text-gray-900 dark:text-white">
            Our Team
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-full"></span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            The minds behind the mission to save lives.
          </p>
        </div>

        {/* AAP Style Grid: Clean, Simple, Photo-centric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square overflow-hidden mb-4 relative rounded-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2 uppercase tracking-wide">
                {member.role}
              </p>
              {member.bio && (
                 <p className="text-gray-500 dark:text-gray-400 text-center text-sm px-2 line-clamp-2">
                   {member.bio}
                 </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;