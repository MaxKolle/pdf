import {Types} from '../types/dish';
import axios from 'axios';

export const requestAllDishes = () => {
  debugger;
  return (dispatch, getState) => {
    dispatch({type: Types.GET_ALL_DISHES_REQUEST});
    console.log(
      'Dispatch GET_ALL_DISHES_REQUEST - dish Current State:',
      getState().dish,
    );
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/dish`)
        .then(res => {
          dispatch({type: Types.GET_ALL_DISHES_SUCCESS, payload: res.data.dishes});
          console.log(
            'Dispatch GET_ALL_DISHES_SUCCESS - dish Current State:',
            getState().dish,
          );
        })
        .catch(error => {
          dispatch({type: Types.GET_ALL_DISHES_FAILURE});
          console.log(
            'Dispatch GET_ALL_DISHES_FAILURE - dish Current State:',
            getState().dish,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_DISH_DETAIL_FAILURE});
      console.log(
        'Dispatch GET_ALL_DISHES_FAILURE - dish Current State:',
        getState().dish,
      );
    }
    //console.log('requestAllDishes Done - dish Current State:', getState().dish);
  };
};

export const requestDishDetail = id => {
  debugger;
  return (dispatch, getState) => {
    dispatch({type: Types.GET_DISH_DETAIL_REQUEST});
    console.log(
      'Dispatch GET_DISH_DETAIL_REQUEST - dish Current State:',
      getState().dish,
    );
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/dish/${id}`)
        .then(res => {
          dispatch({type: Types.GET_DISH_DETAIL_SUCCESS, payload: res.data});
          console.log(
            'Dispatch GET_DISH_DETAIL_SUCCESS - dish Current State:',
            getState().dish,
          );
        })
        .catch(error => {
          dispatch({type: Types.GET_DISH_DETAIL_FAILURE});
          console.log(
            'Dispatch GET_DISH_DETAIL_FAILURE - dish Current State:',
            getState().dish,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_DISH_DETAIL_FAILURE});
      console.log(
        'Dispatch GET_DISH_DETAIL_FAILURE - dish Current State:',
        getState().dish,
      );
    }
    //console.log('requestDishDetail Done - dish Current State:', getState().dish);
  };
};

export const createDish = ({dish}) => async dispatch => {
  dispatch({type: Types.CREATE_DISH_REQUEST});
  // send the request.body as dish
  try {
    await axios
      .post(`http://10.0.0.6:3000/kame-tcha/api/v1/dish`)
      .then(res => {
        dispatch({type: Types.CREATE_DISH_SUCCESS, payload: res.data});
      })
      .catch(error => {
        dispatch({type: Types.CREATE_DISH_FAILURE});
      });
  } catch (error) {
    dispatch({type: Types.CREATE_DISH_FAILURE});
  }
};
