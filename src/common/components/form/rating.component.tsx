
import * as React from 'react';
import { useField } from 'formik';
import { Rating, Typography } from '@mui/material';
import { RatingProps } from './rating.model';

export const RatingComponent: React.FunctionComponent<RatingProps> = (props) => {
  const { name, max, value, onChange, error } = props;

  let field, meta, helpers;
  if (name) {
    [field, meta, helpers] = useField(name);
  }
  const hasError = error || Boolean(meta && meta.error);
  const helperText = field ? meta?.error : props.helperText;

  const handleChange = (_: any, value: any) => {
    if (onChange) {
      onChange(value);
    } else if (helpers) {
      helpers.setValue(value);
    }
  };
  return (
    <>
      <Rating value={value || field?.value} max={max} onChange={handleChange} />
      {hasError && (
        <Typography variant="caption" color="error" gutterBottom>
          {helperText}
        </Typography>
      )}
    </>
  );
};
