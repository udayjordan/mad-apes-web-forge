
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Check, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ConsultationBanner from '@/components/ConsultationBanner';
// import BrandShootCarousel from '@/components/BrandShootCarousel';
import DigitalMarketingBanner from '@/components/DigitalMarketingBanner';
import ClientCarousel from '@/components/ClientCarousel';
import Footer from '@/components/Footer';
import Packages from '@/components/Packages';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />
      
      {/* Consultation Banner */}
      <ConsultationBanner />
      
      {/* Brand Shoot Section */}
      {/* <BrandShootCarousel /> */}
      <DigitalMarketingBanner />
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
                  <Phone className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">WhatsApp Chat</h3>
                <p className="text-gray-400 mb-4">Quick response guaranteed</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-pink-500 text-pink-400 hover:bg-green-500 hover:text-gray-900 hover:border-green-500 bg-transparent"
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
                  <Mail className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-400 mb-4">Detailed project discussions</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-gray-900 bg-transparent"
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
                  <Linkedin className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <p className="text-gray-400 mb-4">Professional networking</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-pink-500 text-pink-400 hover:bg-blue-500 hover:text-gray-900 hover:border-blue-500 bg-transparent"
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
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:right-6 md:right-8 bg-pink-500 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
