
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Check, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import ClientCarousel from '@/components/ClientCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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
          <div className="flex items-center space-x-6">
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
            <a href="https://wa.me/919476383024" className="hover:text-pink-400 transition-colors">Contact</a>
            <Button 
              asChild 
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-black font-semibold"
            >
              <a href="https://calendly.com/madapes-co/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Packages Section */}
      <Packages />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to transform your digital presence? Let's talk!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">WhatsApp Chat</h3>
                <p className="text-gray-400 mb-4">Quick response guaranteed</p>
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 text-gray-900 font-semibold"
                >
                  <a href="https://wa.me/919476383024" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-400 mb-4">Detailed project discussions</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black"
                >
                  <a href="mailto:madapes.co@gmail.com">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <p className="text-gray-400 mb-4">Professional networking</p>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold"
                >
                  <a href="https://www.linkedin.com/in/uday-shikhar-das-b49b851a9/" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </Button>
      )}
    </div>
  );
};

export default Index;
