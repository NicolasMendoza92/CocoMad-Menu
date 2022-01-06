import React from 'react'
import { Accordion, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Footer } from '../componentes/footer/Footer';
import { SubHeader } from '../componentes/header/SubHeader';
import { ParaLlevar } from '../componentes/home/ParaLlevar';
import { TartasYmas } from '../componentes/home/TartasYmas';

export default function Home() {

    return (
        <div className="footer-fix">
            <SubHeader />
            <div className='d-flex flex-column align-items-center justify-content-center '>
                <Nav.Link as={NavLink} to="/menueingles">
                    <button className="boton-artesanal-cel px-4" >VER MENU</button>
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="/404">
                    <button className="boton-artesanal-cel px-4" >MENU INGLES</button>
                </Nav.Link> */}
            </div>
            <div className='m-2 d-flex align-items-center justify-content-center text-center titulo-conoce'>
                Despliega para conocer mas opciones y disfrutar en casa!
            </div>
            <Accordion className='m-3'>
                <Accordion.Item className="tarjetas text-center" eventKey="0">
                    <Accordion.Header className='buton-llevar' >
                        ALFAJORES PARA LLEVAR!
                    </Accordion.Header>
                    <Accordion.Body>
                        <ParaLlevar />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='m-3'>
                <Accordion.Item className="tarjetas text-center" eventKey="0">
                    <Accordion.Header className='buton-llevar' >
                        TARTAS Y EMPANADAS PARA LLEVAR!
                    </Accordion.Header>
                    <Accordion.Body>
                        <TartasYmas />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Footer />
        </div>
    )
}
