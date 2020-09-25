import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeaderRight from "./components/HeaderRight";
import HeaderLeft from "./components/HeaderLeft";
import Companys from "./components/Companys";
import Percentage from "./components/Percentage";
import Card from "./components/Card";

function App() {
  const [metal, setMetal] = useState(true);
  const [premium, setPremium] = useState(false);
  const [basic, setBasic] = useState(false);

  const metalHandler = (e) => {
    if (metal === false) {
      if (premium === true) {
        setPremium(!premium);
      } else if (basic === true) {
        setBasic(!basic);
      }
      setMetal(!metal);
    } else {
      return;
    }
  };
  const premiumHandler = (e) => {
    if (premium === false) {
      if (metal === true) {
        setMetal(!metal);
      } else if (basic === true) {
        setBasic(!basic);
      }
      setPremium(!premium);
    } else {
      return;
    }
  };
  const basicHandler = (e) => {
    if (basic === false) {
      if (metal === true) {
        setMetal(!metal);
      } else if (premium === true) {
        setPremium(!premium);
      }
      setBasic(!basic);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <div className="row">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </div>
      <Companys />
      <Percentage />
      <div className="aboveCards">
        <h1>Sign up early to save more</h1>
        <p>
          Depending on the level of your checking account, you’ll earn between
          1.15%3 to 2.15%1 bonus rate.
        </p>
        <div className="selectType">
          <p onClick={metalHandler} className={`${metal && "active"}`}>
            METAL
          </p>
          <p onClick={premiumHandler} className={`${premium && "active"}`}>
            PREMIUM
          </p>
          <p onClick={basicHandler} className={`${basic && "active"}`}>
            BASIC
          </p>
        </div>
      </div>

      <div className="cards">
        <Card
          img="Images/card1.png"
          type="METAL"
          per="2.15%"
          num="1"
          cashback="5%"
          takenSpots="2219"
          spots="/2500"
          spotsLeft="282"
          btnTxt="Sign Up Now"
          includesTxt="Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs."
          offerTxt="$11.99/m Membership Fee"
          offer="Free for 6 months"
          metal={metal}
        />
        <Card
          img="Images/card2.png"
          type="PREMIUM"
          per="1.65%"
          num="2"
          cashback="4%"
          spots="2000"
          spotsLeft="2000"
          btnTxt="Up Next"
          includesTxt="Fund your account with a minimum opening deposit of $500. 2 additional free ATM withdrawals per month from out of network ATMs."
          offerTxt="$6.99/m Membership Fee"
          offer="Coming Soon"
          premium={premium}
        />
        <Card
          img="Images/card3.png"
          type="BASIC"
          per="1.15%"
          num="3"
          cashback="3%"
          spots="10000"
          spotsLeft="10000"
          btnTxt="Coming Soon"
          includesTxt="Fund your account with a minimum opening deposit of $0."
          offerTxt="No Membership Fee"
          offer="Free Forever!"
          basic={basic}
        />
      </div>
    </div>
  );
}

export default App;
