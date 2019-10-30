// @flow

import React, { Component, Fragment } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
  ContainerPopularSection, DisheImage, DisheTitle, DarkLayer, FlagPriceWrapper, BottomWrapper, ImageShimmerOverlay,
} from './style';
import { withNavigation } from 'react-navigation';

import { ROUTE_NAMES } from '../../../../../../components/screens/home/routes';
import ReviewStars from '../../../../../../components/common/ReviewStars';
import FlagPrice from '../../../../../../components/common/FlagPrice';
import CONSTANTS from '../../../../../../utils/CONSTANTS';

type Props = {
  navigation: Function,
  isFirst: boolean,
  imageURL: string,
  title: string,
  stars: number,
  price: number,
  id: string,
};

type State = {
  isDisheImageLoaded: boolean,
};

class PopularSectionListItem extends Component<Props, State> {
  state = {
    isDisheImageLoaded: false,
  };

  onDisheImageLoaded = () => {
    this.setState({
      isDisheImageLoaded: true,
    });
  };

  renderDisheImage = (): Object => {
    const { imageURL } = this.props;

    return (
      <Fragment>
        <DisheImage
          onLoad={() => this.onDisheImageLoaded()}
          imageURL={imageURL}
        />
      </Fragment>
    );
  };

  renderBottomContent = () => {
    const { title, stars, price } = this.props;

    return (
      <Fragment>
        <DarkLayer>
          <FlagPriceWrapper>
            <FlagPrice
              price={price}
            />
          </FlagPriceWrapper>
        </DarkLayer>
        <BottomWrapper>
          <DisheTitle>{title}</DisheTitle>
          <ReviewStars
            shouldShowReviewsText={false}
            textColor="white"
            isSmall={false}
            stars={stars}
            reviews={0}
          />
        </BottomWrapper>
      </Fragment>
    );
  };

  render() {
    const { navigation, isFirst, id } = this.props;
    const { isDisheImageLoaded } = this.state;

    return (
      <Fragment>
        <ContainerPopularSection
          isFirst={isFirst}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.DISH_DETAIL, {
                [CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE]: true,
                [CONSTANTS.NAVIGATION_PARAM_ID]: id,
              });
            }}
            disabled={!isDisheImageLoaded}
          >
            <View>
              {this.renderDisheImage()}
              {this.renderBottomContent()}
            </View>
          </TouchableWithoutFeedback>
          {!isDisheImageLoaded && <ImageShimmerOverlay />}
        </ContainerPopularSection>
      </Fragment>
    );
  }
}

export default withNavigation(PopularSectionListItem);
