import "./cardHome.css"
import React from 'react'
import { Card } from 'react-bootstrap'

export const TartasYmas = () => {

    const cardsHome = {
        image4: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg",
        image5: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154684/cocoMAD/empanadas_qbak6f.jpg",
        image6: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639419862/cocoMAD/eventos_qclznf.jpg",
    }

    return (

        <div className="m-auto row  d-flex flex-column justify-content-between">

                <Card className="bg-none text-white mb-2 card-home">
                    <Card.Img src={cardsHome.image4} alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                        <div className="glass-card">
                            <Card.Title className="titulo-card-home">TARTAS</Card.Title>
                            <Card.Text className="oracion-card">

                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-none text-white mb-2 card-home">
                    <Card.Img src={cardsHome.image5} alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                        <div className="glass-card">
                            <Card.Title className="titulo-card-home">EMPANADAS</Card.Title>
                            <Card.Text className="oracion-card">

                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

    )
}