
import './App.css';
import About from './Components/about/about';
import ColorInput from './Components/Color2/ColorInput';
import ContionalRen from './Components/ContionRendering/ContionalRen';
import Events from './Components/Events/Events';
import FechApi from './Components/FechApis/FechApi';
import Hero from './Components/Hero/Hero';
import Key from './Components/Key/Key';
import Navbar from './Components/navbar/Navbar';
import Proms from './Components/probs/Proms';

import SwitchTheme from './Components/SwitchTheme/SwitchTheme';

import Todo from './Components/Todo.jsx/Todo';
import TOTODo from './Components/Todo.jsx/Todo2/TOTODo';
import PrevState from './Components/userRef/PrevState';
import UserRef from './Components/userRef/UserRef';
import ValidFrom from './Components/ValidFrom/ValidFrom';
import ValidFromMyself from './Components/ValidFrom/ValidFromMyself';

function App() {
  return (
    <div className="App">
      {/* <Textin name="jasim" age={3} st={true}/> */}
      <Navbar />
      <Hero />
      <About />
      <SwitchTheme />

      <Proms />
      <ColorInput />
      <ContionalRen />
      <Key />
      <Events />
      <FechApi />
      <UserRef />
      <PrevState />
   
      <ValidFromMyself />
      <Todo />
      <TOTODo/>
  

    </div>
  );
}

export default App;
