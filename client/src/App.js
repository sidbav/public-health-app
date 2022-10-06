import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Landing from './pages/Landing';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/landing"  element = {<Landing/>}/>
          <Route path="/register" element= {<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
