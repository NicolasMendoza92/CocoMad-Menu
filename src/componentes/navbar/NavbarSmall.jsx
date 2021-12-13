import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavbarMobile } from './NavbarMobile';
import './navbar.css';
import { FaArrowDown } from 'react-icons/fa';


export const NavbarSmall = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    const scrollToDown = () => {
        window.scrollTo(100, 0);
    };

    return (
        <>
                    <nav>
                        <Container bg="none" className="py-2">
                            <div className="d-flex align-items-center justify-content-between contenedor-small " >
                                <div className="d-block d-md-none ">
                                    <button
                                        className="navbar-button-small"
                                        onClick={handleShow}>
                                        <GiHamburgerMenu />
                                    </button>
                                </div>
                                <div className="logo-container-small" >
                                    <Link as={NavLink} to="/"  >
                                        <img id="main-img-small" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1638210957/cocoMAD/cocomad_logo_rose_1_jkbvbz.png" alt="img logo" className="nav-logo-desktop" />
                                    </Link>
                                </div>
                                <button onClick={scrollToDown} className="bajar-arrow mt-2 mx-2"> <FaArrowDown /> </button>
                            </div>
                        </Container>
                    </nav>
                <NavbarMobile setShow={setShow} show={show}/>
        </>
    );
}
