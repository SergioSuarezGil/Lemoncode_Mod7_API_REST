export interface Props {
  name: string;
  max: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}
