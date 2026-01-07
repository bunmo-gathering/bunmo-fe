import { tv } from "tailwind-variants";

/**
 * InputField 컨테이너 스타일
 */
export const inputFieldContainer = tv({
  base: "flex flex-col gap-3 w-full",
});

/**
 * Label 스타일
 */
export const labelStyle = tv({
  base: "text-body1-medium",
  variants: {
    error: {
      true: "text-error",
      false: "text-onSurface",
    },
  },
  defaultVariants: {
    error: false,
  },
});

/**
 * Input/Textarea Content 스타일
 */
export const inputContentStyle = tv({
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
export const inputTextStyle = tv({
  base: "w-full text-body2-medium bg-transparent outline-none resize-none",
  variants: {
    hasValue: {
      true: "text-onSurfaceVariant",
      false: "text-outline placeholder:text-outline",
    },
  },
  defaultVariants: {
    hasValue: false,
  },
});

/**
 * Hint/Error Text 스타일
 */
export const hintTextStyle = tv({
  base: "text-caption-regular",
  variants: {
    error: {
      true: "text-error",
      false: "text-onSurfaceVariant",
    },
  },
  defaultVariants: {
    error: false,
  },
});

/**
 * Error and Hint 컨테이너 스타일 (에러 상태일 때 에러 메시지와 힌트를 함께 표시)
 */
export const errorHintContainer = tv({
  base: "flex flex-row justify-between items-center w-full gap-3",
});
