import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-purple-500">
                <img
                  src="photogweh.jpg"
                  alt="Artist Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Artist</h2>
            
            <p className="text-gray-700 mb-4">
              Hello! I'm Riszzzu, an illustrator and character designer with over 7 years of experience in the anime and manga industry. My journey began in Tokyo, where I studied traditional Japanese art techniques before blending them with modern digital approaches.
            </p>
            
            <p className="text-gray-700 mb-6">
              My art style combines vibrant colors with detailed character expressions, focusing on emotional storytelling through visual elements. I've had the pleasure of working with studios across Japan and internationally, contributing to manga publications, video game character designs, and animation projects.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">My Approach</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>Character-driven storytelling with emotional depth</li>
              <li>Blend of traditional anime aesthetics with contemporary elements</li>
              <li>Vibrant color palettes that evoke specific moods</li>
              <li>Attention to detail in character design and world-building</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Experience & Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Character Design', 'Digital Illustration', 'Concept Art', 'Manga', 'Animation', 'Background Art'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
