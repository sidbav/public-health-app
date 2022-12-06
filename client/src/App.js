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
import MapSection from './components/GoogleMaps/Map.jsx' // this is for MapSection
import Surveyone from './components/Surveyone';
import TableList from './components/TableList';
import GoogleSignin from './components/GoogleSignin';

import Admin from './layouts/Admin.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";



// do not delete this variable
const location = {
  address: 'Baylor Scott & White Medical Center – College Station',
  lat:30.58254420899421,
  lng:-96.27917886514233
};


// include this to the App function
//{ <MapSection location={location} zoomLevel={15} />  }

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
          }>
              <Route path = "/dashboard" element  = {<Dashboard />}/>
              <Route path = "/profile" element  = {<Profile />}/>
              <Route path = "/surveys" element  = {<TableList />} />
              <Route path = "/maps"    element = {<MapSection zoomLevel = {15} location={location}/>}/>
          </Route>

          <Route path ="/landing"  element = {<Landing/>}/>
          <Route path="/register"  element = {<Register/>}/>
          <Route path="/surveyone" element = {<Surveyone/>}/>
          <Route path ="/signin"    element = {<GoogleSignin/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
