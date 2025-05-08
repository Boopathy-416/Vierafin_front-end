

import React from "react";

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-2 py-1 border-2  border-gray-600 text-red-700 rounded-sm  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button; // Ensure default export
