
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/3f216b3a-574a-4027-94ec-a29bc88ff1f1.png" 
                alt="Mad Apes Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                MAD APES
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A digital agency that transforms businesses through innovative web solutions, 
              mobile applications, and result-driven marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/uday-shikhar-das-b49b851a9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919476383024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:madapes.co@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">SEO Marketing</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Meta Ads</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Branding</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:madapes.co@gmail.com" className="hover:text-pink-400 transition-colors">
                  madapes.co@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919476383024" className="hover:text-pink-400 transition-colors">
                  +91 9476383024
                </a>
              </li>
              <li>
                <a href="https://calendly.com/madapes-co/30min" className="hover:text-pink-400 transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mad Apes Agency. All rights reserved. Built with passion for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
