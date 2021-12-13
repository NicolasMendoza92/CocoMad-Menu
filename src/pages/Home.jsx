import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CardHome } from '../componentes/home/CardHome';

export default function Home() {

    const cardsHome = [
        {
            image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
            title: "ALFAJORES CLASICOS",
            sentence: "6 x $13.5 ó 12 x $16.50",
        },
        {
            image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg",
            title: "ALFAJORES PREMIUM",
            sentence: "IDEAL PARA REUNIONES Y FESTEJOS",
        },
        {
            image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154689/cocoMAD/feca_qdmavt.jpg",
            title: "COCO CAFECITO",
            sentence: "ESPECIALES PARA ACOMPAÑAR CUALQUIERA DE NUESTROS COCO DULCES",
        }
    ]

    const mapCardsHome = cardsHome.map((cardsHome, index) => <CardHome key={index} cardsHome={cardsHome} />);

    return (
        <>
            <div className='d-flex '>
                <Nav.Link as={NavLink} to="/menuespañol">
                    <button className="boton-artesanal-cel px-4" >MENU ESPAÑOL</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/menuespañol">
                    <button className="boton-artesanal-cel px-4" >MENU INGLES</button>
                </Nav.Link>
            </div>
            <div className="tarjetas d-flex flex-column justify-content-center align-items-center mb-2">
                <h3 className='p-2'>CONOCE LAS PROMO!</h3>
                <p className='mb-0'>Disfruta de los mejores alfajores!</p>
            </div>
            <Container>
                <div className="m-auto row">
                    <div className="col-12 col-lg-8 ">
                        {mapCardsHome[0]}
                    </div>
                    <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
                        {mapCardsHome[1]}
                        {mapCardsHome[2]}
                    </div>
                </div>
            </Container>
        </>
    )
}
