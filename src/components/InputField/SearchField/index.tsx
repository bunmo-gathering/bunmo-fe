"use client";

import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { SearchFieldProps } from "./props.type";
import {
  searchContainerStyle,
  searchInputStyle,
  searchIconStyle,
} from "./style";

const SearchField = ({
  placeholder = "",
  onChange,
  onSearchButtonTap,
  value,
  disabled = false,
}: SearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = !!value;

  const handleContainerClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className={searchContainerStyle({
          active: isFocused || hasValue,
          disabled,
        })}
        onClick={handleContainerClick}
      >
        <input
          ref={inputRef}
          type="search"
          className={searchInputStyle({ hasValue, disabled })}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button className="cursor-pointer" onClick={onSearchButtonTap}>
          <Search className={searchIconStyle({ disabled })} />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
