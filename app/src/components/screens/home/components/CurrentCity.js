// @flow

import React from 'react';
import {
  Container,
  Content,
  ChangeButton,
  ChangeButtonText,
  CityAndChangeButtonRow,
  CityText,
  CurrentLocationText,
  LocationIcon,
  LocationIconWrapper,
} from './style';

const HeaderCurrentCity = (): Object => (
  <Container>
    <LocationIconWrapper>
      <LocationIcon />
    </LocationIconWrapper>
    <Content>
      <CurrentLocationText>Your location</CurrentLocationText>
      <CityAndChangeButtonRow>
        <CityText>Johannesburg</CityText>
        <ChangeButton>
          <ChangeButtonText>Change</ChangeButtonText>
        </ChangeButton>
      </CityAndChangeButtonRow>
    </Content>
  </Container>
);

export default HeaderCurrentCity;
