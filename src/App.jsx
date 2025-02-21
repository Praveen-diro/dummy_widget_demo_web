import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Your main content/routes will go here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 