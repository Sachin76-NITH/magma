import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import axios from 'axios';
import LogoutPage from "./components/LogoutPage";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/LogoutPage.scss";
import "react-toastify/dist/ReactToastify.css"
import User from "./components/User";
import ProtectedRoute from './components/PrivateRoute'; 
import "./styles/app.scss";
import Viewbook from "./components/Viewbook";
import Addbook from "./components/Addbook";
import { UseAuth } from './components/UseAuth';
import { Navigate } from 'react-router-dom';
import Intro from "./components/portfolio/Intro";

function App() {
  const { isAuthenticated } = UseAuth();
  return (
    <div className="app_body">
      <Router>
      <Navbar/>
      
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Logout" element={<LogoutPage />} />
      <Route path="/User" element={<User />} />
      <Route path="/User" element={<User />} />
      <Route path="/view" element={<Viewbook />} />
      <Route path="/add-book" element={<Addbook />} />
      <Route path="/Portfolio" element={<Intro/>} />
    </Routes>
    <Footer/>
   </Router>
    </div>
   
  );
}

export default App;
