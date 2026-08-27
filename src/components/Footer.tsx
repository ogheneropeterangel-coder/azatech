import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo.jpg"
                alt="Azatech Global Supply Chain Limited"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 rounded-md object-cover mb-4"
              />
              <span className="block text-2xl font-bold tracking-tight">AZATECH</span>
              <span className="block text-[10px] tracking-[0.15em] uppercase font-medium text-gold mt-0.5">
                Global Supply Chain
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Azatech Global Supply Chain Limited connects organizations with medical equipment, laboratory technology and specialized technology solutions through a smarter supply-chain approach.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/supply-chain" className="text-sm text-gray-400 hover:text-white transition-colors">Supply Chain</Link></li>
              <li><Link to="/industries" className="text-sm text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/request-quote" className="text-sm text-gray-400 hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-6">Equipment</h4>
            <ul className="space-y-3">
              <li><Link to="/equipment" className="text-sm text-gray-400 hover:text-white transition-colors">Medical Equipment</Link></li>
              <li><Link to="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors">Laboratory Technology</Link></li>
              <li><Link to="/equipment" className="text-sm text-gray-400 hover:text-white transition-colors">Diagnostic Equipment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:+2348060860749`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>+234 806 086 0749</span>
                </a>
              </li>
              <li>
                <a href="mailto:azatechglobalsupplychain@gmail.com" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>azatechglobalsupplychain@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('I would like to discuss a medical equipment / technology supply requirement.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gold hover:text-gold-light transition-colors"
                >
                  <MessageCircle size={14} className="shrink-0 mt-0.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium">
                Connect
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium">
                Move
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium">
                Deliver
              </span>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Azatech Global Supply Chain Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}