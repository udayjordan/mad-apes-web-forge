
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹40,000",
      description: "Perfect for small businesses getting started",
      features: [
        "Complete Website OR Mobile App (Android/iOS)",
        "E-commerce or Shopify Integration",
        "Free Hosting for 1 Year",
        "Basic SEO Optimization",
        "Responsive Design",
        "SSL Certificate",
        "Basic Analytics Setup",
        "2 Rounds of Revisions"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Growth",
      price: "₹50,000",
      description: "Ideal for businesses ready to scale",
      features: [
        "Everything in Starter Package",
        "200 Instagram Posts + 10 Reels",
        "Meta Marketing Campaign Setup",
        "Advanced SEO Optimization",
        "Social Media Strategy",
        "Content Calendar",
        "Performance Analytics",
        "Monthly Reports",
        "3 Rounds of Revisions"
      ],
      popular: true,
      gradient: "from-pink-500 to-red-500"
    },
    {
      name: "Elite",
      price: "₹70,000",
      description: "Complete digital transformation solution",
      features: [
        "Everything in Growth Package",
        "Meta Ads Campaign Management",
        "Brand Funnel Strategy",
        "Free Lead Generation Setup",
        "Advanced Analytics & Reporting",
        "Competitor Analysis",
        "A/B Testing",
        "Priority Support",
        "Unlimited Revisions",
        "3 Months Free Maintenance"
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="packages" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Choose Your Package
          </h2>
          <p className="text-gray-400 text-lg">
            Transparent pricing with everything you need to succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.popular ? 'border-pink-500 shadow-pink-500/20' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-black font-semibold px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-200 mb-2">
                  {pkg.name}
                </CardTitle>
                <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent mb-2`}>
                  {pkg.price}
                </div>
                <p className="text-gray-400">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-black font-semibold' 
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } transition-all duration-300 hover:scale-105`}
                  asChild
                >
                  <a href="https://calendly.com/madapes-co/30min" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We're here to help!
          </p>
          <Button 
            variant="outline" 
            className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black"
            asChild
          >
            <a href="https://wa.me/919476383024" target="_blank" rel="noopener noreferrer">
              Contact for Custom Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
