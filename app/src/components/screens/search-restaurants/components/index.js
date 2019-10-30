// @flow

import React, {PureComponent} from 'react';
import {Container, FloatingActionButtonWrapper, MessageWrapper} from './style';
import FloatingActionButton from '../../../../components/common/FloatingActionButton';
import Alert from '../../../../components/common/alert';
import {Types} from '../../../../utils/alert';
import Loading from '../../../../components/common/Loading';

import RestaurantsList from './RestaurantsList';
import Modal from './modal';

type Props = {
  onSearchRestaurants: Function,
  notFound: boolean,
  loading: boolean,
  error: boolean,
  data: Object,
};

type State = {
  isRequestingNewData: boolean,
  dishesTypes: Array<string>,
  isModalVisible: boolean,
  isFirstRender: boolean,
  maxDistance: number,
};

class SearchRestaurants extends PureComponent<Props, State> {
  state = {
    isRequestingNewData: false,
    isModalVisible: false,
    isFirstRender: true,
    dishesTypes: [],
    maxDistance: 1,
  };

  UNSAFE_componentWillReceiveProps() {
    this.setState({
      isRequestingNewData: false,
    });
  }

  onToggleModal = (): void => {
    const {isModalVisible} = this.state;

    this.setState({
      isModalVisible: !isModalVisible,
    });
  };

  onApplyFilterParams = (
    maxDistance: number,
    dishesTypes: Array<string>,
  ): void => {
    this.setState({
      isRequestingNewData: true,
      isModalVisible: false,
      isFirstRender: false,
      maxDistance,
      dishesTypes,
    });
  };

  renderFloatingActionButton = (): Object => (
    <FloatingActionButtonWrapper>
      <FloatingActionButton
        action={this.onToggleModal}
        color="primaryColor"
        name="tune"
      />
    </FloatingActionButtonWrapper>
  );

  render() {
    const {onSearchRestaurants, notFound, loading, error, data} = this.props;

    const {
      isRequestingNewData,
      isModalVisible,
      isFirstRender,
      dishesTypes,
      maxDistance,
    } = this.state;

    const shouldShowMessages = loading || isFirstRender || error || notFound;

    return (
      <Container>
        {shouldShowMessages && (
          <MessageWrapper>
            {loading && <Loading />}
            {isFirstRender && !loading && <Alert type={Types.INITIAL_SEARCH} />}
            {error && !loading && (
              <Alert type={Types.ERROR_SERVER_CONNECTION} />
            )}
            {notFound && !loading && <Alert type={Types.SEARCH_EMPTY} />}
          </MessageWrapper>
        )}
        {
          <RestaurantsList
            onSearchRestaurants={onSearchRestaurants}
            isRequestingNewData={isRequestingNewData}
            restaurants={data.restaurants === undefined ? [] : data.restaurants}
            dishesTypes={dishesTypes}
            maxDistance={maxDistance}
          />
        }
        {!loading && this.renderFloatingActionButton()}
        {isModalVisible && (
          <Modal
            onApplyFilterParams={this.onApplyFilterParams}
            lastDishesTypesChosen={dishesTypes}
            onToggleModal={this.onToggleModal}
            lastDistanceChosen={maxDistance}
          />
        )}
      </Container>
    );
  }
}

export default SearchRestaurants;
