// @flow

import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { Container, BottomContent, IntroScreenWrapper } from './style';
import BottomPagination from './components/BottomPagination';
import GetStartedButton from './components/GetStartedButton';
import { Screens, TYPES } from './components/SCREENS_TYPES';
import IntroScreen from './components/IntroScreen';

import { ROUTE_NAMES } from '../../../routes/index';
import appStyles from '../../../styles';

const PAGES = [
  Screens[TYPES.FIND_RESTAURANTS],
  Screens[TYPES.WITH_YOUR_TASTE],
  Screens[TYPES.CHOOSE_YOUR_MEAL],
];

type Props = {
  navigation: Object,
};

type State = {
  currentPageIndex: number,
};

class OnboardingIntro extends Component<Props, State> {
  state = {
    currentPageIndex: 0,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  onIncrementPageIndex = (): void => {
    const { currentPageIndex } = this.state;

    this.setState(
      {
        currentPageIndex: currentPageIndex + 1,
      },
      () => this.onSlidePage(),
    );
  };

  onDecrementPageIndex = (): void => {
    const { currentPageIndex } = this.state;

    this.setState(
      {
        currentPageIndex: currentPageIndex - 1,
      },
      () => this.onSlidePage(),
    );
  };

  onSlidePage = (): void => {
    const { currentPageIndex } = this.state;

    this._pagesListRef.scrollToIndex({
      animated: true,
      index: currentPageIndex,
    });
  };

  onFlatlistMomentumScrollEnd = (event: Object): void => {
    const { contentOffset } = event.nativeEvent;

    const isHorizontalSwipeMovement = contentOffset.x > 0;
    const currentPageIndex = isHorizontalSwipeMovement
      ? Math.ceil(contentOffset.x / appStyles.metrics.width)
      : 0;

    this.setState({
      currentPageIndex,
    });
  };

  renderPages = (): Object => (
    <FlatList
      onMomentumScrollEnd={event => this.onFlatlistMomentumScrollEnd(event)}
      renderItem={({ item }) => (
        <IntroScreenWrapper>
          <IntroScreen
            {...item}
          />
        </IntroScreenWrapper>
      )}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.title}
      ref={(ref: any): void => {
        this._pagesListRef = ref;
      }}
      bounces={false}
      pagingEnabled
      data={PAGES}
      horizontal />
  );

  renderPaginationController = (): Object => {
    const { currentPageIndex } = this.state;
    const { navigation } = this.props;

    const PAGINATION_CONTROLLERS = [
      <BottomPagination
        onPressRightButton={this.onIncrementPageIndex}
        onPressLeftButton={() => navigation.navigate(ROUTE_NAMES.LOGIN)}
        currentIndex={0}
        numberOfDots={3}
        withSkip
      />,
      <BottomPagination
        onPressRightButton={this.onIncrementPageIndex}
        onPressLeftButton={this.onDecrementPageIndex}
        currentIndex={1}
        numberOfDots={3} />,
      <GetStartedButton />,
    ];

    const Controller = PAGINATION_CONTROLLERS[currentPageIndex];

    return <BottomContent>{Controller}</BottomContent>;
  };

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
          animated
        />
        {this.renderPages()}
        {this.renderPaginationController()}
      </Container>
    );
  }
}

export default OnboardingIntro;
