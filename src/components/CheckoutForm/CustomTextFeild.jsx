import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false; // change this to reflect actual error state
  

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        defaultValue={""}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            fullWidth
            required={required}
            error={isError}
          />
          
        )}
      />
    </Grid>
  );
}

export default FormInput;
