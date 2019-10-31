import {Types} from '../types/nearby-restaurants';
import axios from 'axios';

function getGoogleNearByRestaurants(headers, dishType) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${headers.userLatitude},${headers.userLongitude}&radius=50000&type=restaurant&keyword=${dishType}&key=AIzaSyDM5KNrEF39ejG8a0qYVb2yu-YAHSF9oIQ`)
}

function getNearByRestaurants(params, headers) {
  return axios.get(`http://10.0.0.6:3000/kame-tcha/api/v1/restaurant/nearby`, {
    params,
    headers,
  });
}

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

      axios.all([getGoogleNearByRestaurants(headers, dishType), getNearByRestaurants(params, headers)])
          .then(axios.spread( (googleResponse, response) => {
            // Both requests are now complete

            let restaurantsData = [];

            const googleRestaurants = googleResponse.data.results;

            if(googleRestaurants.length > 0) {
              for (let j = 0; j < googleRestaurants.length; j++) {
                let currentRestaurant = ({
                  description: googleRestaurants[j].name,
                  dishesTypes: "Pasta",
                  distance: 5,
                  id: googleRestaurants[j].id,
                  imageURL: "https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/large/dom-pastel.jpeg",
                  name: googleRestaurants[j].name,
                  isOpen: false,
                  location: {
                    latitude: googleRestaurants[j].geometry.location.lat,
                    longitude: googleRestaurants[j].geometry.location.lng,
                  },
                  mediumImageURL: "https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/medium/dom-pastel.jpeg",
                  operatingHours: {
                    open: "11:00",
                    close: "01:00"
                  },
                  stars: 5,
                  thumbnailImageURL: "https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/thumbnail/dom-pastel.jpeg",
                  _id: googleRestaurants[j].id,
                  fromGoogle: true
                });
                restaurantsData.push(currentRestaurant);
              }
            }

            const restaurants = response.data.restaurants;

            if(restaurants.length > 0) {
              for (let j = 0; j < restaurants.length; j++) {
                let currentRestaurant = ({
                  description: restaurants[j].description,
                  dishesTypes: restaurants[j].dishesTypes,
                  distance: restaurants[j].distance,
                  id: restaurants[j].id,
                  imageURL: restaurants[j].imageURL,
                  name: restaurants[j].name,
                  isOpen: restaurants[j].isOpen,
                  location: {
                    latitude: restaurants[j].location.latitude,
                    longitude: restaurants[j].location.longitude,
                  },
                  mediumImageURL: restaurants[j].mediumImageURL,
                  operatingHours: {
                    open: restaurants[j].operatingHours.open,
                    close: restaurants[j].operatingHours.close,
                  },
                  stars: restaurants[j].stars,
                  thumbnailImageURL: restaurants[j].thumbnailImageURL,
                  _id: restaurants[j]._id,
                  fromGoogle: false
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
          }
        ));
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
