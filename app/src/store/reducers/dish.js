import Immutable from 'seamless-immutable';

import {Types} from '../types/dish';

const initialState = Immutable({
  isDishesEmpty: false,
  loading: false,
  dishDetail: {},
  error: false,
  dishes: [],
});

const dish = (state = initialState, {type, payload}) => {
  //debugger;
  switch (type) {
    case Types.GET_ALL_DISHES_REQUEST:
      return {
        ...state,
        isDishesEmpty: false,
        loading: true,
        error: false,
      };

    case Types.GET_ALL_DISHES_SUCCESS:
      return {
        ...state,
        isDishesEmpty: payload.length === 0,
        dishes: payload,
        loading: false,
      };

    case Types.GET_ALL_DISHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case Types.GET_DISH_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case Types.GET_DISH_DETAIL_SUCCESS:
      return {
        ...state,
        dishDetail: payload,
        loading: false,
        error: false,
      };

    case Types.GET_DISH_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default dish;
