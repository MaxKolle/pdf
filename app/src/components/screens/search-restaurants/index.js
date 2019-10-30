// @flow

import React, { Component } from 'react';

import SearchRestaurants from './components';
import { getItemFromStorage } from '../../../utils/AsyncStorageManager';
import CONSTANTS from '../../../utils/CONSTANTS';

import { connect } from 'react-redux';
import {requestSearchRestaurants} from "../../../store/actions/search-restaurants";

type Props = {
  requestSearchRestaurants: Function,
  searchRestaurants: Object,
};

type State = {
  userLocation: Array<any>,
};

class SearchRestaurantsContainer extends Component<Props, State> {
  state = {
    userLocation: [],
  };

  async componentDidMount() {
    debugger;
    const persistedUserLocation = await getItemFromStorage(
      CONSTANTS.USER_LOCATION,
      [0, 0],
    );

    const userLocation = typeof persistedUserLocation === 'string'
      ? JSON.parse(persistedUserLocation)
      : persistedUserLocation;

    this.setState({
      userLocation,
    });
  }

  onSearchRestaurants = (
    dishesTypes: Array<string>,
    maxDistance: number,
  ): void => {
    const { requestSearchRestaurants } = this.props;
    const { userLocation } = this.state;
    debugger;
    requestSearchRestaurants(dishesTypes, maxDistance, userLocation);
  };

  render() {
    const { searchRestaurants } = this.props;
    const { error, loading, notFound, data } = searchRestaurants;
    debugger;

    return (
      <SearchRestaurants
        onSearchRestaurants={this.onSearchRestaurants}
        notFound={notFound}
        loading= {loading}
        error= {error}
        data= {data}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchRestaurants: state.searchRestaurants,
});

export default connect(mapStateToProps, {
  requestSearchRestaurants
})(SearchRestaurantsContainer);
