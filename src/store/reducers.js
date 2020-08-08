let defaultState = {
  userInfo: { },
  acountData: { },
};

const incrementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USERINFO": {
      return {
        ...state,
        userInfo: {...state.userInfo,...action.userInfo},
      };
    }
    case "ACOUNTDATA": {
      return {
        ...state,
        acountData: {...action.acountData},
      };
    }
    default:
      return state;
  }
};
export default incrementReducer;
