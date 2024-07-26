
import { lazy, Suspense } from 'react';
import './App.css';
import About from './Components/about/about';
import ColorInput from './Components/Color2/ColorInput';
import ContionalRen from './Components/ContionRendering/ContionalRen';
import UseFromss from './Components/CoustemHooks/UseFromss';
import Events from './Components/Events/Events';
import FechApi from './Components/FechApis/FechApi';
import Validation from './Components/FormVallidation/Validation';
import Hero from './Components/Hero/Hero';
import JsonRect from './Components/Json/JsonRect';
import Key from './Components/Key/Key';
import Laziyloading from './Components/LaziyLoading/Laziyloading';
import Navbar from './Components/navbar/Navbar';
import Proms from './Components/probs/Proms';
import Sample from './Components/Sample';
import SampleProps from './Components/SampleProps';

import SwitchTheme from './Components/SwitchTheme/SwitchTheme';

import Todo from './Components/Todo.jsx/Todo';
import TOTODo from './Components/Todo.jsx/Todo2/TOTODo';
import PrevState from './Components/userRef/PrevState';
import Context from './Components/userRef/useContext/Context';
import Usereaducer from './Components/userRef/Usereaducer';
import UserRef from './Components/userRef/UserRef';
import ValidFrom from './Components/ValidFrom/ValidFrom';
import ValidFromMyself from './Components/ValidFrom/ValidFromMyself';

const LazyUSer =lazy(()=> import("./Components/LaziyLoading/Laziyloading"))

function App() {
  return (
    <div className="App">
      {/* <Laziyloading/> */}
      <Validation/>
       <Sample/>
       <Suspense fallback={<div className='h-[100vh] bg-red-500'>loadinf.......</div>}>
       <LazyUSer/>
       </Suspense>
      {/* <ProgressEvent/> */}
  
       <SampleProps/> 
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
      <Usereaducer/>
  <Context/>
  <UseFromss/> 
   <JsonRect/>
    </div>
  );
}

export default App;
