import { Outlet, RouteObject } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Auth } from '../pages/auth';
import { Common } from '../pages/common';
import { Priority } from '../pages/priority';
import { Region } from '../pages/region';
import { WorkPlace } from '../pages/work-place';

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Auth>
        <Layout>
          <Outlet />
        </Layout>
      </Auth>
    ),
    children: [
      {
        path: 'common',
        element: <Common />,
      },
      {
        path: 'priority',
        element: <Priority />,
      },
      {
        path: 'work-place',
        element: <WorkPlace />,
      },
      {
        path: 'region/:id',
        element: <Region />,
      },
    ],
  },
];
