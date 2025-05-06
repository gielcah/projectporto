import React, { useState } from 'react';
import { ArtworkType } from '../types';

interface ArtworkCardProps {
  artwork: ArtworkType;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-70' : ''}`}></div>
        <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-10'}`}>
          <h3 className="text-xl font-bold mb-1">{artwork.title}</h3>
          <p className="text-sm opacity-90">{artwork.description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
            {artwork.category}
          </span>
          <span className="text-gray-500 text-sm">{artwork.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;