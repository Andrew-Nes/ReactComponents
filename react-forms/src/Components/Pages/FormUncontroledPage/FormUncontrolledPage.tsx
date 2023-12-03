import { FC } from 'react';
import FormUncontrolledComponent from '../../FormUncontrolled/FormUncontrolled';

const FormUncontrolledPage: FC = () => {
  return (
    <section className="error-page">
      <h2 className="page-header">Uncontrolled Form</h2>
      <FormUncontrolledComponent />
    </section>
  );
};

export default FormUncontrolledPage;
