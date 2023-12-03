import { FC } from 'react';
import RedirectButton from '../../RedirectButton/RedirectButton';
import { routes } from '../../../services/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import DataDisplayer from '../../DataDisplayer/DataDisplayer';

const StartPage: FC = () => {
  const info = useSelector(
    (state: RootState) => state.FormUncontrolledData.value
  );
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
      <div className="info">
        <DataDisplayer info={info}></DataDisplayer>
      </div>
    </section>
  );
};

export default StartPage;
