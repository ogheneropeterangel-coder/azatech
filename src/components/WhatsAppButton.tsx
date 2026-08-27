import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';

const TYPED_MESSAGE =
  'Hello Azatech! How can we help you source the equipment your facility needs?';

export default function WhatsAppButton({ size = 'default' }: { size?: 'default' | 'small' }) {
  const baseSize = size === 'small' ? 'w-10 h-10' : 'w-14 h-14';
  const iconSize = size === 'small' ? 18 : 24;
  const [hovered, setHovered] = useState(false);
  const [typed, setTyped] = useState('');
  const [typing, setTyping] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!hovered) return;

    let index = 0;
    const type = () => {
      if (index <= TYPED_MESSAGE.length) {
        setTyped(TYPED_MESSAGE.slice(0, index));
        index += 1;
        timerRef.current = window.setTimeout(type, 45);
      } else {
        setTyping(false);
      }
    };

    const startDelay = window.setTimeout(type, 350);

    return () => {
      if (startDelay) window.clearTimeout(startDelay);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [hovered]);

  const handleHoverStart = () => {
    setHovered(true);
    setTyping(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
    setTyping(false);
    setTyped('');
  };

  const url = getWhatsAppLink(
    'I would like to discuss a medical equipment / technology supply requirement.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div
        className={`absolute bottom-full right-0 mb-3 hidden md:block transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="relative w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-3">
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle size={13} className="text-gold" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-navy mb-0.5">Azatech Support</div>
              <div className="text-sm text-gray-dark leading-relaxed min-h-[40px]">
                {typed}
                {typing && (
                  <span className="inline-block w-[2px] h-4 bg-gold ml-0.5 animate-pulse align-middle" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onFocus={handleHoverStart}
        onBlur={handleHoverEnd}
        className={`${baseSize} bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-gold-light hover:shadow-xl transition-all duration-300 hover:scale-105`}
        aria-label="Chat with Azatech on WhatsApp"
      >
        <MessageCircle size={iconSize} className="text-navy" />
      </a>
    </div>
  );
}