// @flow

import React, { Component } from 'react';

import { handleHiddenHeaderStyle } from '../../../routes/headerUtils';
import DishDetail from './components/DishDetail';
import CONSTANTS from '../../../utils/CONSTANTS';
import { connect } from 'react-redux';

import {requestDishDetail} from '../../../store/actions/dish';

type Props = {
  requestDishDetail: Function,
  navigation: Object,
  dish: Object,
};

class DishDetailContainer extends Component<Props, {}> {
  _subscriptionWillFocusEvent = {};

  componentDidMount() {
    debugger;
    const { requestDishDetail, navigation } = this.props;

    const id = navigation.getParam(CONSTANTS.NAVIGATION_PARAM_ID, '');

    this._subscriptionWillFocusEvent = navigation.addListener('willFocus', () => handleHiddenHeaderStyle(navigation, false, false));

    requestDishDetail(id);
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    debugger;
    const { loading, error } = nextProps.dish;
    const { navigation } = this.props;

    handleHiddenHeaderStyle(navigation, loading, error);
  }

  componentWillUnmount() {
    debugger;
    this._subscriptionWillFocusEvent.remove();
  }

  render() {
    const { dish } = this.props;
    const { dishDetail, loading, error } = dish;
    debugger;
    return <DishDetail
        dishDetail={dishDetail}
        loading={loading}
        error={error}
    />;
  }
}

const mapStateToProps = state => ({
  dish: state.dish,
});

export default connect(mapStateToProps, {
  requestDishDetail,
})(DishDetailContainer);
