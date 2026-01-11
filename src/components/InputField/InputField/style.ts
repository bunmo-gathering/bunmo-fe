import clsx from "clsx";
import { tv } from "tailwind-variants";

/**
 * Label 스타일
 */
const labelStyle = tv({
  variants: {
    error: {
      true: "text-body1-medium text-error!",
      false: "text-body1-medium text-onSurface!",
    },
  },

  defaultVariants: {
    error: false,
  },
});

/**
 * Input/Textarea Content 스타일
 */
const inputContentStyle = tv({
  base: "w-full px-3 py-2.5 rounded-lg border transition-colors cursor-text",

  variants: {
    type: {
      input: "",
      textarea: "resize-none",
    },

    error: {
      true: "border-error",
      false: "border-outlineVariant",
    },

    active: {
      true: "",
      false: "",
    },
  },

  compoundVariants: [
    {
      error: false,
      active: true,
      class: "border-outline",
    },
    {
      error: false,
      active: false,
      class: "border-outlineVariant",
    },
  ],

  defaultVariants: {
    type: "input",
    error: false,
    active: false,
  },
});

/**
 * Input/Textarea Text 스타일
 */
const inputTextStyle = tv({
  base: "w-full bg-transparent outline-none resize-none",

  variants: {
    hasValue: {
      true: "text-body2-medium text-onSurfaceVariant!",
      false: "text-outline placeholder:text-outline text-body2-medium!",
    },
  },

  defaultVariants: {
    hasValue: false,
  },
});

/**
 * Hint/Error Text 스타일
 */
const hintTextStyle = tv({
  variants: {
    error: {
      true: "text-error text-caption-regular!",
      false: "text-onSurfaceVariant text-caption-regular!",
    },
  },

  defaultVariants: {
    error: false,
  },
});

/**
 * Error and Hint 컨테이너 스타일 (에러 상태일 때 에러 메시지와 힌트를 함께 표시)
 */
const errorHintContainer = tv({
  base: "flex flex-row justify-between items-center w-full gap-3",

  variants: {
    error: {
      true: "text-error",
      false: "justify-end",
    },
  },
});

export {
  labelStyle,
  inputContentStyle,
  inputTextStyle,
  hintTextStyle,
  errorHintContainer,
};
