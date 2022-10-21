import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Products from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
      // Update network status
      const handleStatusChange = () => {
        setIsOnline(navigator.onLine);
      };
  
      // Listen to the online status
      window.addEventListener('online', handleStatusChange);
  
      // Listen to the offline status
      window.addEventListener('offline', handleStatusChange);
       //send a toast message
       isOnline?toast.success("You are Online"):toast.error("Check your Network Connection")
      // Specify how to clean up after this effect for performance improvment
      return () => {
        window.removeEventListener('online', handleStatusChange);
        window.removeEventListener('offline', handleStatusChange);
      };
  }, [isOnline]);
  
  return (
    <> 
    <ToastContainer/>
        <NavBar/>
        <About/>
        {/* <Home/> */}
        <Products/>
        <Team/>
        <Footer/>
    </>
  );
}

export default App;
