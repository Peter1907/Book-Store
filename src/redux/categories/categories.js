const CHECK = 'CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return "Under construction";
    default: return state;
  }
};

const checkState = () => ({
  type: CHECK,
});

export { categoriesReducer, checkState };
