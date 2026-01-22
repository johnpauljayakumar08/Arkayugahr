import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-lg bg-brand-maroon flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className={`text-xl font-display font-bold block leading-none transition-colors ${isScrolled || !isHome ? 'text-brand-maroon' : 'text-white'}`}>ARKAYUGA</span>
              <span className={`text-[10px] tracking-[0.2em] font-medium block transition-colors ${isScrolled || !isHome ? 'text-brand-gold' : 'text-brand-gold'}`}>HR CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-brand-gold ${
                  location.pathname === link.path 
                    ? 'text-brand-gold' 
                    : (isScrolled || !isHome ? 'text-gray-700' : 'text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-brand-maroon text-white font-medium hover:bg-brand-lightMaroon transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-maroon/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className={isScrolled || !isHome ? 'text-brand-maroon' : 'text-white'} /> : 
              <Menu className={isScrolled || !isHome ? 'text-brand-maroon' : 'text-white'} />
            }
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 gap-8">
          <div className="flex justify-end mb-4">
             <button onClick={closeMenu} className="p-2 text-brand-maroon">
                <X className="w-8 h-8" />
             </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-2xl font-display font-bold border-b border-gray-100 pb-4 flex items-center justify-between ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-brand-maroon'
              }`}
            >
              {link.name}
              <ChevronRight className="w-6 h-6" />
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 w-full py-4 rounded-xl bg-brand-maroon text-white text-center font-bold text-lg shadow-xl"
          >
            Talk to Our HR Experts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;