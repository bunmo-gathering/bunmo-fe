interface ToggleProps {
  activate: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  description?: string;
}

export type { ToggleProps };
