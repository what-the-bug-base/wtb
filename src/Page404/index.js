import React from 'react'
import "./styles.css"

export default function Page404(){
    return(
        <div className="page-404-cont">
            <div className="page-404-cont-inner">
                <img className='img404' src="/dev-icon.gif">

                </img>
                <p>OOPS! 404 Page not found</p>
                <p><strong>You may not be able to find the page you were after because of:</strong></p>
			<ol type="a">
			<li>An <strong>out-of-date bookmark/favorite</strong></li>
			<li>A search engine that has an <strong>out-of-date listing for us</strong></li>
			<li>A <strong>mis-typed address or page</strong></li>
			</ol>
            </div>
            <div className='footer-404'>

    <p>EinsBoard.All Rights reserved.</p>
            </div>
        </div>
    )
}