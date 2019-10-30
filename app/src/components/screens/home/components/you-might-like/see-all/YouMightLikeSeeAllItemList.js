// @flow

import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  TextContentWrapper,
  DisheTitle,
  DistanceWrapper,
  MapIcon,
  RestaurantDistance,
  FlagPriceWrapper,
  DisheImageWrapper,
  DisheImage,
  DarkLayer,
} from './style';
import {withNavigation} from 'react-navigation';

import {ROUTE_NAMES} from '../../../../../../components/screens/home/routes';
import ReviewStars from '../../../../../../components/common/ReviewStars';
import FlagPrice from '../../../../../../components/common/FlagPrice';

import CONSTANTS from '../../../../../../utils/CONSTANTS';

type Props = {
  hasBottomMargin: boolean,
  navigation: Function,
  imageURL: string,
  reviews: number,
  title: string,
  price: number,
  stars: number,
  id: string,
};

const renderTextContent = (
  title: string,
  stars: number,
  reviews: number,
): Object => (
  <TextContentWrapper>
    <DisheTitle>{title}</DisheTitle>
    <ReviewStars
      textColor="defaultWhite"
      shouldShowReviewsText
      reviews={reviews}
      stars={stars}
    />
    <DistanceWrapper>
      <MapIcon />
      <RestaurantDistance>
        {`${parseFloat(reviews / stars).toFixed(1)} km from you`}
      </RestaurantDistance>
    </DistanceWrapper>
  </TextContentWrapper>
);

const RecommendedSeeAllItemList = ({
  hasBottomMargin,
  navigation,
  imageURL,
  reviews,
  price,
  title,
  stars,
  id,
}: Props): Object => (
  <TouchableWithoutFeedback
    onPress={() => {
      navigation.navigate(ROUTE_NAMES.DISH_DETAIL, {
        [CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE]: true,
        [CONSTANTS.NAVIGATION_PARAM_ID]: id,
      });
    }}>
    <Container hasBottomMargin={hasBottomMargin}>
      <DisheImageWrapper>
        <DisheImage imageURL={imageURL} />
      </DisheImageWrapper>
      <DarkLayer>
        <FlagPriceWrapper>
          <FlagPrice price={price} />
        </FlagPriceWrapper>
        {renderTextContent(title, stars, reviews)}
      </DarkLayer>
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(RecommendedSeeAllItemList);
