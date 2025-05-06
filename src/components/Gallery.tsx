import React, { useState } from 'react';
import { ArtworkType } from '../types';
import ArtworkCard from './ArtworkCard';

interface GalleryProps {
  artworks: ArtworkType[];
}

const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(artworks.map(art => art.category))];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Artworks</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Explore my latest anime illustrations and character designs. Each piece reflects my unique artistic style and passion for storytelling.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;