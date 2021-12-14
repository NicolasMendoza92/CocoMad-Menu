import React from 'react'
import { Accordion } from 'react-bootstrap';

export const Pasteleria = () => {
    return (
        <Accordion className='acordion-menu'>
            <Accordion.Item className='menu-button1' eventKey="0">
                <Accordion.Header>PASTELERIA</Accordion.Header>
                <Accordion.Body className='d-flex align-items-center justify-content-center m-2'>
                   <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425564/cocoMAD/pasteleria_Es_mraftn.png" alt=""/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}