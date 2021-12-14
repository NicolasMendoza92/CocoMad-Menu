import React from 'react'
import { Accordion, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ParaLlevar } from '../componentes/home/ParaLlevar';
import { TartasYmas } from '../componentes/home/TartasYmas';

export default function Home() {


    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center '>
                <Nav.Link as={NavLink} to="/menuespañol">
                    <button className="boton-artesanal-cel px-4" >MENU ESPAÑOL</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/menuingles">
                    <button className="boton-artesanal-cel px-4" >MENU INGLES</button>
                </Nav.Link>
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
        </>
    )
}
