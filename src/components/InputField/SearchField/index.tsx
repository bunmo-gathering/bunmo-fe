"use client";

import React, { useRef, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
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
  onKeyDown,
  value,
  disabled = false,
  ...inputOptions
}: SearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

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

    setHasValue(!!event.target.value);
  };

  const handleSearchButtonTap = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    if (!disabled && onSearchButtonTap) {
      onSearchButtonTap();
    }
  };

  const handleClearInput = () => {
    if (!disabled && onChange) {
      const event = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
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
          onKeyDown={onKeyDown}
          {...(inputOptions as React.InputHTMLAttributes<HTMLInputElement>)}
        />

        <div className="flex items-center gap-1">
          {hasValue && (
            <button className="cursor-pointer" onClick={handleClearInput}>
              <XIcon className={searchIconStyle({ disabled })} />
            </button>
          )}

          <button className="cursor-pointer" onClick={handleSearchButtonTap}>
            <SearchIcon className={searchIconStyle({ disabled })} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
