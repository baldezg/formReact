import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../InputField/InputField';
import DatePickerField from '../DatePicker/DatePicker';
import SelectField from '../SelectField/SelectField';
import RadioField from '../RadioField/RadioField';

const ContactForm = () => {
  const listOfNeighborhoods = ['Alto da Boa Vista', 'Barra da Tijuca', 'Centro', 'Copacabana', 'Laranjeiras', 'Recreio dos Bandeirantes', 'Tijuca'];
  const listOfPeriods = ['Manhã', 'Tarde', 'Noite'];
  
//função para colocar máscara no número de telefone digitado
  const handleTyping = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 11)
    e.target.value = e.target.value.replace(/^(\d{2})(\d)/g, '($1) $2')
    e.target.value = e.target.value.replace(/(\d)(\d{4})$/, '$1-$2')
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        birth: '',
        neighborhood: '',
        period: '',
        contact: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, 'Por favor informe seu nome completo!')
          .required('Esse campo não pode ficar em branco.'),
        email: Yup.string()
          .email('Por favor informe um e-mail válido!')
          .required('Esse campo não pode ficar em branco.'),
        phone: Yup.string()
          .required('Esse campo não pode ficar em branco.')
          .min(14, 'Por favor informe seu número de telefone completo!')
          .required('Esse campo não pode ficar em branco.'),
        birth: Yup.string()
          .required('Esse campo não pode ficar em branco.')
          .test('is-older-18', 'Você precisa ter mais de 18 anos para se cadastrar!', (value) => {
            const today = new Date();
            const birthDate = new Date(value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }
            return age >= 18;
          }),
        neighborhood: Yup.string()
          .required('Esse campo não pode ficar em branco.'),
        period: Yup.string()
        .oneOf(
          ['Manhã', 'Tarde', 'Noite'], 'Por favor selecione um período!')
          .required('Esse campo não pode ficar em branco.'),
        contact: Yup.string()
          .required('Esse campo não pode ficar em branco.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='form'>
          
          <InputField
            label="Nome"
            name="name"
            type="text"
            placeholder="Nome"
          />
          <InputField
            label="E-mail"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <InputField
            label="Telefone"
            name="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            onKeyUp={handleTyping}
            
          />
          <DatePickerField
            className="date-picker"
            label="Informe sua data de nasciento"
            name="birth"
            type="date"
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            showYearDropdown
            selected={null}
          />
          <SelectField label="Informe o bairro de seu interesse" name="neighborhood" list={listOfNeighborhoods}>
          </SelectField>

          <SelectField label="Informe o período de seu interesse" name="period" list={listOfPeriods}>
          </SelectField>

          <RadioField />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    );
}

export default ContactForm;