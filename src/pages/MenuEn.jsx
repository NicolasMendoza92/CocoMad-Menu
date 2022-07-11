import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default function MenuEn() {
    return (
        <div className='footer-fix'>
             <div className="d-flex justify-content-end nav-bar">
                <Link as={Link} to="/">
                    <button className="back-arrow"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519667/cocoMAD/Menu/parte_1_verano_s8h9hr.png" alt="" className="header-menu" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519667/cocoMAD/Menu/parte_2_verano_i557ux.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519668/cocoMAD/Menu/parte_3_verano_wjq97g.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519668/cocoMAD/Menu/header_menu_verano_rmpxij.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519970/cocoMAD/Menu/header_middle_verano_iuzrkw.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1657530965/cocoMAD/Menu/parte_4_verano_hq4rdw.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1652519667/cocoMAD/Menu/parte_5_verano_itflez.png" alt="" className="header-menu" />
            </div>
            <div div className="mt-auto footer-menu">
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1657530965/cocoMAD/Menu/parte_6_verano_bnszsl.png" alt="" className="header-menu" />
            </div>
            <div className="d-flex align-items-center justify-content-between botom-footer">
                <button onClick={scrollToTop} className="volverArriba mx-1"> <FaArrowUp /> </button>
                <Link as={Link} to="/">
                    <button className="back-arrow mx-1"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
        </div>
    )
}