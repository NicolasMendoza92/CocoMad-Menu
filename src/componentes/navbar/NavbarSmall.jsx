
import { Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export const NavbarSmall = () => {


    return (
        <>
                    <nav>
                        <Container bg="none" className="py-2">
                            <div className="d-flex align-items-center justify-content-start contenedor-small " >
                                <div className="logo-container-small" >
                                    <Link as={NavLink} to="/"  >
                                        <img id="main-img-small" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1638210957/cocoMAD/cocomad_logo_rose_1_jkbvbz.png" alt="img logo" className="nav-logo-desktop" />
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </nav>
        </>
    );
}
