import { LucideIcon } from "lucide-react";

type SelectOptionVariant = "default" | "destructive";

interface SelectOption {
  icon: string;
  label: string;
  variant?: SelectOptionVariant;
}

interface BottomSheetData {
  title?: string;
}

interface SelectBottomSheetPayload extends BottomSheetData {
  selectOptions?: SelectOption[];
}

export type { SelectBottomSheetPayload };
