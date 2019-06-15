import { GET_MENU, GET_RESTAURANT_DATA } from "./types";
import axios from "axios";

// const url = `https://todo-2cace.firebaseio.com/foodmenu/categories.json`;

export const getMenu = () => dispatch => {
  axios.get(`https://todo-2cace.firebaseio.com/categories.json`).then(res => {
    //   console.log(res.data);
    dispatch({
      type: GET_MENU,
      payload: res.data
    });
  });
};

export const getRestaurantData = () => dispatch => {
  axios
    .get(`https://todo-2cace.firebaseio.com/restaurant-info.json`)
    .then(res => {
      //   console.log(res.data);
      dispatch({
        type: GET_RESTAURANT_DATA,
        payload: res.data
      });
    });
};
