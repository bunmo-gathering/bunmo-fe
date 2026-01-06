type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarStatus = "button" | "indicator";

interface AvatarProps {
  imageUrl?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
}

export type { AvatarProps };
