import actionTypes from '../actionTypes';
import * as oldItemActionControllers from './oldItem';
import * as newItemActionControllers from './newItem';
import * as editItemControllers from './EditItem';
import * as doneActionControllers from './done';

export default {
  [actionTypes.addItem]: newItemActionControllers.addItem,
  [actionTypes.changeNewItemDescription]: newItemActionControllers.changeDescription,
  
  [actionTypes.removeItem]: oldItemActionControllers.removeItem,
  [actionTypes.clearItems]: oldItemActionControllers.clearItems,

  [actionTypes.editToggle]: editItemControllers.editToggle,
  [actionTypes.changeEditDescription]: editItemControllers.changeDescription,
  [actionTypes.saveItem]: editItemControllers.saveItem,
  [actionTypes.cancelEdit]: editItemControllers.cancel,

  [actionTypes.markAsDone]: doneActionControllers.markAsDone,
  [actionTypes.markAsNotDone]: doneActionControllers.markAsNotDone
};