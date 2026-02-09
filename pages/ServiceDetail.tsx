import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SECTOR_SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sector = SECTOR_SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (!sector) {
      navigate('/services');
    }
  }, [id, sector, navigate]);

  if (!sector) return null;

  return (
    <div className="pt-20">
      {/* Detail Header */}
      <section className="py-20 bg-brand-maroon relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="max-w-4xl">
            <div className="text-brand-gold mb-6">{sector.icon}</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">{sector.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Detail Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Roles */}
            <div>
              <h3 className="text-3xl font-display font-bold text-brand-maroon mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-brand-gold" />
                Key Roles We Hire
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sector.roles?.map((role, i) => (
                  <div key={i} className="p-4 bg-brand-lightGrey rounded-xl border border-gray-100 font-medium text-gray-700 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-3xl font-display font-bold text-brand-maroon mb-8">Why Partner with Us?</h3>
              <div className="space-y-6">
                {sector.benefits?.map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-brand-offWhite rounded-2xl border border-brand-gold/20">
                <h4 className="text-xl font-bold text-brand-maroon mb-4">Strategic Talent Sourcing</h4>
                <p className="text-gray-600 mb-6">
                  Our deep domain knowledge in {sector.title.toLowerCase()} allows us to identify not just candidates, but leaders who align with your organizational culture.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-maroon text-white px-8 py-3 rounded-full hover:bg-brand-lightMaroon transition-all shadow-lg">
                  Submit Hiring Request <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sectors */}
      <section className="py-24 bg-brand-lightGrey">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl font-display font-bold text-brand-maroon mb-12">Other Sectors We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTOR_SERVICES.filter(s => s.id !== id).slice(0, 9).map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="bg-white p-6 rounded-xl hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-bold text-gray-700">{s.title}</span>
                <ChevronRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;