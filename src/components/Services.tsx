
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites that convert visitors into customers with modern design and seamless functionality.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"]
    },
    {
      title: "Mobile Applications",
      description: "Native iOS and Android apps that deliver exceptional user experiences and drive engagement.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
    },
    {
      title: "SEO Marketing",
      description: "Data-driven SEO strategies that boost your search rankings and increase organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"]
    },
    {
      title: "Meta Ads Marketing",
      description: "Targeted Facebook and Instagram ad campaigns that maximize ROI and reach your ideal customers.",
      features: ["Campaign Strategy", "Creative Design", "Audience Targeting", "Performance Optimization"]
    },
    {
      title: "Influencer Collaboration",
      description: "Strategic partnerships with influencers to amplify your brand reach and credibility.",
      features: ["Influencer Matching", "Campaign Management", "Content Strategy", "ROI Tracking"]
    },
    {
      title: "Branding & Rebranding",
      description: "Complete brand identity solutions that resonate with your audience and stand out in the market.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      title: "Instagram Marketing",
      description: "Comprehensive Instagram strategies including content creation, engagement, and growth tactics.",
      features: ["Content Creation", "Hashtag Strategy", "Community Management", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive digital solutions to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 group"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-300 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
