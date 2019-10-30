import {Types} from '../types/search-restaurants';
import axios from 'axios';
import parseParams from '../../utils/parseParams';

export const requestSearchRestaurants = (
  dishesTypes,
  maxDistance,
  userLocation,
) => {
  debugger;
  return (dispatch, getState) => {
    dispatch({
      type: Types.SEARCH_RESTAURANTS_REQUEST,
      payload: {
        userLocation,
        dishesTypes,
        maxDistance,
      },
    });
    console.log(
      'Dispatch SEARCH_RESTAURANTS_REQUEST - searchRestaurants Current State:',
      getState().searchRestaurants,
    );

    const headers = {
      userLatitude: userLocation.latitude,
      userLongitude: userLocation.longitude,
    };

    const paramsMerged = Object.assign({}, {dishesTypes}, {maxDistance});

    try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/restaurant/filter`, {
          paramsSerializer: params => parseParams(params),
          params: paramsMerged,
          headers,
        })
        .then(res => {
          dispatch({type: Types.SEARCH_RESTAURANTS_SUCCESS, payload: res.data});
          console.log(
            'Dispatch SEARCH_RESTAURANTS_SUCCESS - searchRestaurants Current State:',
            getState().searchRestaurants,
          );
        })
        .catch(error => {
          dispatch({type: Types.SEARCH_RESTAURANTS_FAILURE});
          console.log(
            'Dispatch SEARCH_RESTAURANTS_FAILURE - searchRestaurants Current State:',
            getState().searchRestaurants,
          );
        });
    } catch (error) {
      dispatch({type: Types.SEARCH_RESTAURANTS_FAILURE});
      console.log(
        'Dispatch SEARCH_RESTAURANTS_FAILURE - searchRestaurants Current State:',
        getState().searchRestaurants,
      );
    }
    //console.log('requestSearchRestaurants Done - searchRestaurants Current State:', getState().searchRestaurants);
  };
};
