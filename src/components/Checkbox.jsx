import { useState } from 'react';
import '../styles/CheckboxList.scss'; // Import the SCSS file for styling

export function CheckboxList({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="checkbox-list">
      {options.map((option) => (
        <label key={option} className="checkbox-label">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxList;





