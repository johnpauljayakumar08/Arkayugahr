import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { BRAND_NAME } from '../constants.tsx';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <Logo variant="light" className="scale-90 origin-left" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Arkayuga HR Consulting is committed to bridging the gap between skilled professionals and growing organizations across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-maroon hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-maroon hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-maroon hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Our Journey</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">HR Services Overview</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/services/it-recruitment" className="hover:text-brand-gold transition-colors">IT & Tech Hiring</Link></li>
              <li><Link to="/services/sap-recruitment" className="hover:text-brand-gold transition-colors">SAP Specialist Services</Link></li>
              <li><Link to="/services/healthcare-recruitment" className="hover:text-brand-gold transition-colors">Healthcare Staffing</Link></li>
              <li><Link to="/services/bfsi-recruitment" className="hover:text-brand-gold transition-colors">Banking & Finance</Link></li>
              <li><Link to="/services/manufacturing-recruitment" className="hover:text-brand-gold transition-colors">Engineering Roles</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                <span>Pan-India Services, Corporate Office: New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>info@arkayugahr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
          <p className="mt-2">Empowering Businesses with the Right Talent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;