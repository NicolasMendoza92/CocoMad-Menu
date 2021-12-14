import React from 'react'
import { Bebidas } from '../componentes/menuEs/Bebidas'
import { Bolleria } from '../componentes/menuEs/Bolleria'
import { Brunch } from '../componentes/menuEs/Brunch'
import { Cafeteria } from '../componentes/menuEs/Cafeteria'
import { Desayunos } from '../componentes/menuEs/Desayunos'
import { Pasteleria } from '../componentes/menuEs/Pasteleria'
import { Salado } from '../componentes/menuEs/Salado'
import { FaArrowUp } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0);
};



export default function MenuEs() {
    return (
        <div className='footer-fix'>
            <div className="d-flex justify-content-end nav-bar">
                <Link as={Link} to="/">
                    <button className="back-arrow"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425564/cocoMAD/MenuheaderEs_a8t1sl.png" alt="" className="header-menu" />
            </div>
            <Desayunos />
            <Cafeteria />
            <Pasteleria />
            <Bolleria />
            <Salado />
            <Bebidas />
            <Brunch />
            <div div className="mt-auto footer-menu">
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639500436/cocoMAD/menufooter_jqnzxo.png" alt="" className="header-menu" />
            </div>
            <div className="d-flex align-items-center justify-content-between botom-footer">
                <button onClick={scrollToTop} className="volverArriba mx-1"> <FaArrowUp /> </button>
                <Link as={Link} to="/">
                    <button className="back-arrow  mx-1"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
        </div>
    )
}
