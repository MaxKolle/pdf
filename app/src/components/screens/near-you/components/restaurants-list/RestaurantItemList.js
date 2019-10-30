// @flow

import React, { Fragment } from 'react';
import {
  TouchableOpacity, Platform,
} from 'react-native';
import {
  RestaurantStatus, DistanceWrapper, DistanceText, Icon, TopRowContentWrapper, BottomRowContentWrapper,
  Container, Card, RestaurantDescriptionWrapper, RestaurantDescriptionText,
} from './style';
import { withNavigation } from 'react-navigation';

import ReviewStars from '../../../../../components/common/ReviewStars';
import CONSTANTS from '../../../../../utils/CONSTANTS';
import appStyles from '../../../../../styles';

const renderRestaurantStatus = (isOpen: boolean): Object => {
  const restaurantStatus = {
    open: {
      color: appStyles.colors.green,
      text: 'Open now',
    },
    closed: {
      color: appStyles.colors.red,
      text: 'Closed now',
    },
  };

  const status = isOpen ? 'open' : 'closed';

  return (
    <RestaurantStatus
      color={restaurantStatus[status].color}
    >
      {restaurantStatus[status].text}
    </RestaurantStatus>
  );
};

const renderDistanceContent = (distance: number): Object => (
  <DistanceWrapper>
    <Icon
      color={appStyles.colors.primaryColor}
      name="directions"
      size={22}
    />
    <DistanceText>{`${distance} km`}</DistanceText>
  </DistanceWrapper>
);

const renderTopRowContent = (stars: number, distance: number): Object => (
  <TopRowContentWrapper>
    <ReviewStars
      textColor="darkText"
      stars={stars}
    />
    {renderDistanceContent(distance)}
  </TopRowContentWrapper>
);

const renderBottomRowContent = (
  navigation: Function,
  isOpen: boolean,
  id: string,
): Object => (
  <BottomRowContentWrapper>
    {renderRestaurantStatus(isOpen)}
    <TouchableOpacity
      onPress={() => navigation.navigate(CONSTANTS.ROUTE_RESTAURANT_DETAIL, {
        [CONSTANTS.NAVIGATION_PARAM_ID]: id,
      })
      }
    >
      <Icon
        color={appStyles.colors.darkText}
        name="arrow-right"
        size={28}
      />
    </TouchableOpacity>
  </BottomRowContentWrapper>
);

type Props = {
  navigation: Function,
  description: string,
  distance: number,
  isOpen: boolean,
  stars: number,
  id: string,
};

const RestaurantItemList = ({
  description,
  navigation,
  distance,
  isOpen,
  stars,
  id,
}: Props): Object => (
  <Container>
    <Card
      style={{
        ...Platform.select({
          ios: {
            elevation: 1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 3,
            shadowOpacity: 0.35,
          },
          android: {
            elevation: 4,
            shadowOffset: {
              width: 1,
              height: -3,
            },
            shadowRadius: 2,
            shadowOpacity: 5.0,
          },
        }),
      }}
    >
      <Fragment>
        {renderTopRowContent(stars, distance)}
        <RestaurantDescriptionWrapper>
          <RestaurantDescriptionText>{description}</RestaurantDescriptionText>
        </RestaurantDescriptionWrapper>
        {renderBottomRowContent(navigation, isOpen, id)}
      </Fragment>
    </Card>
  </Container>
);

export default withNavigation(RestaurantItemList);
