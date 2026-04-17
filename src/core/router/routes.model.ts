export interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
}

export type NavigationFunction = (id: string) => string;

export interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: NavigationFunction;
}
