export interface RatingProps {
  name: string;
  max: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}
