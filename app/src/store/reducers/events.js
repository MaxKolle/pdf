import Immutable from 'seamless-immutable';

import {Types} from '../types/events';

const INITIAL_STATE = Immutable({
  eventDetails: {},
  restaurants: [],
  loading: false,
  error: false,
  events: [],
});

const events = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Types.GET_ALL_EVENTS_REQUEST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case Types.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload.events,
        loading: false,
      };

    case Types.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case Types.GET_EVENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case Types.GET_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        eventDetails: payload,
        loading: false,
      };

    case Types.GET_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default events;
