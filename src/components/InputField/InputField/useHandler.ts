import { ChangeEvent, RefObject, useState } from "react";

interface UseHandlerProps {
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  innerRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}

const useHandler = ({ onChange, disabled, innerRef }: UseHandlerProps) => {
  const [isFocused, setIsFocused] = useState(false);

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

  return {
    handleChange,
    handleFocus,
    handleBlur,

    isFocused,
  };
};

export default useHandler;
