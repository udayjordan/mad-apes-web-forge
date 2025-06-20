
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            MAD APES
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300 animate-fade-in delay-200">
            Digital Agency That Delivers
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed animate-fade-in delay-300">
            We create stunning websites, powerful applications, and result-driven marketing campaigns 
            that transform your business and amplify your brand presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://calendly.com/madapes-co/30min" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#packages">
                View Packages
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowUp className="w-6 h-6 text-pink-400 rotate-180" />
      </div>
    </section>
  );
};

export default Hero;
