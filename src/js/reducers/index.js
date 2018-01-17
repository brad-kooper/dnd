const initialState = {
    profile : {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE":
        return { profile: [action.payload] };
      default:
        return state;
    }
  };

  export default rootReducer;