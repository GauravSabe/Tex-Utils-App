import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
