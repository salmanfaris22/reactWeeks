
import './App.css';
import About from './Components/about/about';
import ColorInput from './Components/Color2/ColorInput';
import ContionalRen from './Components/ContionRendering/ContionalRen';
import Hero from './Components/Hero/Hero';
import Key from './Components/Key/Key';
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
      <ColorInput/>
      <ContionalRen/>
      <Key/>
    </div>
  );
}

export default App;
