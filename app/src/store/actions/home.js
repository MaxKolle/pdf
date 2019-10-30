// actions get dispatch to a reducer and a saga via mapDispatchToProps from views

import {Types} from '../types/home';
import axios from 'axios';

export const getHomeRequest = () => {
  return (dispatch, getState) => {
    dispatch({type: Types.GET_HOME_REQUEST});
    console.log('Dispatch GET_HOME_REQUEST - home Current State:', getState().home);
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/home`)
        .then(res => {
          dispatch({type: Types.GET_HOME_SUCCESS, payload: res.data});
          console.log('Dispatch GET_HOME_SUCCESS - home Current State:', getState().home);
        })
        .catch(error => {
          dispatch({type: Types.GET_HOME_FAILURE});
          console.log('Dispatch GET_HOME_FAILURE - home Current State:', getState().home);
        });
    } catch (error) {
      dispatch({type: Types.GET_HOME_FAILURE});
      console.log('Dispatch GET_HOME_FAILURE - home Current State:', getState().home);
    }
    //console.log('getHomeRequest Done - home Current State:', getState().home);
  };
};
