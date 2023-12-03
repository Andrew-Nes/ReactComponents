import { FC } from 'react';
import './errorPage.css';
import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage: FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);
  return (
    <section className="error-page">
      <h2 className="page-header_big"> 404 </h2>
      <h2 className="page-header">Something went wromg</h2>
      <i>{error.statusText || error.message}</i>
    </section>
  );
};

export default ErrorPage;
