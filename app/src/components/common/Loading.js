// @flow

import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { LoadingWrapper } from './style';
import appStyles from '../../styles';

const Loading = (): Object => (
  <LoadingWrapper>
    <ActivityIndicator
      size={Platform.OS === 'ios' ? 'small' : 'large'}
      color={appStyles.colors.primaryColor}
    />
  </LoadingWrapper>
);

export default Loading;
