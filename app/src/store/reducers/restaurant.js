import Immutable from 'seamless-immutable';

import {Types} from '../types/restaurant';

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  restaurantDetail: {},
});

const restaurant = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_RESTAURANT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_RESTAURANT_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        restaurantDetail: payload,
        loading: false,
        error: false,
      };

    case Types.GET_RESTAURANT_DETAILS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case Types.RESET_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default restaurant;
