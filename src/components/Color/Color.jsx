import React, { useState } from 'react';
import Style from './Color.module.css';

function Color({ onColorChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ['pink', 'lightblue', 'lightgreen', 'yellow', 'lightgray'];

  const handleColorSelect = (color) => {
    onColorChange(color);
    setIsOpen(false);
  };

  return (
    <div className={Style.colorPicker}>
      <button onClick={() => setIsOpen(!isOpen)}>Select Color</button>
      {isOpen && (
        <div className={Style.colorOptions}>
          {colors.map((color) => (
            <div
              key={color}
              className={Style.colorOption}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Color;
