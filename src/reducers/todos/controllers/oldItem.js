export const removeItem = (state, action) => ({
  ...state,
  items: state.items.filter((item, i) => i != action.targetIndex)
});

export const clearItems = (state, action) => ({
  ...state,
  items: []
});