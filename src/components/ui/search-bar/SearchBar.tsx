import type { ChangeEvent, InputHTMLAttributes } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  className?: string;
  inputClassName?: string;
  onSearchChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type" | "onChange">;

export default function SearchBar({
  className = "",
  inputClassName = "",
  onSearchChange,
  placeholder = "Search",
  "aria-label": ariaLabel = "Search",
  ...inputProps
}: SearchBarProps) {
  const classes = ["search-bar", className].filter(Boolean).join(" ");
  const inputClasses = ["search-bar__input", inputClassName].filter(Boolean).join(" ");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value, event);
  };

  return (
    <label className={classes}>
      <span className="search-bar__icon" aria-hidden="true" />
      <input
        {...inputProps}
        type="search"
        aria-label={ariaLabel}
        placeholder={placeholder}
        className={inputClasses}
        onChange={handleChange}
      />
    </label>
  );
}
