// @flow

import React, { Component } from 'react';
import { Animated, FlatList } from 'react-native';
import { ListWrapper, NumberRestaurantsFound } from './style';

import { withNavigation } from 'react-navigation';

import RestaurantListItem from '../../../../components/common/RestaurantListItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

type Props = {
  onSearchRestaurants: Function,
  restaurants: Array<Object>,
};

class RestaurantList extends Component<Props, {}> {
  _restaurantListMarginTop = new Animated.Value(0);
  _restaurantListHeight = 0;

  componentDidMount() {
    this.handleListAnimation(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.handleListAnimation(nextProps);
  }

  handleListAnimation = ({
    isRequestingNewData,
    dishesTypes,
    maxDistance,
  }: Props): void => {
    if (isRequestingNewData) {
      this.hideRestaurantsList(dishesTypes, maxDistance);
    } else {
      this.showRestaurantList();
    }
  };

  hideRestaurantsList = (
    dishesTypes: Array<string>,
    maxDistance: number,
  ): void => {
    const { onSearchRestaurants } = this.props;

    Animated.timing(this._restaurantListMarginTop, {
      toValue: this._restaurantListHeight,
      duration: 500,
      useNativeDriver: true,
    }).start(() => onSearchRestaurants(dishesTypes, maxDistance));
  };

  showRestaurantList = (): void => {
    Animated.timing(this._restaurantListMarginTop, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { restaurants } = this.props;

    return (
      <ListWrapper>
        <AnimatedFlatList
          style={{
            marginTop: this._restaurantListMarginTop._value,
            transform: [
              {
                translateY: this._restaurantListMarginTop.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          }}
          onLayout={(event: Object): void => {
            const { height } = event.nativeEvent.layout;
            this._restaurantListHeight = height;
          }}
          ListHeaderComponent={() => !!restaurants
            && restaurants.length > 0 && (
              <NumberRestaurantsFound>
                {`${restaurants.length} ${
                  restaurants.length > 1
                    ? 'Restaurants found'
                    : 'Restaurant found'
                }`}
              </NumberRestaurantsFound>
          )
          }
          renderItem={({ item }) => (
            <RestaurantListItem
              address={item.location.address}
              imageURL={item.mediumImageURL}
              stars={item.stars}
              name={item.name}
              id={item.id}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={restaurants}
        />
      </ListWrapper>
    );
  }
}

export default withNavigation(RestaurantList);
