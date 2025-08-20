import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-serif text-[#8B7355]">
            ShopLune
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">New In</a>
            <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Jewelry</a>
            <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Ethnic Wear</a>
            <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Accessories</a>
            <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Collections</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-[#8B7355] hover:text-[#E8B4A0] cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-[#8B7355] hover:text-[#E8B4A0] cursor-pointer transition-colors" />
            <ShoppingBag className="w-5 h-5 text-[#8B7355] hover:text-[#E8B4A0] cursor-pointer transition-colors" />
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#8B7355]" />
              ) : (
                <Menu className="w-5 h-5 text-[#8B7355]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#F5E6D3]">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">New In</a>
              <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Jewelry</a>
              <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Ethnic Wear</a>
              <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Accessories</a>
              <a href="#" className="text-[#8B7355] hover:text-[#E8B4A0] transition-colors">Collections</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;