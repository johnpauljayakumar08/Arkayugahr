
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, UserCheck, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-brand-lightGrey">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-maroon mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Arkayuga HR Consulting is a professional HR and talent acquisition firm committed to bridging the gap between skilled professionals and growing organizations.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-maroon mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with the right people, processes, and HR strategies, fostering sustainable growth and excellence.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-maroon mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally trusted HR consulting partner known for high-quality hiring, ethical practices, and transformative talent solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-maroon mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                To maintain transparency and ethical standards in every placement, ensuring a win-win for both clients and candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-24 bg-brand-offWhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4">Our DNA</h2>
            <h3 className="text-4xl font-display font-bold text-brand-maroon">Values that Drive Our Performance</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              // Move props into the icon declaration to avoid cloneElement issues
              { title: "Integrity & Transparency", desc: "Honesty in every interaction, ensuring clear communication with all stakeholders.", icon: <ShieldCheck className="w-8 h-8" /> },
              { title: "Quality over Quantity", desc: "We focus on the right fit, not just filling numbers, to ensure long-term success.", icon: <Star className="w-8 h-8" /> },
              { title: "Client-Centric Approach", desc: "Your goals are our goals. We align our strategies with your specific business needs.", icon: <UserCheck className="w-8 h-8" /> },
              { title: "Continuous Improvement", desc: "Constant learning and adaptation to the evolving HR landscape and technology.", icon: <Heart className="w-8 h-8" /> }
            ].map((v, i) => (
              <div key={i} className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm">
                {/* Render the icon directly to fix the TypeScript 'className' error on React.cloneElement */}
                <div className="text-brand-gold mt-1">{v.icon}</div>
                <div>
                  <h4 className="text-xl font-display font-bold text-brand-maroon mb-2">{v.title}</h4>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
