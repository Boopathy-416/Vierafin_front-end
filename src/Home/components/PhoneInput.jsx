import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import Button from "./ui/Button";
import Input from "./ui/Input";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+86", country: "China" },
  { code: "+49", country: "Germany" },
];

export default function PhoneInput({
  value = "",
  onChange = () => {}, // safe default
  className = "",
  defaultCode = "+91",
}) {
  const [selectedCode, setSelectedCode] = useState(defaultCode);
  const [localNumber, setLocalNumber] = useState("");

  useEffect(() => {
    if (!value) return;

    const matched = countryCodes.find(({ code }) => value.startsWith(code));
    if (matched) {
      setSelectedCode(matched.code);
      setLocalNumber(value.replace(matched.code, ""));
    } else {
      setLocalNumber(value);
    }
  }, [value]);

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10); // Limit to 10 digits
    setLocalNumber(onlyDigits);
    onChange(`${selectedCode}${onlyDigits}`);
  };

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
    onChange(`${code}${localNumber}`);
  };

  return (
    <div className={`flex ${className}`}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            type="button"
            className="flex items-center gap-1 rounded-r-none border-r-0 w-[80px] px-2 py-1"
          >
            <span>{selectedCode}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <div className="max-h-[300px] overflow-auto">
            {countryCodes.map((item) => (
              <div
                key={item.code}
                onClick={() => handleCodeSelect(item.code)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <span className="font-medium mr-2">{item.code}</span>
                <span className="text-sm text-gray-600">{item.country}</span>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Input
        type="tel"
        value={localNumber}
        onChange={handlePhoneChange}
        className="rounded-l-none px-3 py-2"
        placeholder="Enter your mobile number"
      />
    </div>
  );
}
