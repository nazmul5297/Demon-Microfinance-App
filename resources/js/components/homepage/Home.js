import React from 'react'
import './home.css';
import logo1 from './microfinance1.jpg';
import logo2 from './microfinance2.jpg';
import logo3 from './microfinance3.jpeg';
import Header from './Header';
import Footer from './Footer';
export default function () {
  let myStyle = {
    minHeight: "80vh"
  }
  return (
    <div>
      <Header />

      <div style={myStyle}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={logo3} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={logo2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={logo1} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}
