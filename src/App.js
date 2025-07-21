import './App.css';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Features from './components/Features';
import Foo from './components/Foo';
import Header from './components/Header';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      {/* <Certifications /> */}
      <Features />
      <CallToAction />
      <Faq />
      <Contact />
      <Foo />
      <ScrollToTop />
    </>
  );
}

export default App;
