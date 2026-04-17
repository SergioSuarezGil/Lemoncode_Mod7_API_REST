import { generatePath } from 'react-router';
import type { SwitchRoutes, LinkRoutes, NavigationFunction } from './routes.model';

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetail: '/characters/:id',
};

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
