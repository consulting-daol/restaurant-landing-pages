import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import all restaurant components
import PennyCrown from './restaurants/PennyCrown';
import BriocheAvitus from './restaurants/BriocheAvitus';
import ChefsFarmers from './restaurants/ChefsFarmers';
import LazyS from './restaurants/LazyS';
import OrderStore from './restaurants/OrderStore';

function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Restaurant Landing Pages</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        width: '100%'
      }}>
        <Link to="/penny-crown" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '10px',
          transition: 'transform 0.3s',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <h2>Penny Crown</h2>
          <p>Classic Tavern Style</p>
        </Link>
        <Link to="/brioche-avitus" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '10px',
          transition: 'transform 0.3s',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <h2>Brioche by Avitus</h2>
          <p>French Card Layout</p>
        </Link>
        <Link to="/chefs-farmers" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '10px',
          transition: 'transform 0.3s',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <h2>Chefs & Farmers</h2>
          <p>Modern Grid Layout</p>
        </Link>
        <Link to="/lazy-s" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '10px',
          transition: 'transform 0.3s',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <h2>The Lazy S</h2>
          <p>Premium Minimal</p>
        </Link>
        <Link to="/order-store" style={{ 
          textDecoration: 'none', 
          color: 'inherit',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '10px',
          transition: 'transform 0.3s',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <h2>Fresh Eats</h2>
          <p>Interactive Cards</p>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/penny-crown" element={<PennyCrown />} />
        <Route path="/brioche-avitus" element={<BriocheAvitus />} />
        <Route path="/chefs-farmers" element={<ChefsFarmers />} />
        <Route path="/lazy-s" element={<LazyS />} />
        <Route path="/order-store" element={<OrderStore />} />
      </Routes>
    </Router>
  );
}

export default App;