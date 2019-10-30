import Immutable from 'seamless-immutable';

import {Types} from '../types/search-restaurants';

const INITIAL_STATE = Immutable({
  notFound: false,
  loading: false,
  error: false,
  data: [],
});

const searchRestaurants = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Types.SEARCH_RESTAURANTS_REQUEST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case Types.SEARCH_RESTAURANTS_SUCCESS:
      return {
        notFound: payload.restaurants.length === 0,
        data: payload,
        loading: false,
        error: false,
      };

    case Types.SEARCH_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default searchRestaurants;
