import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
              Riszzzu
            </h3>
            <p className="text-gray-400 max-w-xs">
              Creating unique anime-style illustrations and character designs for clients worldwide.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#commission" className="text-gray-400 hover:text-purple-400 transition-colors">Commission Info</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rizalafendy__/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.696 6.162c-1.832-1.758-4.346-2.745-6.986-2.745-0.5 0-0.999 0.040-1.496 0.12-0.373-0.247-0.861-0.412-1.414-0.412s-1.041 0.165-1.414 0.412c-0.497-0.08-0.996-0.12-1.496-0.12-2.64 0-5.153 0.987-6.986 2.745-2.082 1.986-3.272 4.676-3.272 7.598 0 2.877 1.145 5.511 3.138 7.453 0.284 0.273 0.662 0.422 1.062 0.422 0.391 0 0.758-0.141 1.035-0.387-0.228-0.341-0.392-0.729-0.496-1.136-0.482-0.539-0.827-1.171-1.027-1.839-0.084-0.295-0.137-0.644-0.137-1.015 0-0.466 0.077-0.915 0.218-1.333 0.247 0.406 0.572 0.765 0.967 1.057 0.309 0.231 0.646 0.414 1.003 0.539 0.262 0.092 0.545 0.139 0.838 0.139 0.342 0 0.675-0.066 0.985-0.186 0.315-0.123 0.601-0.303 0.845-0.529 0.243-0.225 0.439-0.492 0.583-0.789 0.145-0.298 0.223-0.62 0.223-0.94 0-0.429-0.124-0.841-0.345-1.195 0.13-0.181 0.279-0.348 0.436-0.503 0.364-0.352 0.79-0.634 1.255-0.826 0.253-0.105 0.521-0.184 0.799-0.235 0.215-0.039 0.436-0.060 0.662-0.060 0.226 0 0.447 0.021 0.662 0.060 0.278 0.051 0.547 0.13 0.8 0.235 0.464 0.192 0.891 0.474 1.255 0.826 0.157 0.155 0.306 0.322 0.436 0.503-0.221 0.354-0.345 0.766-0.345 1.195 0 0.32 0.078 0.642 0.223 0.94 0.145 0.297 0.34 0.565 0.584 0.79 0.243 0.225 0.53 0.405 0.845 0.528 0.31 0.12 0.643 0.186 0.985 0.186 0.293 0 0.576-0.046 0.838-0.139 0.356-0.125 0.694-0.308 1.003-0.539 0.395-0.292 0.72-0.651 0.967-1.057 0.141 0.418 0.218 0.867 0.218 1.333 0 0.371-0.053 0.72-0.137 1.015-0.2 0.668-0.545 1.3-1.027 1.839-0.103 0.407-0.267 0.795-0.496 1.136 0.277 0.246 0.644 0.387 1.035 0.387 0.4 0 0.778-0.148 1.062-0.422 1.994-1.942 3.139-4.576 3.139-7.453 0-2.922-1.19-5.611-3.272-7.598z" />
                </svg>
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              Subscribe to my newsletter for updates on new artwork and commission availability.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Riszzzu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;