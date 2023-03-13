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
            <span className="widgetLgName">Paddy Rice (SPRL)</span>
          </td>
          <td className="widgetLgDate">X-Traded</td>
          <td className="widgetLgAmount">Sell</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">X-Traded</td>
          <td className="widgetLgAmount">Sell</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">86</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Maize (SMAZ)</span>
          </td>
          <td className="widgetLgDate">OTC</td>
          <td className="widgetLgAmount">Buy</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Sorghum (SSGM)</span>
          </td>
          <td className="widgetLgDate">FI</td>
          <td className="widgetLgAmount">Buy</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Fair Trade ETC (FETC)</span>
          </td>
          <td className="widgetLgDate">FI</td>
          <td className="widgetLgAmount">Buy</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">X-Traded</td>
          <td className="widgetLgAmount">Sell</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">Derivates</td>
          <td className="widgetLgAmount">Sell</td>
          <td className="widgetLgDate">1795.65</td>
          <td className="widgetLgAmount">2003</td>
          <td className="widgetLgDate">17 Oct 2020</td>
          <td className="widgetLgStatus">
            07:38
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg3;