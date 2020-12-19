import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ContactForm = ({ handleFormSubmit }) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        number: Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .required('Required'),
      })}
      onSubmit={handleFormSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
