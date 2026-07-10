import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center border border-primary-500/30">
                <Leaf className="w-6 h-6 text-primary-500" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Vasundhara</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              A digital platform designed to encourage tree plantation, environmental awareness, volunteer participation, and measurable green impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/features" className="hover:text-primary-400 transition-colors">Features</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Support & Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/csae-standards" className="hover:text-primary-400 transition-colors">CSAE Standards</Link></li>
              <li><Link to="/delete-account" className="hover:text-red-400 transition-colors">Account Deletion Request</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase text-sm">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>1st Floor, Mukta Plaza, Income Tax Square, Gorakshan Road, Akola, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+91 9876543210</span> {/* Placeholder Mobile Number */}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:admin@kitstechsolutions.com" className="hover:text-primary-400 transition-colors">admin@kitstechsolutions.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} KITS Tech Solutions. All Rights Reserved.
          </p>
          <div className="text-sm text-gray-500">
            Developer Website: <a href="https://kitstechsolutions.com/" target="_blank" rel="noreferrer" className="text-primary-500 hover:text-primary-400">kitstechsolutions.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

