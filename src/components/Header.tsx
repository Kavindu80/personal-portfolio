import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg shadow-black/20' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent">
              KAVINDU
            </span>{' '}
            <span className="inline-block">LIYANAGE</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;