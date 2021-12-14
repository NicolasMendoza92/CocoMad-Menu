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
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639508972/cocoMAD/parte1_bnlqyu.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639508972/cocoMAD/parte2_jjgawa.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639508972/cocoMAD/parte3_gyssui.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639508972/cocoMAD/parte4_tptxbz.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639508972/cocoMAD/parte5_szgflz.png" alt="" className="header-menu" />
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