import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ children, to, href, variant = 'primary', icon, className = '', onClick }: CTAButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-md';
  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-light shadow-sm hover:shadow-md',
    secondary: 'border border-gold text-gold hover:bg-gold hover:text-navy',
    ghost: 'text-white hover:text-gold',
  };

  const content = (
    <motion.span className={`${base} ${variants[variant]} ${className}`} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  if (to) {
    return <Link to={to} onClick={onClick}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}