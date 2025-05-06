import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef(({ className = "", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`z-50 w-72 rounded-md border bg-white p-4 text-sm shadow-md outline-none ${className}`}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };