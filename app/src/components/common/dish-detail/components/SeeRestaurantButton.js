// @flow

import React from 'react';
import { withNavigation } from 'react-navigation';

import { ContainerRestaurantButton, Wrapper, SeeText } from './style';

import CONSTANTS from '../../../../utils/CONSTANTS';

type Props = {
  restaurantId: string,
  navigation: Object,
};

const SeeRestaurantButton = ({ restaurantId, navigation }: Props): Object => (
  <ContainerRestaurantButton>
    <Wrapper
      onPress={() => navigation.navigate(CONSTANTS.ROUTE_RESTAURANT_DETAIL, {
        [CONSTANTS.NAVIGATION_PARAM_ID]: restaurantId,
      })
      }
    >
      <SeeText>SEE RESTAURANT</SeeText>
    </Wrapper>
  </ContainerRestaurantButton>
);

export default withNavigation(SeeRestaurantButton);
