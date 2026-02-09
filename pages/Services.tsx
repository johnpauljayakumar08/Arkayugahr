import React from 'react';
import { Link } from 'react-router-dom';
import { CORE_SERVICES, SECTOR_SERVICES } from '../constants';
import { ArrowRight, ChevronRight, Briefcase, Zap, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-brand-maroon text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Core HR Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Strategic recruitment and workforce management solutions tailored to the needs of modern enterprises.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full -ml-32 -mt-32"></div>
      </section>

      {/* Core HR Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Strategic Solutions</h2>
            <h3 className="text-4xl font-display font-bold text-brand-maroon">End-to-End Workforce Management</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group p-8 rounded-2xl bg-brand-offWhite border border-gray-100 hover:border-brand-gold transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-brand-maroon mb-6 shadow-sm group-hover:bg-brand-maroon group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-maroon mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-brand-gold font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Discuss Requirement <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise Section */}
      <section className="py-24 bg-brand-lightGrey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Industry Focus</h2>
            <h3 className="text-4xl font-display font-bold text-brand-maroon">Specialized Recruitment Across Sectors</h3>
            <p className="mt-6 text-gray-600">
              Our domain experts understand the nuances of specific industries, ensuring higher quality placements and cultural alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_SERVICES.map((sector) => (
              <Link 
                to={`/services/${sector.id}`} 
                key={sector.id}
                className="group flex flex-col justify-between p-8 rounded-2xl bg-white border border-transparent hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform origin-left">
                    {sector.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-brand-maroon mb-3">{sector.title}</h4>
                  <p className="text-gray-600 mb-6">{sector.description}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="text-brand-maroon font-bold flex items-center gap-2">
                    View Details <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Explore Sector
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-brand-maroon text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 italic">Ready to find your next great hire?</h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Whether it's a single executive search or a volume hiring drive, Arkayuga delivers speed, quality, and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-10 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                  Request a Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            {/* Abstract Background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;