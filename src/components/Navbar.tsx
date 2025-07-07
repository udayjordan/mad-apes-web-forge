import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3f216b3a-574a-4027-94ec-a29bc88ff1f1.png" 
              alt="Mad Apes Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              MAD APES
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-pink-400 transition-colors">Services</a>
            <a href="#packages" className="hover:text-pink-400 transition-colors">Packages</a>
            <a 
              href="https://www.notion.so/MAD-APES-AGENCY-1fccce3618dc8049bc23db09144ca3e4?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="https://wa.me/919476383024" 
              className="hover:text-pink-400 transition-colors"
            >
              Contact
            </a>
            <a 
              href="https://calendly.com/madapes-co/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-gray-900 font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '72px', height: 'calc(100vh - 72px)' }}
        >
          <div className="h-full w-full px-6 py-6 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-lg py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors text-white"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#packages"
              className="text-lg py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors text-white"
              onClick={closeMenu}
            >
              Packages
            </a>
            <a
              href="https://www.notion.so/MAD-APES-AGENCY-1fccce3618dc8049bc23db09144ca3e4?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors text-white"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            <a
              href="https://wa.me/919476383024"
              className="text-lg py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors text-white"
              onClick={closeMenu}
            >
              Contact
            </a>
            <a
              href="https://calendly.com/madapes-co/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-lg py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 text-gray-900 font-semibold rounded-lg text-center hover:from-pink-600 hover:to-red-600 transition-all duration-300"
              onClick={closeMenu}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
