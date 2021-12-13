import "./cardHome.css"
import React from 'react'
import { Card} from 'react-bootstrap'

export const CardHome = ({ cardsHome }) => {
    const { image, title, sentence } = cardsHome;
    return (
                <Card className="bg-dark text-white mb-2 card-home">
                    <Card.Img src={image} alt="Card image" />
                    <Card.ImgOverlay  className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                        <div className="glass-card">
                        <Card.Title className="titulo-card-home">{title}</Card.Title>
                        <Card.Text className="oracion-card">
                          {sentence}
                        </Card.Text>
                        </div>                    
                    </Card.ImgOverlay>
                </Card>
    )
}
