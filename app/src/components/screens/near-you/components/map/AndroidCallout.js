// @flow

import React from 'react';
import {Wrapper, RestaurantName} from './style';

type Props = {
  restaurantName: string,
};

const AndroidCallout = ({restaurantName}: Props): Object => (
  <Wrapper>
    <RestaurantName>{restaurantName}</RestaurantName>
  </Wrapper>
);

export default AndroidCallout;
