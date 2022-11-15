import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './views/routes';

export const App: FC = () => {
  const AppRoutes = useRoutes(appRoutes);
  return AppRoutes;
};
