import { SET_ADMIN, SET_SELECTED_SERVICE, SET_USER } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ADMIN:
      return { ...state, admin: action.payload };
    case SET_SELECTED_SERVICE:
      return { ...state, selectedService: action.payload };
    default:
      return state;
  }
};
