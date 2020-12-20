import * as React from "react";

// markup
const Switch = (props) => {
  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        onChange={(e) => {
          props.onChange && props.onChange(e.target.checked);
        }}
        type="checkbox"
        name={props.name}
        id={props.name}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-transparent-100 appearance-none cursor-pointer transition-transform duration-200 ease-in"
      />
      <label
        htmlFor={props.name}
        className="toggle-label block overflow-hidden h-6 rounded-full bg-transparent-100 cursor-pointer"
      ></label>
    </div>
  );
};

export default Switch;
