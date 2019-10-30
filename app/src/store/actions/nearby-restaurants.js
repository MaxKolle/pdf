import {Types} from '../types/nearby-restaurants';
import axios from 'axios';

export const requestNearbyRestaurants = (dishType, userLocation) => {
  debugger;
  return (dispatch, getState) => {
    dispatch({
      type: Types.GET_NEAR_BY_RESTAURANTS_REQUEST,
      payload: {
        dishType,
        userLocation,
      },
    });
    console.log(
      'Dispatch GET_NEAR_BY_RESTAURANTS_REQUEST - nearbyRestaurants Current State:',
      getState().nearbyRestaurants,
    );

    const params = {
      dishType,
    };

    const headers = {
      userLatitude: userLocation.latitude,
      userLongitude: userLocation.longitude,
    };

    try {
      axios
        .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${headers.userLatitude},${headers.userLongitude}&radius=50000&type=restaurant&keyword=${dishType}&key=AIzaSyDM5KNrEF39ejG8a0qYVb2yu-YAHSF9oIQ`)
        .then(res => {

          const restaurants = res.data.results;
          let restaurantsData = [];

          if(restaurants.length > 0) {
            for (let j = 0; j < restaurants.length; j++) {
              let currentRestaurant = ({
                description: restaurants[j].name,
                name: restaurants[j].name,
                id: restaurants[j].id,
                location: {
                  latitude: restaurants[j].geometry.location.lat,
                  longitude: restaurants[j].geometry.location.lng,
                },
              });
              restaurantsData.push(currentRestaurant);
            }
          }

          dispatch({
            type: Types.GET_NEAR_BY_RESTAURANTS_SUCCESS,
            payload: restaurantsData,
          });
          console.log(
            'Dispatch GET_NEAR_BY_RESTAURANTS_SUCCESS - nearbyRestaurants Current State:',
            getState().nearbyRestaurants,
          );
        })
        .catch(error => {
          dispatch({
            type: Types.GET_NEAR_BY_RESTAURANTS_FAILURE,
            payload: error,
          });
          console.log(
            'Dispatch GET_NEAR_BY_RESTAURANTS_FAILURE - nearbyRestaurants Current State:',
            getState().nearbyRestaurants,
          );
        });
    } catch (error) {
      dispatch({type: Types.GET_NEAR_BY_RESTAURANTS_FAILURE, payload: error});
      console.log(
        'Dispatch GET_NEAR_BY_RESTAURANTS_FAILURE - nearbyRestaurants Current State:',
        getState().nearbyRestaurants,
      );
    }
    //console.log('requestNearbyRestaurants Done - nearbyRestaurants Current State:', getState().nearbyRestaurants);
  };
};

/*
 try {
      axios
        .get(`http://10.0.0.6:3000/kame-tcha/api/v1/restaurant/nearby`, {
          params,
          headers,
        })
        .then(res => {
          dispatch({
            type: Types.GET_NEAR_BY_RESTAURANTS_SUCCESS,
            payload: res.data,
          });
          console.log(
            'Dispatch GET_NEAR_BY_RESTAURANTS_SUCCESS - nearbyRestaurants Current State:',
            getState().nearbyRestaurants,
          );
        })
        .catch(error => {
          dispatch({
            type: Types.GET_NEAR_BY_RESTAURANTS_FAILURE,
            payload: error,
          });
          console.log(
            'Dispatch GET_NEAR_BY_RESTAURANTS_FAILURE - nearbyRestaurants Current State:',
            getState().nearbyRestaurants,
          );
        });
    }

 */
