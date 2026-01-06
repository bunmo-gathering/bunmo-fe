type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarStatus = "button" | "indicator" | "none";

interface AvatarProps {
  imageUrl?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  hasImage?: boolean;
}

export type { AvatarProps };
