import { FC } from 'react';
import RedirectButton from '../../RedirectButton/RedirectButton';
import { routes } from '../../../services/routes';

const StartPage: FC = () => {
  return (
    <section className="start-page">
      <h2 className="page-header">Start page</h2>
      <RedirectButton
        className="button_redirect"
        text="Form"
        route={routes.FORM}
      />
      <RedirectButton
        className="button_redirect"
        text="Form Uncontrolled"
        route={routes.FORMUNCONTROLED}
      />
    </section>
  );
};

export default StartPage;
