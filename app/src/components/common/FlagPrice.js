// @flow

import React from 'react';
import {Wrapper, Price} from './style';

type Props = {
  price: number,
};

const PriceFlag = ({price}: Props): Object => (
  <Wrapper>
    <Price>{`R ${parseFloat(price).toFixed(2)}`}</Price>
  </Wrapper>
);

export default PriceFlag;
