import React from 'react'
import './about.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Header />
      <div className="aboutdivbg">
        <h1 id="heading">Some Special Thing about microfinance</h1>
        <div className="container2">
          <p>Microfinance, also called microcredit, is a type of banking service provided to unemployed or low-income individuals or groups who otherwise would have no other access to financial services.

            While institutions participating in the area of microfinance most often provide lending—microloans can range from as small as $100 to as large as $25,000—many banks offer additional services such as checking and savings accounts as well as micro-insurance products, and some even provide financial and business education. The goal of microfinance is to ultimately give impoverished people an opportunity to become self-sufficient.

            KEY TAKEAWAYS
            Microfinance is a banking service provided to unemployed or low-income individuals or groups who otherwise would have no other access to financial services.
            Microfinance allows people to take on reasonable small business loans safely, and in a manner that is consistent with ethical lending practices.
            The majority of microfinancing operations occur in developing nations, such as Uganda, Indonesia, Serbia, and Honduras.
            Like conventional lenders, microfinanciers charge interest on loans and institute specific repayment plans.
            The World Bank estimates that more than 500 million people have benefited from microfinance-related operations.
          </p>








        </div>

        <div className="row">
          <div className="col-lg-7">



          </div>
          <div className="col-lg-5 ">
            <div className="card pos mb-10" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Era Infotech Ltd</h6>
                <p className="card-text">Bengal Center 28,TopKhana Road,Dhaka 1000</p>
                {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
              </div>
            </div>


          </div>
        </div>




      </div>
      <Footer />


    </>
  )
}