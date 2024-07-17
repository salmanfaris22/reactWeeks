
import './App.css';
import About from './Components/about/about';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Proms from './Components/probs/Proms';
import SwitchTheme from './Components/SwitchTheme/SwitchTheme';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Hero/>
      <About/>
      <SwitchTheme/>
      <Proms/>
    </div>
  );
}

export default App;
