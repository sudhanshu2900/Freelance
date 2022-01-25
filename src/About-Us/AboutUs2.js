import React from 'react';
import '../About-Us/style.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function AboutUs2() {
  return (
    <>
        <Header />

        <div className="upperPart">
            <div className="container">
                <div id='midDiv' className="row">
                    <div id='imgDiv1' className="col-lg-4 col-md-4 col-sm-12">
                        <img id='pic' src='./Photo/AboutusPhoto4.png' alt=''/>
                        <img id='dot' src='./Photo/AboutusPhoto2.png' style={{marginLeft:'140px', marginTop:'-70px'}} alt=''/>
                    </div>
                    <div id='contDiv' className="col-lg-5 col-md-5 col-sm-12">
                        <h1>Our Team</h1>
                        <p>Far far away, behind the word mountains, far from the countries<br/> Vokalia and Consonantia, there live the blind texts. Separated they<br/> live in Bookmarksgrove right at the coast of the Semantics</p>
                    </div>
                    <div id='imgDiv2' className="col-lg-3 col-md-3 col-sm-12">
                        <img src='./Photo/AboutusPhoto5.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>


        <div id='profile' className="container">
            <div id='profileCards' className="row">
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile5.png' alt='profilePic' />
                        <p>Jason</p>
                        <p id='designation'>Founder</p>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile1.png' alt='profilePic' />
                        <p>Chanise</p>
                        <p id='designation'>Co-Founder</p>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile2.png' alt='profilePic' />
                        <p>Rosalina</p>
                        <p id='designation'>CFO</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile3.png' alt='profilePic' />
                        <p>Mark</p>
                        <p id='designation'>Design Lead</p>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile4.png' alt='profilePic' />
                        <p>Melina</p>
                        <p id='designation'>Co-Founder</p>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="mycard">
                        <img src='./Photo/Profile5.png' alt='profilePic' />
                        <p>Rodney</p>
                        <p id='designation'>Marketing Head</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lowerPart">
            <div className="infoCard">
                <div className="iconDiv">
                    <img src='./Photo/Work.png' alt='workIcon' width={'50px'}/>
                </div>
                <h1>Who we are</h1>
                <p style={{paddingBottom:'30px'}}>Far far away, behind the word mountains, far from the<br/> countries Vokalia he blind texts. Separated they live in<br/> Bookmarksgrove right at the coast of the Semantics</p>
                <p>Far far away, behind the word mountains, far from the<br/> countries Vokalia and Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove right at the coast of<br/> the Semantics</p>
            </div>
        </div>


        <Footer/>
    </>
  );
}

export default AboutUs2;
