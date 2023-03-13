import '../css/component/widgetLg3.css'
import '../css/component/widgetLg.css'
import React from 'react';



function WidgetLg3() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg3">
      <h3 className="widgetLgTitle">Trade Log</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Security</th>
          <th className="widgetLgTh">Board</th>
          <th className="widgetLgTh">Order Type</th>
          <th className="widgetLgTh">Matched Price</th>
          <th className="widgetLgTh">Quantity</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Time</th>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg3;