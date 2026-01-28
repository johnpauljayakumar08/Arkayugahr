import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const maroon = '#5d1b22';
  const gold = '#b38b5d'; // Slightly brighter gold for better contrast
  const textColor = variant === 'light' ? '#FFFFFF' : maroon;
  const subTextColor = variant === 'light' ? '#FFFFFF' : '#1a1a1a';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="280"
        height="70"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-12 md:h-14"
      >
        {/* Abstract "A" Emblem Wing - Left */}
        <path d="M15 85 L35 85 L35 55 L50 70 L50 85 L55 85 L55 35 L15 85Z" fill={maroon} />
        <path d="M25 80 L30 80 L30 65 L25 75 L25 80Z" fill="white" fillOpacity="0.2" />
        
        {/* Abstract "A" Emblem Wing - Right */}
        <path d="M105 85 L85 85 L85 55 L70 70 L70 85 L65 85 L65 35 L105 85Z" fill={maroon} />
        <path d="M95 80 L90 80 L90 65 L95 75 L95 80Z" fill="white" fillOpacity="0.2" />
        
        {/* Three Golden Pillars */}
        <rect x="52" y="30" width="3" height="40" rx="1.5" fill={gold} />
        {/* Center Taller Pillar with points */}
        <path d="M58 80 L62 80 L62 20 L60 15 L58 20 Z" fill={gold} />
        <rect x="65" y="30" width="3" height="40" rx="1.5" fill={gold} />

        {/* Brand Text: ARKAYUGA */}
        <text
          x="125"
          y="50"
          fill={variant === 'light' ? '#FFFFFF' : maroon}
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: '56px',
            fontWeight: 'normal',
            letterSpacing: '3px'
          }}
        >
          ARKAYUGA
        </text>

        {/* Divider Line */}
        <line x1="125" y1="62" x2="385" y2="62" stroke={gold} strokeWidth="2" />

        {/* Subtitle: HR CONSULTANCY */}
        <text
          x="145"
          y="85"
          fill={variant === 'light' ? '#FFFFFF' : '#000000'}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: '300',
            letterSpacing: '8px'
          }}
        >
          HR CONSULTANCY
        </text>
      </svg>
    </div>
  );
};

export default Logo;