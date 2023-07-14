import './App.css';
import Navbar from './componentes/section/NavBar';
import Projects from './componentes/section/Projects';
import Skills from './componentes/section/Skills';
import Footer from './componentes/section/Footer'
import Presentation from './componentes/section/Presentation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
      </div>
  );
}

export default App;
