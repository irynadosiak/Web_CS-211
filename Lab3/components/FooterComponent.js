import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="myFooter">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3 offset-1 col-sm-2">
                    <ul className="list-unstyled">
                        <li><Link to='/index'>HOME</Link></li>
                        <li><Link to='/books'>BOOK</Link></li>
                        <li><Link to='/mylibrary'>MY LIBRARY</Link></li>
                    </ul>
                </div>
                <div className="col-3 offset-1 col-sm-2">
					<p>+380962770798</p>
					<p>Consultation</p>
                </div>
                <div className="col-3 offset-1 col-sm-2">
					<p>Book@gmail.com</p>
					<p>E-Mail</p>
                </div>
                <div className="col-3 offset-1 col-sm-2">
					<p>Privacy policy</p>
					<p>© SpaceBook</p>
                </div>				
            </div>
        </div>
    </div>
    )
}

export default Footer;