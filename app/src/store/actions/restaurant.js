import {Types} from '../types/restaurant';
import axios from 'axios';

export const requestRestaurantDetail = (userLocation, id) => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.GET_RESTAURANT_DETAILS_REQUEST,
      payload: {userLocation, id},
    });
    console.log(
      'Dispatch GET_RESTAURANT_DETAILS_REQUEST - restaurant Current State:',
      getState().restaurant,
    );

    const headers = {
      userLatitude: userLocation.latitude,
      userLongitude: userLocation.longitude,
    };
    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/restaurant/${id}`, {
          headers,
        })
        .then(res => {
          dispatch({
            type: Types.GET_RESTAURANT_DETAILS_REQUEST_SUCCESS,
            payload: res.data,
          });
          console.log(
            'Dispatch GET_RESTAURANT_DETAILS_REQUEST_SUCCESS - restaurant Current State:',
            getState().restaurant,
          );
        })
        .catch(error => {
          dispatch({type: Types.GET_RESTAURANT_DETAILS_REQUEST_FAILURE});
          console.log(
            'Dispatch GET_RESTAURANT_DETAILS_REQUEST_FAILURE - restaurant Current State:',
            getState().restaurant,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_RESTAURANT_DETAILS_REQUEST_FAILURE});
      console.log(
        'Dispatch GET_RESTAURANT_DETAILS_REQUEST_FAILURE - restaurant Current State:',
        getState().restaurant,
      );
    }
    //console.log('requestRestaurantDetail Done - restaurant Current State:', getState().restaurant);
  };
};

export const resetState = () => {
  return (dispatch, getState) => {
    dispatch({type: Types.RESET_DATA});
    console.log('resetState Done - restaurant Current State:', getState().restaurant);
  };
};
