// components/Tab/Tab.jsx
import React, { useState } from 'react';
import Color from '../Color/Color';
import Style from './Tab.module.css';

function Tab({ tab, setTabs }) {
  const [text, setText] = useState(tab.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    const updatedTab = { ...tab, text };
    const response = await fetch(`http://localhost:8081/tabs/${tab.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTab),
    });
    const data = await response.json();
    setTabs((prevTabs) => prevTabs.map((t) => (t.id === data.id ? data : t)));
    setIsEditing(false);
  };

  const handleColorChange = async (newColor) => {
    const updatedTab = { ...tab, color: newColor };
    const response = await fetch(`http://localhost:8081/tabs/${tab.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ color: newColor }),
    });
    const data = await response.json();
    setTabs((prevTabs) => prevTabs.map((t) => (t.id === data.id ? data : t)));
  };

  return (
    <div className={Style.tab} style={{ backgroundColor: tab.color }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <div onDoubleClick={() => setIsEditing(true)}>
          {tab.text}
        </div>
      )}
      <Color onColorChange={handleColorChange} />
    </div>
  );
}

export default Tab;
