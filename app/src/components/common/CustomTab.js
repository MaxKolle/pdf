// @flow

import React, {Component} from 'react';
import {Animated, FlatList} from 'react-native';

import appStyles from '../../styles';
import {
  Container,
  Cell,
  ListWrapper,
  Marker,
  MarkerWrapper,
  OptionText,
} from './style';

type Props = {
  onChangeMenuIndex: Function,
  contentWidth: number,
  data: Array<Object>,
  theme: string,
};

type State = {
  itemSelectedIndex: number,
  clickTimestamp: number,
  cellWidth: number,
};

class CustomTab extends Component<Props, State> {
  _markerPaddingLeft = new Animated.Value(0);
  _flatListRef = null;

  state = {
    itemSelectedIndex: 0,
    clickTimestamp: 0,
    cellWidth: 0,
  };

  componentDidMount() {
    const cellWidth = this.getCellWidth();

    this.setState({
      cellWidth,
    });
  }

  onCellPress = (newIndexSelected: number): void => {
    const shouldAllowPress = this.shouldAllowPress();
    if (!shouldAllowPress) {
      return;
    }

    const {onChangeMenuIndex} = this.props;
    const {itemSelectedIndex} = this.state;

    if (newIndexSelected === itemSelectedIndex) {
      return;
    }

    onChangeMenuIndex(newIndexSelected);

    this.onMoveList(newIndexSelected);

    this.setMarkerPosition(newIndexSelected);

    this.setState({
      itemSelectedIndex: newIndexSelected,
      clickTimestamp: Date.now(),
    });
  };

  onMoveList = (indexSelected: number): void => {
    const {data} = this.props;

    const isFirstCell = indexSelected === 0;
    const isLastCell = indexSelected === data.length - 1;

    if (isFirstCell || isLastCell) {
      return;
    }

    this._flatListRef.scrollToIndex({
      animated: true,
      index: indexSelected - 1,
    });
  };

  getCellWidth = (): number => {
    const {data, contentWidth} = this.props;
    const datasetLength = data.length;
    const cellWidth =
      datasetLength >= 3 ? contentWidth / 3 : contentWidth / datasetLength;

    return cellWidth;
  };

  setMarkerPosition = (newIndexSelected: number): any => {
    const {itemSelectedIndex, cellWidth} = this.state;
    const {data} = this.props;

    const shouldNotRenderMarker =
      itemSelectedIndex > 0 &&
      itemSelectedIndex < data.length - 1 &&
      (newIndexSelected > 0 && newIndexSelected < data.length - 1);

    if (shouldNotRenderMarker) {
      return;
    }

    let newMarkerMargin = cellWidth;

    const isFirstCellSelected = newIndexSelected === 0;
    if (isFirstCellSelected) {
      newMarkerMargin = 0;
    }

    const isMiddleCellSelected = newIndexSelected === 1;
    if (isMiddleCellSelected) {
      newMarkerMargin = cellWidth;
    }

    const isLastCellSelected = newIndexSelected === data.length - 1;
    if (isLastCellSelected) {
      const marginFactor = data.length < 3 ? 1 : 2;
      newMarkerMargin = cellWidth * marginFactor;
    }

    Animated.timing(this._markerPaddingLeft, {
      toValue: newMarkerMargin,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  getThemeColors = (themeSelected: string): Object => {
    const themes = {
      white: {
        markerColor: appStyles.colors.red,
        cellColor: appStyles.colors.defaultWhite,
        activeTextColor: appStyles.colors.red,
        inactiveTextoColor: appStyles.colors.subText,
      },
      gray: {
        markerColor: appStyles.colors.red,
        cellColor: appStyles.colors.lightGray,
        activeTextColor: appStyles.colors.red,
        inactiveTextoColor: appStyles.colors.subText,
      },
      red: {
        markerColor: appStyles.colors.defaultWhite,
        cellColor: appStyles.colors.red,
        activeTextColor: appStyles.colors.defaultWhite,
        inactiveTextoColor: appStyles.colors.subText,
      },
    };

    return themes[themeSelected];
  };

  shouldAllowPress = () => {
    const {clickTimestamp} = this.state;
    const now = Date.now();

    const passedTimeEnough = now - clickTimestamp >= 600;

    return passedTimeEnough;
  };

  renderList = (
    cellColor: string,
    activeTextColor: string,
    inactiveTextoColor: string,
  ): Object => {
    const {itemSelectedIndex, cellWidth} = this.state;
    const {data} = this.props;

    return (
      <ListWrapper>
        <FlatList
          ref={ref => {
            this._flatListRef = ref;
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          extraData={this.state}
          data={data}
          horizontal
          renderItem={({item, index}) => (
            <Cell
              onPress={() => {
                this.onCellPress(index);
              }}
              color={cellColor}
              width={cellWidth}>
              <OptionText
                color={
                  itemSelectedIndex === index
                    ? activeTextColor
                    : inactiveTextoColor
                }>
                {item.title}
              </OptionText>
            </Cell>
          )}
        />
      </ListWrapper>
    );
  };

  renderMarker = (markerColor: string) => {
    const {itemSelectedIndex, cellWidth} = this.state;
    const {contentWidth} = this.props;

    return (
      <MarkerWrapper
        width={contentWidth}
        style={{
          paddingLeft: this._markerPaddingLeft._value,
          transform: [
            {
              translateX: this._markerPaddingLeft.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}>
        <Marker
          currentIndex={itemSelectedIndex}
          color={markerColor}
          width={cellWidth}
        />
      </MarkerWrapper>
    );
  };

  render() {
    const {theme} = this.props;

    const {
      inactiveTextoColor,
      activeTextColor,
      markerColor,
      cellColor,
    } = this.getThemeColors(theme);

    return (
      <Container color={cellColor}>
        {this.renderList(cellColor, activeTextColor, inactiveTextoColor)}
        {this.renderMarker(markerColor)}
      </Container>
    );
  }
}

export default CustomTab;
