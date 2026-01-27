"use client";

import React from "react";
import { motion } from "motion/react";
import chipStyle from "./style";
import { chipAnimation } from "./animate";
import type { ChipProps } from "./props.type";

const Chip = ({
  text,
  variant = "default",
  more = false,
  close,
  onMore,
  onClose,
  onClick,
  className = "",
}: ChipProps) => {
  // close prop이 명시되지 않은 경우, selected 상태이면 기본적으로 닫기 버튼을 표시
  // Input Chip처럼 Default 상태에서도 삭제가 필요한 경우가 있을 수 있음
  const showClose = close ?? variant === "selected";

  return (
    <motion.button
      type="button"
      className={`${chipStyle({ variant })} ${className}`}
      initial={false}
      whileTap={chipAnimation.whileTap}
      aria-pressed={variant === "selected"}
      onClick={onClick}
    >
      <span className="text-body2-medium">{text}</span>

      {/* Icon 컴포넌트로 변경 예정 */}
      {more && (
        <button
          type="button"
          aria-label="More"
          onClick={(e) => {
            e.stopPropagation();
            onMore?.();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="text-current"
          >
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </button>
      )}

      {/* Icon 컴포넌트로 변경 예정 */}
      {showClose && (
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="text-current"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </motion.button>
  );
};

export default Chip;
