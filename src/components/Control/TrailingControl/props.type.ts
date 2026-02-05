import { LucideIcon } from "lucide-react";

interface TrailingAction {
  icon: LucideIcon;
  onTap?: () => void;
  label?: string;
}

interface TrailingControlProps {
  actions?: TrailingAction[];
}

export type { TrailingControlProps };
