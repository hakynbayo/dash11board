import '../css/component/featuredInfo.css';
import chart1 from "../assets/images/Line.svg";
import chart11 from "../assets/images/dec11.svg";
import chart2 from "../assets/images/Line (1).svg";
import chart22 from "../assets/images/dec22.svg";
import chart33 from "../assets/images/Fill.svg";
import chart3 from "../assets/images/Line (2).svg";
import React from 'react';

function FeaturedInfo() {
  const Button = ({ type }: { type: string }) => {
    return <button className={"featuredButton " + type}>{type}</button>;
  };


  return (
    <>

        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Cash Balance</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">₦8, 374, 763</span>
              <span className="featuredMoneyRate">
                <img className="featuredIcon" src={chart1} alt="decrement" />
                <img className="featuredIcon" src={chart11} alt="decrement" />
              </span>
            </div>
            <Button type="Declined" />
            <span className="featuredSub">Monitored Monthly</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Securities Value</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">₦8, 374, 763</span>
              <span className="featuredMoneyRate">
                <img className="featuredIcon" src={chart2} alt="decrement" />
                <img className="featuredIcon" src={chart22} alt="decrement" />
              </span>
            </div>
            <Button type="Declined" />
            <span className="featuredSub">Monitored Monthly</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Loan Balance</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">N8, 374, 763</span>
              <span className="featuredMoneyRate">
                <img className="featuredIcon" src={chart3} alt="increment" />
                <img className="featuredIcon" src={chart33} alt="increment" />
              </span>
            </div>
            <Button type="Increment" />
            <span className="featuredSub">Monitored Monthly</span>
          </div>
        </div>
    </>
  );
}

export default FeaturedInfo;


