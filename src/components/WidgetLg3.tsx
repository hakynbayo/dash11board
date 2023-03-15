import "../css/component/widgetLg3.css";
import "../css/component/widgetLg.css";
import React, { useState, useEffect } from "react";

interface SecurityPrice {
  securityName: string;
  board: string;
  orderType: string;
  matchedPrice: string;
  quantity: string;
  date: string;
  time: string;
}

  


function WidgetLg3(): JSX.Element {
  const [data, setData] = useState<SecurityPrice[]>([]);

  useEffect(() => {
    fetch("https://comx-sand-api.afex.dev/api/securities/boards", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((response) => {
      manager.decrypt(response) // impure decryption
      console.log(response) // something intelligible
    });
  }, []);



  return (
    <div className="widgetLg3">
      <h3 className="widgetLgTitle3">Trade Log</h3>
      <table className="widgetLgTable3">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Security</th>
            <th className="widgetLgTh">Board</th>
            <th className="widgetLgTh">Order Type</th>
            <th className="widgetLgTh">Matched Price</th>
            <th className="widgetLgTh">Quantity</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.date + item.time} className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName3">{item.securityName}</span>
              </td>
              <td className="widgetLgDate">{item.board}</td>
              <td className="widgetLgAmount">{item.orderType}</td>
              <td className="widgetLgDate">{item.matchedPrice}</td>
              <td className="widgetLgAmount">{item.quantity}</td>
              <td className="widgetLgDate">{item.date}</td>
              <td className="widgetLgStatus">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg3;
