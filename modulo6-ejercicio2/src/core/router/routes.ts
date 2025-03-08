import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  viewCharacter: '/character/:id',
  editCharacter: '/character/edit/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'viewCharacter' | 'editCharacter'> {
  viewCharacter: NavigationFunction;
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
