import {Types} from '../types/events';
import axios from 'axios';

export const requestAllEvents = () => {
  return (dispatch, getState) => {
    dispatch({type: Types.GET_ALL_EVENTS_REQUEST});
    console.log(
      'Dispatch GET_ALL_EVENTS_REQUEST - events Current State:',
      getState().events,
    );
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/event`)
        .then(res => {
          dispatch({type: Types.GET_ALL_EVENTS_SUCCESS, payload: res.data});
          console.log(
            'Dispatch GET_ALL_EVENTS_SUCCESS - events Current State:',
            getState().events,
          );
        })
        .catch(error => {
          dispatch({type: Types.GET_ALL_EVENTS_FAILURE});
          console.log(
            'Dispatch GET_ALL_EVENTS_FAILURE - events Current State:',
            getState().events,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_ALL_EVENTS_FAILURE});
      console.log(
        'Dispatch GET_ALL_EVENTS_FAILURE - events Current State:',
        getState().events,
      );
    }
    //console.log('requestAllEvents Done - events Current State:', getState().events);
  };
};

export const requestEventDetail = id => {
  return (dispatch, getState) => {
    dispatch({type: Types.GET_EVENT_DETAILS_REQUEST});
    console.log(
      'Dispatch GET_EVENT_DETAILS_REQUEST - events Current State:',
      getState().events,
    );
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/event/${id}`)
        .then(res => {
          dispatch({type: Types.GET_EVENT_DETAILS_SUCCESS, payload: res.data});
          console.log(
            'Dispatch GET_EVENT_DETAILS_SUCCESS - events Current State:',
            getState().events,
          );
        })
        .catch(error => {
          dispatch({type: Types.GET_EVENT_DETAILS_FAILURE});
          console.log(
            'Dispatch GET_EVENT_DETAILS_FAILURE - events Current State:',
            getState().events,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_EVENT_DETAILS_FAILURE});
      console.log(
        'Dispatch GET_EVENT_DETAILS_FAILURE - events Current State:',
        getState().events,
      );
    }
    //console.log('requestEventDetail Done - events Current State:', getState().events);
  };
};
