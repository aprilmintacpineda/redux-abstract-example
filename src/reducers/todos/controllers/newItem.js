export const changeDescription = (state, action) => ({
  ...state,
  newItem: {
    description: action.value
  }
});

export const addItem = (state, action) => ({
  newItem: {
    description: ''
  },
  items: [
    ...state.items,
    { ...action.item }
  ]
});