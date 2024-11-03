// components/Tabs/Tabs.jsx
import React from 'react';
import Tab from '../Tab/Tab';
import Style from './Tabs.module.css';

function Tabs({ tabs, setTabs }) {
  const rows = [];
  const columnsPerRow = 3; // Set the number of columns per row

  for (let i = 0; i < tabs.length; i += columnsPerRow) {
    rows.push(tabs.slice(i, i + columnsPerRow));
  }

  return (
    <div className={Style.tabsTableContainer}>
      <table className={Style.tabsTable}>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((tab) => (
                <td key={tab.id} className={Style.tabsTableCell}>
                  <Tab tab={tab} setTabs={setTabs} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabs;
