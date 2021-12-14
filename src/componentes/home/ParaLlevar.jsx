import "./cardHome.css"
import React from 'react'
import { Card } from 'react-bootstrap'

export const ParaLlevar = () => {

    const cardsHome = {
        image1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637520795/cocoMAD/IMG_3185_mfmu6m.jpg",
        image2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154677/cocoMAD/conito_f8eygf.jpg",
        image3: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637682094/cocoMAD/_MG_5488_fnwcaa.png",
    }

    return (

        <div className="m-auto row  d-flex flex-column justify-content-between">
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image1} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">CLASICOS</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 1.20€ <br /> Caja x 6... 6.80€ <br /> Caja x 12... 12.50€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image2} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">PREMIUM</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 1.50€ <br /> Caja x 6... 8.50€ <br /> Caja x 12... 16.50€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <div>
                Nota: El sabor del baño de chocolate (blanco o de leche) es sujeto a stock!
            </div>
        </div>

    )
}
