import React from 'react';
import { useField } from 'formik';

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props}>
            <option value=''>Selecione uma opção</option>
            {props.list.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
        </select>
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null }
        </>
    );
    }

export default SelectField;
