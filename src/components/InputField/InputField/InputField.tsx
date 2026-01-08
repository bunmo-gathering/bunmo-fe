"use client";

import React, { forwardRef, useRef, useImperativeHandle, useId } from "react";
import { InputFieldProps } from "./props.type";
import {
  labelStyle,
  inputContentStyle,
  inputTextStyle,
  hintTextStyle,
  errorHintContainer,
} from "./style";
import useHandler from "./useHandler";

const InputField = (props: InputFieldProps) => {
  const {
    type = "input",
    label,
    placeholder = "",
    hint,
    onChange,
    value,
    disabled = false,
    maxLength,
    rows = 3,
    errorMessage,
    ...inputOptions
  } = props;

  const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const { handleChange, handleFocus, handleBlur, isFocused } = useHandler({
    onChange,
    disabled,
    innerRef,
  });
  const generatedId = useId();

  const hasValue = Boolean(value);
  const hasError = Boolean(errorMessage);

  const handleContainerClick = () => {
    if (!disabled && innerRef.current) {
      innerRef.current.focus();
    }
  };

  const handler = {
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  const args = {
    className: inputTextStyle({ hasValue }),
    placeholder,
    value,
    disabled,
    maxLength,
    rows,
  };

  const inputElement =
    type === "textarea" ? (
      <textarea
        ref={innerRef as React.Ref<HTMLTextAreaElement>}
        id={generatedId}
        {...handler}
        {...args}
        {...(inputOptions as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        ref={innerRef as React.Ref<HTMLInputElement>}
        id={generatedId}
        {...handler}
        {...args}
        {...(inputOptions as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );

  return (
    <div className="flex flex-col gap-3 w-full">
      {label && (
        <label
          htmlFor={generatedId}
          className={labelStyle({ error: !!errorMessage })}
        >
          {label}
        </label>
      )}

      <div
        className={inputContentStyle({
          type,
          error: hasError,
          active: isFocused || hasValue,
        })}
        onClick={handleContainerClick}
      >
        {inputElement}
      </div>

      {(hint || hasError) && (
        <div className={errorHintContainer({ error: hasError })}>
          {hasError && (
            <span className={hintTextStyle({ error: true })}>
              {errorMessage}
            </span>
          )}

          {hint && (
            <span className={hintTextStyle({ error: false })}>{hint}</span>
          )}
        </div>
      )}
    </div>
  );
};

InputField.displayName = "InputField";

export default InputField;
