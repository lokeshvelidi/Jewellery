import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Icons from './components/Icons';
import FeaturedDeals from './components/FutureDeals';
import Products from './components/Products';
import ServiceStrip from './components/ServiceStrip';

function App() {
  return (
    <div >
     <Header />
     <Home />
     <Icons />
     <FeaturedDeals />
     <Products />
     <ServiceStrip />
     <Footer />
    </div>
  );
}

export default App;
