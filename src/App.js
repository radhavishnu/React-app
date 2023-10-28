import logo from './logo.svg';
import './App.css';
import Exercises from "./Excercises"
import HelloWorld from "./Excercises/e5/hello-world"
import Tuiter from "./Tuiter"
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
          <div className="App">
        <Routes>
          <Route path="/*" element={<Tuiter/>}/>
        </Routes>
      </div>
     {/* <div className='container'>
      <Routes>
      <Route path='/exercises' 
      element={<Exercises/>}/>
      <Route path='/hello-world'
      element={<HelloWorld/>}/>
      <Route index='/Tuiter/*'
      element={<Tuiter/>}/>
      </Routes>

    </div>  */}
    </BrowserRouter>
  );
}

export default App;
