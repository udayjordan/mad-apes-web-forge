import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "SEO Services",
      image: "https://res.cloudinary.com/dl9qyibyu/image/upload/v1751862910/MAD%20APES%20IMAGES/SEO_img_xeteat.jpg",
      gradient: "from-blue-500 via-green-500 to-teal-500",
      points: [
        "On-page & Off-page SEO",
        "Technical Site Optimization",
        "Keyword Research",
        "Backlink Strategy",
        "Monthly Ranking Reports"
      ]
    },
    {
      title: "Meta Ads Marketing",
      image: "https://res.cloudinary.com/dl9qyibyu/image/upload/v1751863302/MAD%20APES%20IMAGES/Facebook_Instagram_Ads_Management__Get_More_Leads_Sales_dudyua.jpg",
      gradient: "from-pink-500 to-purple-600",
      points: [
        "Targeted Meta Ads",
        "A/B Testing for Ad Creatives",
        "Audience Segmentation",
        "Conversion Tracking",
        "Retargeting Campaigns"
      ]
    },
    {
      title: "Google Ads Marketing",
      image: "https://res.cloudinary.com/dl9qyibyu/image/upload/v1751863517/MAD%20APES%20IMAGES/Google_Ads_bifase.jpg",
      gradient: "from-yellow-500 to-orange-500",
      points: [
        "High-Intent Keyword Targeting",
        "Search & Display Campaigns",
        "Conversion-Focused Ad Copy",
        "Landing Page Optimization",
        "Real-Time Reporting"
      ]
    },
    {
      title: "Marketing Automation",
      image: "https://res.cloudinary.com/dl9qyibyu/image/upload/v1751887140/MAD%20APES%20IMAGES/n8n_img2_pnl73q.jpg",
      gradient: "from-cyan-500 to-blue-600",
      points: [
        "n8n Automation Workflows",
        "Lead Capture Forms",
        "24/7 Lead Nurturing",
        "AI BPO for Call Handling",
        "CRM Integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent ">
          Our Strategic Marketing Funnel
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-colors duration-300">
              <CardHeader>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-contain w-full h-full"
                    style={{ transform: 'scale(1.9)' }}
                  />
                </div>
                <CardTitle className={`text-xl font-bold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105`}
                  asChild
                >
                  <a href="https://calendly.com/madapes-co/30min" target="_blank" rel="noopener noreferrer">
                    Book Strategy Call
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
