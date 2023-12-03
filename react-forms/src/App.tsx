import { FC } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import { routes } from './services/routes';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import FormPage from './Components/Pages/FormPage/FormPage';
import FormUncontrolledPage from './Components/Pages/FormUncontroledPage/FormUncontrolledPage';

const router = createBrowserRouter([
  {
    path: routes.MAIN,
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.FORM,
    element: <FormPage />,
  },
  {
    path: routes.FORMUNCONTROLED,
    element: <FormUncontrolledPage />,
  },
]);

const App: FC = () => {
  return (
    <main className="main">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
