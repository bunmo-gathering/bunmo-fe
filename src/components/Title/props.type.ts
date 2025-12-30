type TitleDirection = "vertical" | "horizon" | "center";
type SubTitleColor = "primary" | "gray";
type TitleSize = "sm" | "md" | "lg";

interface TitleProps {
  title: string;
  subtitle?: string;
  subtitleColor?: SubTitleColor;
  direction?: TitleDirection;
  size?: TitleSize;
}

export type { TitleProps };
