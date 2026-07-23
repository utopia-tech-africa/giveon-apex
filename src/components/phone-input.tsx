"use client";

import {
  PhoneInput as InternationalPhoneInput,
  type CountryIso2,
} from "react-international-phone";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";

type PhoneInputProps = {
  value?: string;
  onChange?: (phone: string) => void;
  onBlur?: () => void;
  name?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  defaultCountry?: CountryIso2;
};

const PhoneInput = ({
  value = "",
  onChange,
  onBlur,
  name = "phone",
  required,
  placeholder = "Phone number",
  className,
  defaultCountry = "gh",
}: PhoneInputProps) => {
  return (
    <InternationalPhoneInput
      defaultCountry={defaultCountry}
      value={value}
      onChange={(phone) => onChange?.(phone)}
      onBlur={onBlur}
      name={name}
      required={required}
      placeholder={placeholder}
      preferredCountries={["gh", "ng", "ke", "za", "gb", "us"]}
      className={cn("apex-phone-input", className)}
      countrySelectorStyleProps={{
        buttonClassName: "apex-phone-input__selector",
        dropdownStyleProps: {
          className: "apex-phone-input__dropdown",
          listItemClassName: "apex-phone-input__dropdown-item",
        },
      }}
    />
  );
};

export default PhoneInput;
