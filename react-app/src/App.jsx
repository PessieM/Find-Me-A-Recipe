import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}