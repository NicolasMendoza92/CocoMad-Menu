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
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425564/cocoMAD/MenuheaderEs_a8t1sl.png" alt="" className="header-menu" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647779208/cocoMAD/Menu/parte1_udxrwr.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647860329/cocoMAD/Menu/parte2_u6bwae.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647779208/cocoMAD/Menu/parte3_xtvvg2.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647779475/cocoMAD/Menu/footer_middle_ltwsm9.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647779208/cocoMAD/Menu/parte4_fxrclx.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647779208/cocoMAD/Menu/parte5_dvupgh.png" alt="" className="header-menu" />
            </div>
            <div div className="mt-auto footer-menu">
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639500436/cocoMAD/menufooter_jqnzxo.png" alt="" className="header-menu" />
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