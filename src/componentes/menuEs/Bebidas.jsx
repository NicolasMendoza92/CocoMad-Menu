import React from 'react'
import { Accordion } from 'react-bootstrap';

export const Bebidas = () => {
    return (
        <Accordion className='acordion-menu'>
            <Accordion.Item className='menu-button2' eventKey="0">
                <Accordion.Header>BEBIDAS</Accordion.Header>
                <Accordion.Body className='d-flex align-items-center justify-content-center m-2'>
                   <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425563/cocoMAD/Bebidas_Es_e5jcvp.png" alt=""/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}