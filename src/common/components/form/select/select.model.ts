import { SelectProps } from '@mui/material';
import { Lookup } from '#common/models';

export type SelectComponentProps = SelectProps & {
  items: Lookup[];
  helperText?: string;
};
