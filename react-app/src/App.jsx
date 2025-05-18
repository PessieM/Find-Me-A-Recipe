import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import AboutUs from './AboutUs';
import Navbar from './navBar';
import Footer from './footer';
import Header from './header';
import './App.css';
import Logo from './Logo.png';
export default function App() {
  return (
    <Router>
        <Navbar /> {/* Navbar at the top */}
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
        <Footer /> {/* Footer appears at the bottom */}
    </Router>
  );
}