// @flow

import React, {Component} from 'react';

import {getItemFromStorage} from '../../../utils/AsyncStorageManager';
import {handleHiddenHeaderStyle} from '../../../routes/headerUtils';
import CONSTANTS from '../../../utils/CONSTANTS';

import RestaurantDetail from './RestaurantDetail';
import {connect} from 'react-redux';

import {
  resetState,
  requestRestaurantDetail,
} from '../../../store/actions/restaurant';

type Props = {
  requestRestaurantDetail: Function,
  resetState: Function,
  restaurant: Object,
  navigation: Object,
};

type State = {
  userLocation: Object,
};

class RestaurantDetailContainer extends Component<Props, State> {
  state = {
    userLocation: {...CONSTANTS.JOHANNESBURG_CITY_LOCATION},
  };

  async componentDidMount() {
    debugger;
    await this.handleRecoverUserLocationFromStorage();
    await this.handleFetchRestaurantDetail();
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    debugger;
    const {loading, error} = nextProps.restaurant;
    const {navigation} = this.props;

    handleHiddenHeaderStyle(navigation, loading, error);
  }

  componentWillUnmount() {
    debugger;
    const {resetState} = this.props;

    resetState();
  }

  handleRecoverUserLocationFromStorage = async (): any => {
    debugger;
    const persistedUserLocation = await getItemFromStorage(
      CONSTANTS.USER_LOCATION,
      CONSTANTS.JOHANNESBURG_CITY_LOCATION,
    );

    const userLocation =
      typeof persistedUserLocation === 'string'
        ? JSON.parse(persistedUserLocation)
        : persistedUserLocation;

    this.setState({
      userLocation,
    });
  };

  handleFetchRestaurantDetail = async (): any => {
    debugger;
    const {requestRestaurantDetail, navigation} = this.props;
    const {userLocation} = this.state;

    const id = navigation.getParam(CONSTANTS.NAVIGATION_PARAM_ID, '');

    requestRestaurantDetail(userLocation, id);
  };

  render() {
    const {userLocation} = this.state;
    const {restaurant} = this.props;
    const {restaurantDetail, loading, error} = restaurant;
    debugger;
    return (
      <RestaurantDetail
        userLocation={userLocation}
        restaurantDetail={restaurantDetail}
        loading={loading}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant,
});

export default connect(
  mapStateToProps,
  {
    resetState,
    requestRestaurantDetail,
  },
)(RestaurantDetailContainer);
