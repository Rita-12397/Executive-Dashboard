const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_ALL_USERS_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;