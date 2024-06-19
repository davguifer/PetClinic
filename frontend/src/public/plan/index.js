import React from "react";
import { BsDot, BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaCheck, FaPaperPlane,FaPen,FaPiggyBank,FaParachuteBox, FaTimes } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import "../../static/css/pricing/pricingPage.css";

export default function PlanList() {
  
    return (
      <div className="pricing-page-container">
        <div>
          <h1 className="pricing-title">Pricing Plans</h1>
        </div>
        <div className="section-pricing">
          <div className="pricing-container">
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                  <FaParachuteBox color="white" />
                </div>
                <h2>BASIC</h2>
              </div>
              <div className="plan-price">
                <h4>FREE</h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 2 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 1 visit per month and pet
                  </li>
                  <li>
                    <FaTimes color="red" /> No support service
                  </li>                 
                  <li>
                    <FaTimes color="red" /> Pet Hotel
                  </li>
                  <li>
                    <FaTimes color="red" /> Adoptions
                  </li>
                  <li>
                    <FaTimes color="red" /> Online Consultation
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col one */}
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                <FaPen color="white" />
                </div>
                <h2>GOLD</h2>
              </div>
              <div className="plan-price">
                <h4>25</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 4 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 3 visit per month and pet
                  </li>
                  <li>
                    <BsDot color="white" /> Medium support priority
                  </li>                  
                  <li>
                    <FaCheck color="green" /> Pet Hotel
                  </li>
                  <li>
                    <FaCheck color="green" /> Adoptions
                  </li>
                  <li>
                    <FaTimes color="red" /> Online Consultation
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col two */}
            <div className="pricing-card text-center">
              <div className="title" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="icon">
                  <FaPiggyBank color="white" />
                </div>
                <h2>PLATINUM</h2>
              </div>
              <div className="plan-price">
                <h4>50</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 7 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 6 visit per month and pet
                  </li>
                  <li>
                    <BsDot color="white" /> High support priority
                  </li>                  
                  <li>
                    <FaCheck color="green" /> Pet Hotel
                  </li>
                  <li>
                    <FaCheck color="green" /> Adoptions
                  </li>
                  <li>
                    <FaCheck color="green" /> Online Consultation
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col three */}
          </div>
        </div>
      </div>
    );
  }
