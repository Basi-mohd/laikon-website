import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import ErrorPage from './pages/ErrorPage';
import BatteryProductPage from './pages/Products';
import AboutUs from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Layout Components */}
        <main className="flex-grow">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<BatteryProductPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
