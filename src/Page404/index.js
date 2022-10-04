import React from 'react'
import { Check, ExpandMore, FacebookOutlined, LinkedIn, Twitter } from "@mui/icons-material"

import "./styles.css"

export default function Page404(){
    return(
        <div className="page-404-cont">
            <div className="page-404-cont-inner">
             
                <p className='title-404'>OOPS! 404 Page not found</p>
                <p className='title2-404'><strong>You may not be able to find the page you were after because of:</strong></p>
			<ol type="a">
			<li>An <strong>out-of-date bookmark/favorite</strong></li>
			<li>A search engine that has an <strong>out-of-date listing for us</strong></li>
			<li>A <strong>mis-typed address or page</strong></li>
			</ol>

            </div>
          
        </div>
    )
}