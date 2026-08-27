import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Solutions from './pages/Solutions';
import SupplyChain from './pages/SupplyChain';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><PageTransition><Home /></PageTransition></Layout>} />
        <Route path="/about" element={<Layout><PageTransition><About /></PageTransition></Layout>} />
        <Route path="/equipment" element={<Layout><PageTransition><Equipment /></PageTransition></Layout>} />
        <Route path="/solutions" element={<Layout><PageTransition><Solutions /></PageTransition></Layout>} />
        <Route path="/supply-chain" element={<Layout><PageTransition><SupplyChain /></PageTransition></Layout>} />
        <Route path="/industries" element={<Layout><PageTransition><Industries /></PageTransition></Layout>} />
        <Route path="/contact" element={<Layout><PageTransition><Contact /></PageTransition></Layout>} />
        <Route path="/request-quote" element={<Layout><PageTransition><RequestQuote /></PageTransition></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}