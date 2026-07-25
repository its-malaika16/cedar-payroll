import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar.jsx';
import Home from './pages/home.jsx';
import Features from './pages/features.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import ScrollToTop from './components/ScrollToTop';
import TermsPage from './pages/TermsPage.jsx';
import Privacy from './pages/PrivacyPage.jsx';
import Support from './pages/support.jsx';
import WhoweServe from './pages/whoweserve.jsx';
import Footer from './components/Footer/footer.jsx';


function App() {
  return (
    <Router>
         <ScrollToTop />
      { <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Features />} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/whoweserve" element={<WhoweServe/>} />
      </Routes>
       { <Footer /> }
    </Router>
  );
}

export default App; 