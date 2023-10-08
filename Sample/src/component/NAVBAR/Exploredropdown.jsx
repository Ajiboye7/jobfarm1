import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Exploredropdown() {
  return (
      <div className='dropdown'>
          <div className='items'>
             <div className='search'><input type="text" style={{ width:'370px',height:'55px', fontSize: '25px',fontFamily:'ABeeZee',paddingLeft:'20px', borderRadius:"15px", border:"border: 10px solid #303030;"}} placeholder="Search Keyword here"/>
             <FontAwesomeIcon icon={faMagnifyingGlass} className= "fa-magnifying-glass" />
             </div>
             <h2>Categories</h2>
             <h2>Categories Hiring</h2>s
             <h2>Build a Professional CV</h2>
             <h2>Assess your Skills</h2>
             <h2>Trends</h2>
             <h2>Blogs</h2>
         </div>
      </div>
  )
}

export default Exploredropdown;
