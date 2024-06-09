import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Phone number is required'),
});

export default function ContactForm({ addContact }) {
  const fieldId = useId;

  const handleSubmit = (values, actions) => {
    addContact({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.mainFormWrapper}>
        <div>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field type="text" name="name" id={`${fieldId}-name`}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label className={css.label} htmlFor={`${fieldId}-number`}>
            {' '}
            Number
          </label>
          <Field type="number" name="number" id={`${fieldId}-number`}></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
