import React from 'react';
import '../About-Us/style.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function AboutUs1() {
  return (
    <>
      <Header/>

      <div className="container">
        <div className="row">
          <div id='contentDiv' className="col-lg-6 col-md-6 col-sm-12">
            <h1>About us</h1>
            <p>Far far away, behind the word mountains, far from the countries<br/> Vokalia and Consonantia, there live the blind texts. Separated they<br/> live in Bookmarksgrove right at the coast of the Semantics</p>
          
            <h5>About us</h5>
            <h3>Discover the world<br/> of possibilities<br/> and assured returns</h3>
            <p>Far far away, behind the word mountains, far from the countries<br/> Vokalia and Consonantia, there live the blind texts. Separated they<br/> live in Bookmarksgrove right at the coast of the Semantics</p>
          </div>
          <div id='photoDiv' className="col-lg-6 col-md-6 col-sm-12">
            <img id='img1' src='./Photo/AboutusPhoto1.png' alt='img1' />
            <div id='lightColorDiv'></div>
            <div id='darkColorDiv'></div>
            <img id='img2' src='./Photo/AboutusPhoto2.png' alt='img2' />
          </div>
        </div>

        <div className="row">
          <div id='photoDiv2' className="col-lg-6 col-md-6 col-sm-12">
            <img id='img3' src='./Photo/AboutusPhoto3.png' alt='img3' />
            <div id='lightDiv'></div>
          </div>
          <div id='contentDiv2' className="col-lg-6 col-md-6 col-sm-12">
            <h5> Our process</h5>
            <h3>What we do and how<br/> we do it</h3>
            <p>Far far away, behind the word mountains, far from the countries<br/> Vokalia and Consonantia, there live the blind texts. Separated they<br/> live in Bookmarksgrove right at the coast of the Semantics</p>
            <p>Far far away, behind the word mountains, far from the countries<br/> Vokalia and Consonantia, there live the blind texts. Separated they<br/> live in Bookmarksgrove right at the coast of the Semantics</p>
          </div>
        </div>
      </div>

      <div className='bgWithText'>
        <img src='./Photo/AboutusBg.png' alt='bg'/>
        <div className="centered">
          <h5>Connect with us</h5>
          <h2>Have a query/suggestion?<br/> Let’s create something beautiful</h2>
          <button type='button'>Contact us</button>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default AboutUs1;
