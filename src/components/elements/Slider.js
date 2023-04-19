import React, { useState } from 'react';

const Slide = ({ field, onChange }) => {
  const { field_id, field_label, field_value } = field;
  const [currentValue, setCurrentValue] = useState(field_value);

  const handleOnChange = (event) => {
    setCurrentValue(event.target.value);
    onChange(event, field);
  };

  return (
    <div className="form-group">
      <label htmlFor={field_id}>{field_label}</label>
      <p>Current Value: <output>{currentValue}</output></p>
      <input
        id={field_id}
        type="range"
        min="0"
        max="100"
        step="1"
        value={currentValue}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Slide;
