import React from "react";

const Select = React.forwardRef(({ options = [], className = "", ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`w-full px-3 cursor-pointer py-2 border  rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${className}`}
      {...props}
    >
      <option value="">Select a product</option>
      {options.map((option, index) => (
        <option className="bg-amber-100 p-2 " value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";

export default Select;
