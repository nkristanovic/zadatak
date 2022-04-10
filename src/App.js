import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/HeroBottom/HeroBottom';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroBottom />
      <SectionOne />
      <SectionTwo />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
