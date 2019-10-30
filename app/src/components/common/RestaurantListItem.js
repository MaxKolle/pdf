// @flow

import React, { Fragment } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { withNavigation } from 'react-navigation';
import {
  RestaurantImage, RestaurantImageWrapper, Address, AddressIcon, AddressWrapper, Content,
  Name, CardContainer, ContentWrapper, DarkLayer,
} from './style';

import CONSTANTS from '../../utils/CONSTANTS';
import ReviewStars from './ReviewStars';

const renderRestaurantImage = (
  thumbnailImageURL: string,
  imageURL: string,
): Object => (
  <RestaurantImageWrapper>
    <RestaurantImage
      imageURL={imageURL}
    />
  </RestaurantImageWrapper>
);

const renderBottomRow = (address: string): Object => (
  <Fragment>
    <AddressWrapper>
      <AddressIcon />
      <Address>{address}</Address>
    </AddressWrapper>
  </Fragment>
);

const renderRestaurantInfo = (
  name: string,
  stars: number,
  address: string,
): Object => (
  <Content>
    <Name>{name}</Name>
    <ReviewStars
      shouldShowReviewsText={false}
      textColor="white"
      isSmall={false}
      stars={stars}
      reviews={0}
    />
    {renderBottomRow(address)}
  </Content>
);

type Props = {
  thumbnailImageURL: string,
  navigation: Object,
  imageURL: string,
  address: string,
  stars: number,
  name: string,
  id: string,
};

const RestaurantItemList = ({
  thumbnailImageURL,
  navigation,
  imageURL,
  address,
  stars,
  name,
  id,
}: Props): Object => (
  <CardContainer>
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(CONSTANTS.ROUTE_RESTAURANT_DETAIL, {
        [CONSTANTS.NAVIGATION_PARAM_ID]: id,
      })
      }
    >
      <ContentWrapper>
        {renderRestaurantImage(thumbnailImageURL, imageURL)}
        <DarkLayer />
        {renderRestaurantInfo(name, stars, address)}
      </ContentWrapper>
    </TouchableWithoutFeedback>
  </CardContainer>
);

export default withNavigation(RestaurantItemList);
