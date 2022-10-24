import React,{useState} from 'react'
import {Link} from 'react-scroll'
import { FaBars } from "react-icons/fa";
const NavBar = () => {
    const[nav,setNav]=useState(false)

    const handleClick=()=>{
        setNav(!nav)
    }
  return (
    <header className="header">
      <Link to="/" className="Logo">
         <img src="https://res.cloudinary.com/di4su7hro/image/upload/v1666369854/HYDE%20UG/hyde_gkggz1.jpg" class="mr-3 h-8" alt="FlowBite Logo"/>
      </Link>

      <nav className={nav?'navbar active':'navbar'}>
         <Link to= "home" smooth={true} duration={500} >Home</Link>
         <Link to= "about" smooth={true} duration={500}>About</Link>
         <Link to= "services" smooth={true} duration={500}>Services</Link>
         <Link to= "team" smooth={true} duration={500}>Team</Link>
         <Link to= "contact" smooth={true} duration={500} >Contact Us</Link>
      </nav>
     
      <FaBars className="fa-bars" onClick={handleClick}/>
    </header>
  )
}

export default NavBar