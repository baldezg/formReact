import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerField({label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field,meta] = useField(props);

  return (
    <div className="date-field">
    <label htmlFor={props.id || props.name}>{label}</label>
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
    </div>
  );
}