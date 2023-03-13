import React from "react";
import "../css/component/FeaturedSubHead.css";

function FeaturedSubHead() {
  return (
    <div className="featured3">
      <ul className="featlist">
        <li className="featlist2">Product View </li>
        <li className="featlist2">Order Book</li>
        <li className="featlist2">Price History</li>
        <li className="featlist2">
          Open Orders
           
            <button className="libtn">20</button>
        </li>
        <li className="featlist2">
          Closed Trades
          
            
            <button className="libtn">20</button>
          
        </li>
        <li className="featlist2">
          Cancelled Orders
          
            
            <button className="libtn">20</button>
          
        </li>
      </ul>
    </div>
  );
}

export default FeaturedSubHead;
