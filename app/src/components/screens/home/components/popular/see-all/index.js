// @flow

import React, { Component } from 'react';

import SeeAllPopular from './SeeAllPopular';
import { connect } from 'react-redux';

import {requestAllDishes} from '../../../../../../store/actions/dish';

type Props = {
  requestAllDishes: Function,
  dish: Object,
};

class SeeAllPopularContainer extends Component<Props, {}> {
  componentDidMount() {
    const { requestAllDishes } = this.props;

    requestAllDishes();
  }

  render() {
    const { dish } = this.props;
    const { dishes, isDishesEmpty, loading, error } = dish;
    debugger;
    return <SeeAllPopular
        dishes={dishes}
        isDishesEmpty={isDishesEmpty}
        loading={loading}
        error={error}
    />;
  }
}

const mapStateToProps = state => ({
  dish: state.dish,
});

export default connect(mapStateToProps, {
    requestAllDishes,
})(SeeAllPopularContainer);
