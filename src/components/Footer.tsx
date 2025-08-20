import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-[#F7E7CE]">ShopLune</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Curating timeless elegance through luxury jewelry and ethnic wear for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-[#F7E7CE]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Jewelry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Ethnic Wear</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-[#F7E7CE]">Customer Care</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E8B4A0] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-[#F7E7CE]">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#E8B4A0]" />
                <span className="text-gray-300">hello@shoplune.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[#E8B4A0]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[#E8B4A0]" />
                <span className="text-gray-300">Mumbai, Maharashtra<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ShopLune. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#E8B4A0] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#E8B4A0] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#E8B4A0] text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;