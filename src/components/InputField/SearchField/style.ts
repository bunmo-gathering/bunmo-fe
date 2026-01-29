import clsx from "clsx";
import { tv } from "tailwind-variants";

export const searchContainerStyle = tv({
  base: clsx("flex justify-between bg-surfaceDim px-4 py-2.5 rounded-2xl"),
  variants: {
    active: {
      true: "border border-outline",
      false: "border border-transparent",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-text",
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
});

export const searchInputStyle = tv({
  base: clsx(
    "flex-1",
    "text-caption-regular",
    "outline-none",
    "border-none",
    "placeholder:text-on-surface-variant",
  ),
  variants: {
    hasValue: {
      true: "text-on-surface",
      false: "text-on-surface-variant",
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-text",
    },
  },
  defaultVariants: {
    hasValue: false,
    disabled: false,
  },
});

export const searchIconStyle = tv({
  base: "size-6 shrink-0",
  variants: {
    disabled: {
      true: "opacity-50",
      false: "opacity-100",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const labelStyle = tv({
  base: clsx("text-body-regular", "text-on-surface", "mb-2", "block"),
});
