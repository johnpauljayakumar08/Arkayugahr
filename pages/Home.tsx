import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Heading6 } from 'lucide-react';
import { SECTOR_SERVICES, WHY_CHOOSE_US } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-maroon/90 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in pt-20">
            <h6 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Empowering Businesses with the <span className="text-brand-gold italic">Right Talent</span>
            </h6>
            <h2 className="text-xl md:text-2xl text-gray-200 font-medium mb-8 max-w-2xl">
              Strategic HR Consulting & Recruitment Solutions Across Industries. Build your future-ready teams with Arkayuga.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-brand-gold text-white font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all text-center">
                Explore Services
              </Link>
            </div>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "End-to-End Recruitment",
                "Industry-Specific HR Expertise",
                "Scalable & Customized Solutions"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Arkayuga Section */}
      <section className="py-24 bg-brand-offWhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">Driving Excellence in HR Consulting</h3>
            <p className="mt-6 text-gray-600 text-lg">
              We don't just fill positions; we build the foundations of your company's success through transparent and ethical hiring practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-lightGrey flex items-center justify-center mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-brand-maroon mb-4">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Sectors Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Our Specializations</h2>
              <h3 className="text-4xl font-display font-bold text-brand-maroon">Comprehensive Recruitment Across Key Sectors</h3>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_SERVICES.slice(0, 6).map((sector) => (
              <Link 
                to={`/services/${sector.id}`} 
                key={sector.id}
                className="group relative overflow-hidden rounded-2xl bg-brand-lightGrey p-8 border border-transparent hover:border-brand-gold transition-all"
              >
                <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">{sector.icon}</div>
                <h4 className="text-2xl font-display font-bold text-brand-maroon mb-3">{sector.title}</h4>
                <p className="text-gray-600 line-clamp-2">{sector.description}</p>
                <div className="mt-6 flex items-center gap-2 text-brand-maroon font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-maroon rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full -ml-20 -mb-20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Scale Your Workforce?</h3>
              <p className="text-white/80 text-lg mb-10">
                Join hundreds of companies that trust Arkayuga for their mission-critical talent acquisition needs. Let's discuss your requirements today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-10 py-4 bg-white text-brand-maroon font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Submit Your Requirement
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-opacity-90 transition-colors shadow-lg">
                  Talk to Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;