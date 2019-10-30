// @flow

import React from 'react';
import {ButtonWrapper, ButtonText, Button} from './style';
import {withNavigation} from 'react-navigation';

import {ROUTE_NAMES} from '../../../../routes/index';

type Props = {
  navigation: Object,
};

const GetStartedButton = ({navigation}: Props): Object => (
  <ButtonWrapper>
    <Button onPress={() => navigation.navigate(ROUTE_NAMES.LOGIN)}>
      <ButtonText>GET STARTED</ButtonText>
    </Button>
  </ButtonWrapper>
);

export default withNavigation(GetStartedButton);
