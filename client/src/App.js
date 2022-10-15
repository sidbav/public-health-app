import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// import pages
import Register from './pages/Register';
import Landing from './pages/Landing';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './components/Profile';

// import Components
import Dashboard from './components/Dashboard';
import AdminNavbar from './components/AdminNavbar.jsx';
import Maps from './components/Maps';

import Admin from './layouts/Admin.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
          }>
              <Route path = "dashboard" element  = {<Dashboard />}/>
              <Route path = "profile" element  = {<Profile />}/>
              <Route path = "maps" element  = {<Maps /> }/>
          </Route>

          <Route path ="/landing"  element = {<Landing/>}/>
          <Route path="/register" element= {<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
