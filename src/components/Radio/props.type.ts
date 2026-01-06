import { ChangeEvent } from "react";

type Type = "first" | "second";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  selectedValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: Type;
  label: string;
  description?: string;
}

export type { RadioProps };
