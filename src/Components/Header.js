import React from 'react';
import '../Components/compStyle.css';


function Header() {

  return (
    <>
        <nav>
            <div id="navbar" className="conatiner">
                <div className="logo">
                    <img src="./Photo/logo.png" alt="logo" />
                    <h5 style={{margin:'70px 0 0 -40px'}}>DPort</h5>                    
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Teams</li>
                    </ul>
                </div>
                <div className="button">
                    <button type='button'>Get early access</button>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Header;
