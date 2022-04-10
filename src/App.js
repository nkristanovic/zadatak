import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
