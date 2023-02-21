import React ,{useState} from 'react'
// import logo from "../../assets/bookswagon-logo.jpg"
// import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon } from "mdbreact";
import logo from "../../assets/logo.jpg"
import "./Header.css"
// import { MDBInputGroup, MDBIcon } from 'mdb-react-ui-kit';
function Header() {

 const [angle, setAngle] = useState(false)


  const handleChange =()=>{

    setAngle(!angle)

    console.log(angle);
 

  }


  
  return (
    <div className="Header">

      <div className='input'>
        <img className="logo" src={logo} />
      </div>



      <div className='input-field'>
        <MDBCol md="20">
          <div className="input-group md-form form-lg form-1 pl-0 ">

            <input
              className="form-control my-0 py-1 input-field-search"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />

            <div className="input-group-prepend">
              <span className="input-group-text red active-red" id="basic-text1">
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>


          </div>
        </MDBCol>
      </div>



      <div className="account">
        <MDBIcon fas icon="user-circle"  id="user"/>
        <p id='myaccount'>My Account</p>
        <button id='angle' onMouseEnter={handleChange} >  <MDBIcon  fas icon={angle ? "angle-down":"angle-right"} /></button>
    
      
        <MDBIcon far icon="heart" id="heart"/>
      </div>



    </div>
  )
}

export default Header