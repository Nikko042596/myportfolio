
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Skills />
     <Service />
     <Project />
     <Blog />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
