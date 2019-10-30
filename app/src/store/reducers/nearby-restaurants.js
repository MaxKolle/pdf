import Immutable from 'seamless-immutable';

import {Types} from '../types/nearby-restaurants';

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  data: [],
});

const nearbyRestaurants = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_NEAR_BY_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_NEAR_BY_RESTAURANTS_SUCCESS:
      return {
        data: payload,
        loading: false,
        error: false,
      };

    case Types.GET_NEAR_BY_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default nearbyRestaurants;
