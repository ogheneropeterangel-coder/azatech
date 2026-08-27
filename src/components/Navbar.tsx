import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, getWhatsAppLink } from '../utils/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/logo.jpg"
                alt="Azatech Global Supply Chain Limited"
                width={40}
                height={40}
                className="w-10 h-10 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
                  AZATECH
                </span>
                <span className={`text-[9px] tracking-[0.15em] uppercase font-medium leading-tight transition-colors ${isScrolled ? 'text-gold' : 'text-gold'}`}>
                  Global Supply Chain
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-xs tracking-wider uppercase font-medium rounded-md transition-all duration-200 ${
                    location.pathname === item.path
                      ? isScrolled ? 'text-gold' : 'text-gold'
                      : isScrolled
                        ? 'text-gray-dark hover:text-navy'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink('I would like to discuss a medical equipment / technology supply requirement.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy text-xs font-medium tracking-wider uppercase rounded-md hover:bg-gold-light transition-all duration-300"
              >
                <MessageCircle size={14} />
                Talk to Us
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-navy pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={item.path}
                    className={`text-lg tracking-wider uppercase font-medium transition-colors ${
                      location.pathname === item.path ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.06, duration: 0.4 }}
                className="mt-6"
              >
                <a
                  href={getWhatsAppLink('I would like to discuss a medical equipment / technology supply requirement.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wider uppercase rounded-md hover:bg-gold-light transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Talk to Us on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}