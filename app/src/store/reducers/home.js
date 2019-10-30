// reducer modify the state based on initialState and action and return new state


import Immutable from 'seamless-immutable';

import {Types} from '../types/home';

const initialState = Immutable({
  loading: false,
  error: false,
  data: [],
});

const home = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_HOME_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case Types.GET_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default home;
