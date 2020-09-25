import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

import "../Card.css";
function Cards({
  img,
  type,
  per,
  num,
  cashback,
  btnTxt,
  includesTxt,
  spotsLeft,
  spots,
  offerTxt,
  offer,
  metal,
  premium,
  basic,
  takenSpots,
}) {
  return (
    <div
      className={`card ${metal ? "display" : ""} ${premium ? "display" : ""} ${
        basic ? "display" : ""
      }`}
    >
      <img src={img} alt="" />
      <div className="head">
        <p>{type}</p>
        <h1>
          {per} <span className="a">{num}</span>
        </h1>
        <div className="cashBack">
          <p>
            <span className="per">{cashback}</span>cash back
          </p>
        </div>
      </div>
      <div className="villian">
        <div className="signup">
          <div className="spots">
            <p>
              <span className="takenSpot">{takenSpots}</span> {spots}
              <span>spots</span>
            </p>
            <p>
              {spotsLeft} <span>spots left</span>
            </p>
          </div>
          <div className="hrDown">
            <div className="hrUp"></div>
          </div>
          {/* <hr className="hrDown" /> */}
          <button>{btnTxt}</button>
        </div>
        <hr />
        <div className="includes">
          <p className="title">INCLUDES</p>
          <ul>
            <li>
              <span>
                <CheckIcon className="tick" />
              </span>
              Charcoal Black Metal Card
            </li>
            <li>
              <span>
                <CheckIcon className="tick" />
              </span>
              2.15%1 Bonus Rate Checking Account
            </li>
            <li>
              <span>
                <CheckIcon className="tick" />
              </span>
              5% Cash back on brands you love
            </li>
            <li>
              <span>
                <CheckIcon className="tick" />
              </span>
              Free Cash Withdrawals
            </li>
            <li>
              <span>
                <CheckIcon className="tick" />
              </span>
              Phone & Chat Support
            </li>
          </ul>
          <p>{includesTxt}</p>
        </div>
      </div>

      <div className="spider">
        <div className="offer">
          <MonetizationOnOutlinedIcon />
          <div className="offerdetails">
            <p>{offerTxt}</p>
            <h5>{offer}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
