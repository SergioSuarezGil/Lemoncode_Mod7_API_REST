import * as React from 'react';
import { useField } from 'formik';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { cx } from '@emotion/css';
import * as classes from './text-field.styles';

export const TextFieldComponent: React.FunctionComponent<TextFieldProps> = (
  props
) => {
  const { name, onChange, onBlur, value, error, slotProps } = props;

  let field, meta;
  if (name) {
    [field, meta] = useField(name);
  }
  const hasError = error || Boolean(meta && meta.touched && meta.error);
  const helperText = field ? meta?.error : props.helperText;

  return (
    <MuiTextField
      {...props}
      name={name}
      id={name}
      onChange={onChange || field?.onChange}
      onBlur={onBlur || field?.onBlur}
      value={value || field?.value}
      error={hasError}
      helperText={hasError ? helperText : ''}
      fullWidth={true}
      margin="normal"
      slotProps={{
        ...slotProps,
        htmlInput: {
          ...slotProps?.htmlInput,
          className: cx(
            (slotProps?.htmlInput as any)?.className,
            classes.input
          ),
        },
      }}
    />
  );
};
