// @flow

import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import {
  ContainerFilterDishes, DisheImage, DisheTypeSelectButtonWrapper, DisheTypeText, ImageContentContainer, SelectionMarker,
} from './style';
import appStyles from '../../../../../styles';

type Props = {
  onRemoverDisheTypeFilter: Function,
  onAddDisheTypeFilter: Function,
  imageURI: string,
  title: string,
  id: string,
  isItemAlreadySelected: boolean,
  isFirst: boolean,
};

type State = {
  isSelected: boolean,
};

class FilterDishesListItem extends PureComponent<Props, State> {
  _selectorColor = new Animated.Value(0);
  _cardScale = new Animated.Value(0);
  _pressTimestamp = 0;

  state = {
    isSelected: false,
  };

  componentDidMount() {
    const { isItemAlreadySelected } = this.props;

    if (isItemAlreadySelected) {
      this.handleItemAlreadySelected();
    }
  }

  onSelectItem = (): void => {
    const shouldAllowPress = this.shouldAllowPress();

    if (!shouldAllowPress) {
      return;
    }

    const { onAddDisheTypeFilter, onRemoverDisheTypeFilter, id } = this.props;

    const { isSelected } = this.state;

    this.handleItemAnimations();

    const properCallback = isSelected
      ? onRemoverDisheTypeFilter
      : onAddDisheTypeFilter;

    this._pressTimestamp = Date.now();

    this.setState({
      isSelected: !isSelected,
    });

    properCallback(id);
  };

  shouldAllowPress = (): boolean => {
    const now = Date.now();

    const passedTimeEnough = now - this._pressTimestamp >= 1200;

    return passedTimeEnough;
  };

  handleItemAnimations = (): void => {
    const { isSelected } = this.state;

    const colorValue = isSelected ? 0 : 1;

    Animated.sequence([
      Animated.timing(this._cardScale, {
        toValue: 0.1,
        duration: 100,
        easing: Easing.ease,
      }),

      Animated.timing(this._cardScale, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
      }),

      Animated.timing(this._selectorColor, {
        toValue: colorValue,
        duration: 300,
      }),
    ]).start();
  };

  handleItemAlreadySelected = (): void => {
    const animateItemColor = Animated.timing(this._selectorColor, {
      toValue: 1,
      duration: 300,
    });

    this.setState(
      {
        isSelected: true,
      },
      () => animateItemColor.start(),
    );
  };

  render() {
    const { imageURI, isFirst, title } = this.props;

    return (
      <ContainerFilterDishes
        isFirst={isFirst}
      >
        <SelectionMarker
          style={{
            backgroundColor: this._selectorColor.interpolate({
              outputRange: [
                appStyles.colors.white,
                appStyles.colors.primaryColor,
              ],
              inputRange: [0, 1],
            }),
            transform: [
              {
                scaleX: this._cardScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
              {
                scaleY: this._cardScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          }}
        >
          <ImageContentContainer>
            <DisheImage
              uri={imageURI}
            />
          </ImageContentContainer>
          <TouchableWithoutFeedback
            onPress={() => this.onSelectItem()}
          >
            <DisheTypeSelectButtonWrapper>
              <DisheTypeText>{title}</DisheTypeText>
            </DisheTypeSelectButtonWrapper>
          </TouchableWithoutFeedback>
        </SelectionMarker>
      </ContainerFilterDishes>
    );
  }
}

export default FilterDishesListItem;
