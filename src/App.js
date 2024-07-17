
import './App.css';
import About from './Components/about/about';
import Hero from './Components/Hero/Hero';
import SwitchTheme from './Components/SwitchTheme/SwitchTheme';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <SwitchTheme/>
    </div>
  );
}

export default App;
