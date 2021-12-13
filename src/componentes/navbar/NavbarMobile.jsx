import React from 'react'
import { Nav, Offcanvas } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';


export const NavbarMobile = ({ setShow, show}) => {

  const handleClose = () => setShow(false);


  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
        <Offcanvas.Header className="responsive-navbar-header">
          <div className="logo-container-responsive" >
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1638210954/cocoMAD/cocomad_logo_celeste_1_pccjhr.png" alt="img logo" className="nav-logo-desktop" />
            </Nav.Link>
          </div>
          <button type="button" aria-label="Close" className="navbar-button mx-1" onClick={handleClose} ><VscClose /></button>
        </Offcanvas.Header>
        <Offcanvas.Header className="d-flex justify-content-evenly">
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="responsive-navbar-links text-center ">
            <li className="p-2 mx-3">
              <NavLink as={NavLink} to="/menuespañol" activeClassName="link-active-cel" onClick={handleClose}>MENU ESPAÑOL</NavLink>
            </li>
            <li className="p-2 mx-3">
              <NavLink as={NavLink} to="/menuingles" activeClassName="link-active-cel" onClick={handleClose}>MENU INGLES</NavLink>
            </li>
          </div>
          <div className="navbar-responsive-redes">
            <Offcanvas.Title className="navbar-responsive-subtitle mt-3">Seguinos en nuestras redes</Offcanvas.Title>
            <div className="navbar-responsive-icons-container d-flex justify-content-evenly my-5">
              <li>
                <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank" className="face-icon"><BsFacebook /></a>
              </li>
              <li>
                <a  href="https://www.instagram.com/cocomadbakery/" target="blank" className="insta-icon"><GrInstagram /></a>
              </li>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

