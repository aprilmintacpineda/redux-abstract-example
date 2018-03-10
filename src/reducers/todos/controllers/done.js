export const markAsDone = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      done: true
    }
  )
});

export const markAsNotDone = (state, action) => ({
  ...state,
  items: state.items.map((item, i) =>
    i != action.targetIndex
    ? { ...item }
    : {
      ...item,
      done: false
    }
  )
});