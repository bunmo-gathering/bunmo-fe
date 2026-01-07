import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { InputFieldProps } from "./props.type";
import {
  inputFieldContainer,
  labelStyle,
  inputContentStyle,
  inputTextStyle,
  hintTextStyle,
  errorHintContainer,
} from "./style";

const InputField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputFieldProps
>(
  (
    {
      type = "input",
      label,
      placeholder = "",
      hint,
      onChange,
      value,
      disabled = false,
      maxLength,
      rows = 3,
      error = false,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = Boolean(value);
    const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    // Forward the ref to the parent component
    useImperativeHandle(ref, () => innerRef.current!);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleContainerClick = () => {
      if (!disabled && innerRef.current) {
        innerRef.current.focus();
      }
    };

    const inputElement =
      type === "textarea" ? (
        <textarea
          ref={innerRef as React.Ref<HTMLTextAreaElement>}
          className={inputTextStyle({ hasValue })}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={innerRef as React.Ref<HTMLInputElement>}
          className={inputTextStyle({ hasValue })}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      );

    return (
      <div className={inputFieldContainer()} style={style}>
        {label && <label className={labelStyle({ error })}>{label}</label>}

        <div
          className={inputContentStyle({
            type,
            error,
            active: isFocused || hasValue,
          })}
          onClick={handleContainerClick}
        >
          {inputElement}
        </div>

        {(hint || error) && (
          <div className={error ? errorHintContainer() : ""}>
            {error && hint && (
              <>
                <span className={hintTextStyle({ error: true })}>
                  Error message
                </span>
                <span className={hintTextStyle({ error: true })}>{hint}</span>
              </>
            )}
            {!error && hint && (
              <span className={hintTextStyle({ error: false })}>{hint}</span>
            )}
          </div>
        )}
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
