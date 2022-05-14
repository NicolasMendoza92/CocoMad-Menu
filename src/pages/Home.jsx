import React from 'react'
import { Accordion, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Footer } from '../componentes/footer/Footer';
import { SubHeader } from '../componentes/header/SubHeader';
import { ParaLlevar } from '../componentes/home/ParaLlevar';
// import { TartasYmas } from '../componentes/home/TartasYmas';

export default function Home() {

const openForm  = () => {
    const newWindow = window.open('https://docs.google.com/forms/d/1QH1Ygr4nB7m_sfw8ERRjUQaCT728md3s_CDC1HFbb9w/viewform?ts=62505779&edit_requested=true');
    if (newWindow) newWindow.opener = null
}

    return (
        <div className="footer-fix">
            <SubHeader />
            <div className='d-flex justify-content-center m-3'>
                <button onClick={openForm} className='boton-artesanal-cel-enc'>
                    ¡Ayudanos con la ENCUESTA!
                </button>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center '>
                <Nav.Link as={NavLink} to="/menuingles">
                    <button className="boton-artesanal-cel px-4" >VER MENÚ</button>
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="/menuespañol">
                    <button className="boton-artesanal-cel px-4" >MENU DETALLADO</button>
                </Nav.Link> */}
            </div>
            <div className='m-2 d-flex align-items-center justify-content-center text-center titulo-conoce'>
                Despliega para conocer más opciones y disfrutar en casa!
            </div>
            <Accordion className='m-3'>
                <Accordion.Item className="tarjetas text-center" eventKey="0">
                    <Accordion.Header className='buton-llevar' >
                        Alfajores para llevar
                    </Accordion.Header>
                    <Accordion.Body>
                        <ParaLlevar />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* <Accordion className='m-3'>
                <Accordion.Item className="tarjetas text-center" eventKey="0">
                    <Accordion.Header className='buton-llevar' >
                        TARTAS Y EMPANADAS PARA LLEVAR!
                    </Accordion.Header>
                    <Accordion.Body>
                        <TartasYmas />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
            <Footer />
        </div>
    )
}
