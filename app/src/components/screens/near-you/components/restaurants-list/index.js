// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListWrapper } from './style';
import appStyles from '../../../../../styles';

import RestaurantItemList from './RestaurantItemList';

type Props = {
  turnOffMoveRestaurantList: Function,
  shouldMoveRestaurantList: boolean,
  indexRestaurantSelected: number,
  restaurants: Array<Object>,
  onSelectMarker: Function,
};

const ITEM_LIST_WIDTH = appStyles.metrics.width;

class RestaurantList extends Component<Props, {}> {
  _restaurantListRef = {};

  componentDidUpdate() {
    debugger;
    const {
      turnOffMoveRestaurantList,
      shouldMoveRestaurantList,
      indexRestaurantSelected,
    } = this.props;

    if (shouldMoveRestaurantList) {
      this.onChangeListIndex(indexRestaurantSelected);
      turnOffMoveRestaurantList();
    }
  }

  onChangeListIndex = (index: number): void => {
    debugger;
    const { restaurants } = this.props;

    if (index >= restaurants.length) {
      return;
    }

    this._restaurantListRef.scrollToIndex({ animated: true, index });
  };

  onFlatlistMomentumScrollEnd = (event: Object): void => {
    debugger;
    const { onSelectMarker } = this.props;
    const { contentOffset } = event.nativeEvent;

    const isHorizontalSwipeMovement = contentOffset.x > 0;
    const indexItemSelected = isHorizontalSwipeMovement
      ? Math.ceil(contentOffset.x / appStyles.metrics.width)
      : 0;

    onSelectMarker(indexItemSelected);
  };

  render() {
    const { restaurants } = this.props;
    debugger;
    return (
      <ListWrapper>
        <FlatList
          onMomentumScrollEnd={event => this.onFlatlistMomentumScrollEnd(event)}
          renderItem={({ item }) => (
            <RestaurantItemList
              description={item.description}
              distance={5}//{item.distance}
              isOpen={item.isOpen}
              stars={4}//{item.stars}
              name={item.name}
              id={item.id}
            />
          )}
          getItemLayout={(data, index) => ({
            length: ITEM_LIST_WIDTH,
            offset: ITEM_LIST_WIDTH * index,
            index,
          })}
          ref={(ref: any): void => {
            this._restaurantListRef = ref;
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          extraData={this.state}
          data={restaurants}
          pagingEnabled
          horizontal
        />
      </ListWrapper>
    );
  }
}

export default RestaurantList;
