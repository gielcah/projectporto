import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';

interface HeaderProps {
  artistName: string;
}

const Header: React.FC<HeaderProps> = ({ artistName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-purple-900 shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 text-transparent bg-clip-text drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
          {artistName}
        </h1>
        
        <div className="hidden md:block">
          <Navigation orientation="horizontal" isScrolled={isScrolled} />
        </div>
        
        <button 
          className="md:hidden p-2 text-white hover:text-purple-200 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <Navigation orientation="vertical" onItemClick={() => setIsMobileMenuOpen(false)} isScrolled={isScrolled} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;