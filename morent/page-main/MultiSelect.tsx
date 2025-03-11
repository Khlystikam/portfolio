import React from "react";

interface SelectData {
  name: string;
  id: string;
  labelName: string;
  options: { value: string; label: string }[];
}

interface MultiSelectProps {
  data: SelectData[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ data }) => {
  return (
    <div className="select-pick-up">
      {data.map((select, index) => (
        <div key={index} className="select-item">
          <label className="label-select" htmlFor={select.id}>{select.labelName}</label>
          <select name={select.name} id={select.id}>
            {select.options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {index < data.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;