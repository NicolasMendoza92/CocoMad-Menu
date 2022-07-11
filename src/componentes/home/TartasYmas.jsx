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
                            Pequeña (6/8 porciones)... 18€ <br /> Mediana (8/10 porciones)... 24€ <br /> Grande (14/16) porciones... 32€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <div>
                Nota: Las Tartas para llevar son sujetas a Stock, realiza tu pedido con anticipación.
            </div>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image5} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">EMPANADAS</Card.Title>
                        <Card.Title>de "La Zambita"</Card.Title>
                        <Card.Text className="oracion-card">
                            1 unidad...2.50€ <br /> Media docena...13€ <br /> Docena...25€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </div>

    )
}