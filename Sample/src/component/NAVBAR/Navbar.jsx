import { Link } from 'react-router-dom';
import logo from "./jobfarmlogo.jpg"
import Exploredropdown from './Exploredropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setDropdownOpen(true); 
  };
  const handleMouseOut = () => {
    setDropdownOpen(false); 
  };
  /*const handleWrapperMouseOut = () => {
    setDropdownOpen(false); // Close the dropdown when mouse leaves the wrapper
  };*/


  return (
   <div className='NavBar'>
      <div className='Container' >
      <div className='logo'><img src={logo} alt="YourLogo" /></div>     
          <div className='links'>
          <Link to ="/">JobFarm<sup>Employers</sup></Link>
          <Link to="/explore" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>Explore</Link><FontAwesomeIcon icon={faCaretDown} className="fa-caret-down"/>
           <Link to = "/courses">Courses</Link>
           <Link to = "/careers">Careers</Link>
           <button><Link to="/Login" style={{color:"#F4F4F", fontFamily:'poppins' , fontWeight:"500px", fontSize:"28px"}}>Log In</Link></button>
        </div>
      </div>
      
     
     {/* <div onMouseOut={handleWrapperMouseOut}> </div>*/} 
        
     {isDropdownOpen && <Exploredropdown />}
    </div>
  );

}

export default Navbar;





