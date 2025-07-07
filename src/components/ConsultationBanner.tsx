import { Button } from '@/components/ui/button';

const ConsultationBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects - Matching Hero.tsx */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662223/MAD%20APES%20IMAGES/BRAND_IMG6_bs2vdx.jpg"
                  alt="Quick Commerce App"
                className="object-contain w-full h-auto"
                />
              </div>
            </div>

          {/* Right side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Quick Commerce Multi Vendor APP & Website
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
              Launch your own quick commerce platform like <span className="font-semibold text-white">Blinkit</span> or <span className="font-semibold text-white">Zepto</span> with our end-to-end solution designed for rapid deployment and scalability.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✔️</span>
                <span className="text-gray-200 text-lg">Customer App for Android & iOS</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✔️</span>
                <span className="text-gray-200 text-lg">Seller & Delivery Partner Apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✔️</span>
                <span className="text-gray-200 text-lg">Powerful Admin Dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✔️</span>
                <span className="text-gray-200 text-lg">SEO-optimized Website</span>
              </li>
            </ul>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
            >
              <a
                href="https://calendly.com/madapes-co/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 mt-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662224/MAD%20APES%20IMAGES/BRAND_IMG2_lvg6xk.jpg"
                  alt="Quick Commerce App"
                className="object-contain w-full h-auto"
                />
              </div>
            </div>

          {/* Right side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
    Custom Website Design & Development
  </h2>
  <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
    Build stunning, high-converting websites with our in-house design and dev team. We craft digital experiences that are fast, SEO-ready, and built to scale — perfect for businesses that want to stand out.
  </p>
  <ul className="space-y-4 mb-10">
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Custom UI/UX Design with Brand-First Approach</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Lightning-Fast Development using Modern Tech Stack</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Mobile-Responsive & SEO-Optimized by Default</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">E-commerce, Portfolio, Landing Pages & More</span>
    </li>
  </ul>
  <Button
    asChild
    className="bg-black hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
  >
    <a
      href="https://calendly.com/madapes-co/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book Free Consultation
    </a>
  </Button>
</div>

        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 mt-28">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left side - Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-[280px] h-auto">
        <img
          src="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662223/MAD%20APES%20IMAGES/BRAND_IMG7_tkcc26.jpg"
          alt="Zomato/Swiggy Clone App"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* Right side - Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
        Zomato/Swiggy Multi Vendor APP & Website
      </h2>
      <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
        Launch your own food delivery network like <span className="font-semibold text-white">Zomato</span> or <span className="font-semibold text-white">Swiggy</span>. Our end-to-end platform is built for performance, scale, and speed — tailored for restaurants, cloud kitchens, and aggregators.
      </p>
      <ul className="space-y-4 mb-10">
        <li className="flex items-start">
          <span className="text-green-400 mr-3 text-xl">✔️</span>
          <span className="text-gray-200 text-lg">Customer App for Android & iOS</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3 text-xl">✔️</span>
          <span className="text-gray-200 text-lg">Restaurant & Delivery Partner Apps</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3 text-xl">✔️</span>
          <span className="text-gray-200 text-lg">Powerful Master Admin Panel</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3 text-xl">✔️</span>
          <span className="text-gray-200 text-lg">Fully Responsive Marketing Website</span>
        </li>
      </ul>
      <Button
        asChild
        className="bg-black hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
      >
        <a
          href="https://calendly.com/madapes-co/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Free Consultation
        </a>
      </Button>
    </div>
    
  </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 mt-28">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left side - Image */}
    <div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-[280px] h-auto rounded-[1.5rem] overflow-hidden shadow-2xl bg-black border border-gray-700">
    <img
      src="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662224/MAD%20APES%20IMAGES/BRAND_IMG4_iycc3d.jpg"
      alt="Spotify App"
      className="w-full h-auto object-contain"
    />
  </div>
</div>


    {/* Right side - Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
    Custom Apps & Websites for Influencer Brands
  </h2>
  <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
    We craft high-performance apps and websites for influencers, creators, and brands looking to elevate their digital presence. From content platforms to promo engines — we build everything you need to grow, engage, and monetize.
  </p>
  <ul className="space-y-4 mb-10">
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Mobile Apps for iOS & Android with Creator Tools</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Custom Websites for Brand Showcasing & Campaigns</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Built-in Features for Promotion & Audience Growth</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">SEO-Optimized, Fast, and Scalable by Design</span>
    </li>
  </ul>
  <Button
    asChild
    className="bg-black hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
  >
    <a
      href="https://calendly.com/madapes-co/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book Free Consultation
    </a>
  </Button>
</div>

    
  </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 mt-28">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left side - Image */}
    <div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-[280px] h-auto rounded-[1.5rem] overflow-hidden shadow-2xl bg-black border border-gray-700">
    <img
      src="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662224/MAD%20APES%20IMAGES/BRAND_IMG5_mlxqg3.jpg"
      alt="Spotify App"
      className="w-full h-auto object-contain"
    />
  </div>
</div>


    {/* Right side - Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
    Smart CRM & Funnels for Coaches & Consultants
  </h2>
  <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
    Whether you're a coach, course creator, or strategy consultant — we build custom apps and systems to track your daily tasks, manage leads, and grow your business with powerful funnels and content-driven marketing.
  </p>
  <ul className="space-y-4 mb-10">
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Daily Task Tracking & CRM in One Platform</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Lead Management with Auto Follow-Up Flows</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">Custom Sales & Marketing Funnels Built-In</span>
    </li>
    <li className="flex items-start">
      <span className="text-green-400 mr-3 text-xl">✔️</span>
      <span className="text-gray-200 text-lg">UGC Ads & Digital Campaigns for Rapid Growth</span>
    </li>
  </ul>
  <Button
    asChild
    className="bg-black hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
  >
    <a
      href="https://calendly.com/madapes-co/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book Free Consultation
    </a>
  </Button>
</div>


    
  </div>
      </div>

    </section>
  );
};

export default ConsultationBanner;
