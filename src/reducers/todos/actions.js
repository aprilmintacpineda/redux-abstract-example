import {
  mapActionTypesToActions,
  mapControllersToActions
} from 'redux-abstract';

import actionTypes from './actionTypes';
import controllers from './controllers';

export const actions = mapActionTypesToActions(actionTypes);
export const stateControllers = mapControllersToActions(controllers, actionTypes);