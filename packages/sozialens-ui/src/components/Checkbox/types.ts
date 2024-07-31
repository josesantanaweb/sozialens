
export interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  label?: string;
  id?: string;
}
