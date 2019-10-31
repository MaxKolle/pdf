// @flow

import React, {Component} from 'react';

import {getItemFromStorage} from '../../../utils/AsyncStorageManager';
import DISHES_TYPE_ITEM from './DISHES_TYPE_ITEM';
import CONSTANTS from '../../../utils/CONSTANTS';
import {connect} from 'react-redux';

import NearYouComponent from './components/NearYou';
import {requestNearbyRestaurants} from '../../../store/actions/nearby-restaurants';

type Props = {
  requestNearbyRestaurants: Function,
  nearbyRestaurants: Object,
};

type State = {
  restaurantsCached: Array<Object>,
  indexDishesTypeSelected: number,
  indexRestaurantSelected: number,
  userLocation: Object,
};

class NearYouContainer extends Component<Props, State> {
  state = {
    userLocation: {
      latitude: CONSTANTS.JOHANNESBURG_CITY_LOCATION.latitude,
      longitude: CONSTANTS.JOHANNESBURG_CITY_LOCATION.longitude,
    },
    shouldMoveRestaurantList: false,
    indexDishesTypeSelected: 0,
    indexRestaurantSelected: 0,
    restaurantsCached: [],
  };

  async componentDidMount() {

    const persistedUserLocation = await getItemFromStorage(
      CONSTANTS.USER_LOCATION,
      [
        CONSTANTS.JOHANNESBURG_CITY_LOCATION.latitude,
        CONSTANTS.JOHANNESBURG_CITY_LOCATION.longitude,
      ],
    );

    this.handleGetUserLocation(persistedUserLocation);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {

    const {indexDishesTypeSelected, restaurantsCached} = this.state;
    const {nearbyRestaurants} = nextProps;
    const {restaurants} = nearbyRestaurants.data;

    const cached = Object.assign([], restaurantsCached, {
      [indexDishesTypeSelected]: restaurants,
    });

    this.setState({
      restaurantsCached: cached,
    });
  }

  handleGetUserLocation = (persistedUserLocation: Array<any>): void => {

    let userLocation;

    if (typeof persistedUserLocation[0] === 'string') {
      const {latitude, longitude} = JSON.parse(persistedUserLocation);

      userLocation = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
    } else {
      userLocation = {
        latitude: persistedUserLocation[0],
        longitude: persistedUserLocation[1],
      };
    }

    this.setState({userLocation}, () => this.onRequestNearbyRestaurants());
  };

  onRequestNearbyRestaurants = (): void => {

    const {indexDishesTypeSelected, userLocation} = this.state;
    const {requestNearbyRestaurants} = this.props;

    const dishType = DISHES_TYPE_ITEM[indexDishesTypeSelected].id;

    requestNearbyRestaurants(dishType, userLocation);
  };

  onDishesTypeChange = (indexDishesTypeSelected: number): void => {

    const handleRestaurantsSelection = (): void => {
      const isRestaurantsCached = this.isRestaurantsCached();

      if (!isRestaurantsCached) {
        this.onRequestNearbyRestaurants();
      }
    };

    this.setState(
      {
        shouldMoveRestaurantList: true,
        indexRestaurantSelected: 0,
        indexDishesTypeSelected,
      },
      () => handleRestaurantsSelection(),
    );
  };

  onSelectMarker = (indexMarkerSelected: number): void => {

    console.log("onSelectMarker function");
    const {indexRestaurantSelected} = this.state;

    if (indexRestaurantSelected === indexMarkerSelected) {
      return;
    }

    this.setState({
      indexRestaurantSelected: indexMarkerSelected,
      shouldMoveRestaurantList: true,
    });
  };

  turnOffMoveRestaurantList = (): void => {

    console.log("turnOffMoveRestaurantList function");
    this.setState({
      shouldMoveRestaurantList: false,
    });
  };

  getnearbyRestaurants = (): Array<Object> => {


    const {nearbyRestaurants} = this.props;
    const {loading, data} = nearbyRestaurants;

    /*const canShowRestaurants = !loading && !!data.restaurants;

    const restaurants = canShowRestaurants ? data.restaurants : [];*/

    const canShowRestaurants = !loading && !!data;

    const restaurants = canShowRestaurants ? data : [];

    return restaurants;
  };

  getRestaurantsFromCache = (): Object => {

    const {indexDishesTypeSelected, restaurantsCached} = this.state;

    return restaurantsCached[indexDishesTypeSelected];
  };

  getRestaurantsList = (): mixed => {

    const isRestaurantsCached = this.isRestaurantsCached();

    const restaurants = isRestaurantsCached
      ? this.getRestaurantsFromCache()
      : this.getnearbyRestaurants();

    return restaurants;
  };

  isRestaurantsCached = (): boolean => {

    const {indexDishesTypeSelected, restaurantsCached} = this.state;

    const isCached = restaurantsCached[indexDishesTypeSelected];

    return !!isCached;
  };

  render() {
    const {
      shouldMoveRestaurantList,
      indexRestaurantSelected,
      restaurantsCached,
      userLocation,
    } = this.state;
    const {nearbyRestaurants} = this.props;
    const {error} = nearbyRestaurants;

    const restaurants = this.getRestaurantsList();

    return (
      <NearYouComponent
        turnOffMoveRestaurantList={this.turnOffMoveRestaurantList}
        shouldMoveRestaurantList={shouldMoveRestaurantList}
        indexRestaurantSelected={indexRestaurantSelected}
        onDishesTypeChange={this.onDishesTypeChange}
        hasSomeData={restaurantsCached.length > 0}
        onSelectMarker={this.onSelectMarker}
        dishesTypesItems={DISHES_TYPE_ITEM}
        userLocation={userLocation}
        restaurants={restaurants}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  nearbyRestaurants: state.nearbyRestaurants,
});

export default connect(
  mapStateToProps,
  {
    requestNearbyRestaurants,
  },
)(NearYouContainer);
