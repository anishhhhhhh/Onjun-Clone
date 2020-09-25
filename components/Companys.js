import React from "react";
import "../Company.css";
function Companys() {
  return (
    <div className="Companys">
      <p>BACKED BY THE BEST</p>
      <div className="row">
        <div className="col-md-4 img1">
          <img src="Images/sequioa.png" alt="" />
        </div>
        <div className="col-md-4 img2">
          <img src="Images/polychain.png" alt="" />
        </div>
        <div className="col-md-4 img2">
          <img src="Images/consensys.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Companys;
