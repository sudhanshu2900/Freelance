import React from 'react';
import '../About-Us/AboutUsStyle.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineLinkedin } from 'react-icons/ai';


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
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile5.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Jason</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>Founder</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile1.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Chanise</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>Co-Founder</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile2.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Rosalina</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>CFO</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile3.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Mark</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>Design Lead</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile4.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Melina</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>Co-Founder</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ourCard' className="col-lg-4 col-md-4 col-sm-12">
                    <div className="flipCard">
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src='./Photo/Profile5.png' alt='profile' style={{width:'180px',height:'180px', borderRadius:'50%', marginTop:'40px'}} />
                                <p style={{paddingTop:'20px',fontSize: '22px'}}>Rodney</p>
                                <p style={{color:'#C8D8E4', fontSize: '22px'}}>Marketing Head</p>
                            </div>
                            <div className="flipCardBack"> 
                                <p>Far far away, behind the word mountains,<br/> far from the countries Vokalia and<br/> Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove<br/> right at the coast of the Semantics</p> 
                                <div className="socialIcons">
                                    <AiFillFacebook size={35}/>
                                    <AiFillLinkedin size={35}/>
                                    <AiFillTwitterSquare size={35}/>
                                </div>
                            </div>
                        </div>
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
                <p style={{paddingBottom:'35px'}}>Far far away, behind the word mountains, far from the<br/> countries Vokalia he blind texts. Separated they live in<br/> Bookmarksgrove right at the coast of the Semantics</p>
                <p>Far far away, behind the word mountains, far from the<br/> countries Vokalia and Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove right at the coast of<br/> the Semantics</p>
            </div>
        </div>


        <Footer/>
    </>
  );
}

export default AboutUs2;
