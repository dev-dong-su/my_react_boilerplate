import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ROUTES } from 'constants';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AuthPage = lazy(() => import('pages/AuthPage'));
const TmpPage = lazy(() => import('pages/TmpPage'));

export const router = createBrowserRouter([
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <AuthPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO,
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <TmpPage />
          </Suspense>
        ),
      },
    ],
  },
]);
