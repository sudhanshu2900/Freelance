import React from 'react';
import '../Components/compStyle.css';

function Footer() {
  return (
    <>
        <div id='footerCont' className="container">
            <div id='firstDiv' className="row">

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div id='bottomLogo' className="row">
                      <img src="./Photo/logo.png" alt="logo" style={{height:'50px', width:'80px'}} />
                      <h5>DPort</h5>                  
                  </div>
                  <div id='text' className="row">
                    <p>DPort is a team of highly talented<br/> professionals from all across the globe</p>
                  </div>
                </div>

                <div id='middleMenu' className="col-lg-4 col-md-4 col-sm-12">
                  <div id="firstCol" >
                    <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>How it Works</li>
                    </ul>
                  </div>
                  <div id="secondCol" >
                    <ul>
                      <li>Our Services</li>
                      <li>Contact Us</li>
                      <li>FAQ</li>
                    </ul>
                  </div>
                  <div id="thirdCol" >
                    <ul>
                      <li>Our Teams</li>
                      <li>Careers</li>
                      <li></li>
                    </ul>
                  </div>
                </div>

                <div id='socialLogo' className="col-lg-4 col-md-4 col-sm-12">
                  <ul>
                    <li><img src="https://img.icons8.com/color/30/000000/facebook.png" alt='facebook'/></li>
                    <li><img src="https://img.icons8.com/color/30/000000/instagram-new--v1.png" alt='instagram'/></li>
                    <li><img src="https://img.icons8.com/color/31/000000/twitter--v1.png" alt='twitter'/></li>
                  </ul>
                </div>

                
            </div>

            <div id='secondDiv' className="row">
              <div className="col-lg-6 col-md-6 col-sm-12"><p>&copy; 2022 DPort</p></div>
              <div id='lastList' className="col-lg-6 col-md-6 col-sm-12">
                <ul>
                  <li>Help</li>
                  <li>Term & Conditions</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
        </div>
    </>
  );
}

export default Footer;
