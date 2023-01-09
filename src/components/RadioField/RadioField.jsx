import React from 'react';
import { Field, useField } from 'formik';

const RadioField = () => {
    const options = [
        { label: 'Sim', value: 'yes' },
        { label: 'Não', value: 'no' }
    ];
    const [meta] = useField('contact');

    return (
        <div className="radio-group">
            <fieldset>
                <legend>Você autoriza entrarmos em contato por telefone?</legend>
                {options.map((option) => (
                    <label key={option.value}>
                        <Field type="radio" name="contact" value={option.value} />
                        {option.label}
                    </label>
                ))}
            </fieldset>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default RadioField;
        
