import React from "react";
import "../Percentage.css";
function Percentage() {
  return (
    <div className="Percentage">
      <div className="row flex-column-reverse flex-md-row">
        <div className="details col-md-7 ">
          <h5>Start saving for a rainy day fund</h5>
          <h1>Use Our Checking Account to Achieve Your Financial Goals</h1>
          <br />

          <p>
            With the latest Federal rate cut, the largest banks are offering
            close to 0% APY on their checking and savings accounts. OnJuno
            checking will earn you more than 20x the national average*. Deposits
            up to $250,000 are FDIC insured through our partner bank. Grow your
            idle money faster with our checking account and start saving towards
            a rainy day fund, big expense, or vacation.
          </p>
        </div>
        <div className="detailsImg col-md-5 ">
          <img src="Images/Percentage.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Percentage;
