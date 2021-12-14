import React from 'react'
import { Accordion } from 'react-bootstrap';

export const Salado = () => {
    return (
        <Accordion className='acordion-menu'>
            <Accordion.Item className='menu-button1' eventKey="0">
                <Accordion.Header>LO SALADO</Accordion.Header>
                <Accordion.Body className='d-flex align-items-center justify-content-center m-2'>
                   <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425563/cocoMAD/Lo_Salado_pshsse.png" alt=""/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}