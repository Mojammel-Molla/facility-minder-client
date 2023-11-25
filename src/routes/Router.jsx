import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/main/MainLayOut';
import Home from '../pages/home/home/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Router;
