// @flow

import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {withNavigation} from 'react-navigation';

import {
  ContainerMightLike,
  ImageShimmerOverlay,
  ContentContainer,
  DisheImage,
  PriceWrapper,
  BottomContentWrapper,
  DisheTitle,
  DistanceWrapper,
  DistanceText,
  DistanceIcon,
} from './style';

import {ROUTE_NAMES} from '../../../../../../components/screens/home/routes';
import ReviewStars from '../../../../../../components/common/ReviewStars';
import FlagPrice from '../../../../../../components/common/FlagPrice';
import CONSTANTS from '../../../../../../utils/CONSTANTS';

type Props = {
  navigation: Function,
  imageURL: string,
  isFirst: boolean,
  reviews: number,
  price: number,
  stars: number,
  title: string,
  id: string,
};

type State = {
  isDisheImageLoaded: boolean,
};

class YouMightLikeSectionListItem extends Component<Props, State> {
  state = {
    isDisheImageLoaded: false,
  };

  onDisheImageLoaded = () => {
    this.setState({
      isDisheImageLoaded: true,
    });
  };

  renderFoodPrice = () => {
    const {price} = this.props;

    return (
      <PriceWrapper>
        <FlagPrice price={price} />
      </PriceWrapper>
    );
  };

  renderBottomContent = () => {
    const {reviews, title, stars} = this.props;

    return (
      <BottomContentWrapper>
        <DisheTitle>{title}</DisheTitle>
        <ReviewStars
          textColor="defaultWhite"
          shouldShowReviewsText
          reviews={reviews}
          stars={stars}
          isSmall
        />
        <DistanceWrapper>
          <DistanceIcon />
          <DistanceText>
            {`${parseFloat(reviews / stars).toFixed(1)} km from you`}
          </DistanceText>
        </DistanceWrapper>
      </BottomContentWrapper>
    );
  };

  render() {
    const {isDisheImageLoaded} = this.state;
    const {navigation, imageURL, isFirst, id} = this.props;

    return (
      <ContainerMightLike isFirst={isFirst}>
        <DisheImage
          onLoad={() => this.onDisheImageLoaded()}
          imageURL={imageURL}
        />
        <ContentContainer>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.DISH_DETAIL, {
                [CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE]: true,
                [CONSTANTS.NAVIGATION_PARAM_ID]: id,
              });
            }}>
            <View>
              {this.renderFoodPrice()}
              {this.renderBottomContent()}
            </View>
          </TouchableWithoutFeedback>
        </ContentContainer>
        {!isDisheImageLoaded && <ImageShimmerOverlay />}
      </ContainerMightLike>
    );
  }
}

export default withNavigation(YouMightLikeSectionListItem);
