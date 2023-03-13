import React from 'react';
import '../css/component/widgetLg.css'


function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Sell Board</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTh">Quantiy</th>
          <th className="widgetLgTh">Price</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">267</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Paddy Rice (SPRL)</span>
          </td>
          <td className="widgetLgDate">353</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Maize (SMAZ)</span>
          </td>
          <td className="widgetLgDate">2035</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Sorghum (SSGM)</span>
          </td>
          <td className="widgetLgDate">353</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">353</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Soya Beans (SSBS)</span>
          </td>
          <td className="widgetLgDate">353</td>
          <td className="widgetLgAmount">6,471.39</td>
          <td className="widgetLgStatus">
            <Button type="Sell" />
          </td>
        </tr>

      </table>
    </div>
  );
}

export default WidgetLg;