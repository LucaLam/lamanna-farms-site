import React from 'react'

import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <span className='arrow-container'><a href="#header"><p className="arrow">&uarr;</p></a></span>
            <div className="footer__copyright-container">
                <p className="copyright-tag">&copy; Copyright Lamanna Farms 2020</p>
            </div>
        </div>
    )
}
