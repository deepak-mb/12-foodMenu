import { GET_MENU, GET_RESTAURANT_DATA } from "../actions/types";

const initialState = {
  menu: "",
  restaurantInfo: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      //   console.log(action.payload);
      return {
        ...state,
        menu: action.payload
      };

    case GET_RESTAURANT_DATA:
      //   console.log(action.payload);
      return {
        ...state,
        restaurantInfo: action.payload
      };
    default:
      return state;
  }
}
