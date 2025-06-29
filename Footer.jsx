import { Link } from 'react-router-dom'
import { Leaf, Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-cannabis-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-cannabis-gold p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Green Valley</div>
                <div className="text-cannabis-gold">Cannabis</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              California's premier cannabis destination. Licensed, tested, and trusted by our community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cannabis-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors">Products</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/education" className="block text-gray-300 hover:text-white transition-colors">Education</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cannabis-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cannabis-gold" />
                <span className="text-gray-300">123 Cannabis Way, Los Angeles, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cannabis-gold" />
                <span className="text-gray-300">(555) 420-HERB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cannabis-gold" />
                <span className="text-gray-300">info@greenvalleycannabis.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cannabis-gold">Store Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-cannabis-gold" />
                <div className="text-gray-300">
                  <div>Mon - Sat: 9:00 AM - 9:00 PM</div>
                  <div>Sunday: 10:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
            <div className="bg-cannabis-light-green p-3 rounded-lg">
              <p className="text-sm font-semibold">First-time customers get 10% off!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cannabis-light-green mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Green Valley Cannabis. All rights reserved. Licensed Cannabis Retailer.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            <p>Cannabis products have not been evaluated by the FDA. Keep out of reach of children and pets.</p>
            <p>For use only by adults 21 years of age and older. Please consume responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

