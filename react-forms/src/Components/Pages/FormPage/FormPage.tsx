import { FC } from 'react';
import FormComponent from '../../Form/Form';

const FormPage: FC = () => {
  return (
    <section className="error-page">
      <h2 className="page-header">RHF Form</h2>
      <FormComponent />
    </section>
  );
};

export default FormPage;
