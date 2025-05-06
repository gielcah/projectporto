import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/6985132/pexels-photo-6985132.jpeg")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-pink-600/70 mix-blend-multiply"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-200">
          {subtitle}
        </p>
        <div className="flex justify-center space-x-4 animate-fadeInUp animation-delay-400">
          <a 
            href="#gallery" 
            className="px-8 py-3 bg-white text-purple-700 font-medium rounded-full hover:bg-purple-100 transition-colors"
          >
            View Gallery
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#gallery" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;