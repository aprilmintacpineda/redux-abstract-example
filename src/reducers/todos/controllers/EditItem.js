export const editToggle = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      edit: {
        ...item.edit,
        on: !item.edit.on
      }
    }
  )
});

export const changeDescription = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      edit: {
        ...item.edit,
        description: action.value
      }
    }
  )
});

export const saveItem = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      description: item.edit.description,
      edit: {
        on: false,
        description: item.edit.description
      }
    }
  )
});

export const cancel = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      edit: {
        on: false,
        description: item.description
      }
    }
  )
});