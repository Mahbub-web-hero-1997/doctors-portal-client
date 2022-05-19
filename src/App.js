import { Route, Routes } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
