
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ClientCarousel = () => {
  const clients = [
    { name: "DX Objects", industry: "Technology", description: "Complete digital transformation" },
    { name: "ICY Properties", industry: "Real Estate", description: "Modern website & lead generation" },
    { name: "Just Dial", industry: "Directory Services", description: "Mobile app development" },
    { name: "Shree HD Overseas", industry: "Export/Import", description: "Branding & web presence" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clients.map((client, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    {client.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {client.industry}
                  </p>
                  <p className="text-gray-300">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {clients.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
