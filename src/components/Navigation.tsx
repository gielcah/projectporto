import React from 'react';

interface NavigationProps {
  orientation: 'horizontal' | 'vertical';
  onItemClick?: () => void;
  isScrolled?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ orientation, onItemClick, isScrolled }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Commission', href: '#commission' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav>
      <ul
        className={`flex ${
          orientation === 'vertical' ? 'flex-col space-y-4' : 'space-x-6'
        }`}
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full ${
                orientation === 'vertical' 
                  ? 'block py-2 text-gray-800 hover:text-purple-600' 
                  : `py-1 ${isScrolled ? 'text-white after:bg-white' : 'text-white after:bg-purple-200'} hover:text-purple-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]`
              }`}
              onClick={handleClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;