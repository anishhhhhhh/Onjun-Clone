import React from "react";
import "../HeaderLeft.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function HeaderLeft() {
  return (
    <div className="col-md-6 HeaderLeft">
      <div className="title">
        <h1>The Most Powerful Checking Account</h1>
        <br />
        <div className="titleP">
          <p>
            Our checking account gives you higher returns than a savings account
            with no hidden fees.
          </p>
          <br />
        </div>
      </div>
      <div className="hero">
        <div className="email">
          <MailOutlineIcon className="mailIcon" />
          <input type="text" placeholder="Enter Email Address" />
        </div>
        <div className="joinBtn">
          <button type="button" className="btn btn-primary">
            Join Now
          </button>
        </div>
      </div>

      <br />

      <div className="flag">
        <div className="flagImg">
          <img src="Images/flag.png" alt="" />
        </div>
        <p>283 spots left for Priority Access</p>
      </div>

      <div className="pay">
        <div className="google">
          <img src="Images/google.png" alt="" />
        </div>
        <div className="apple">
          <img src="Images/apple.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
