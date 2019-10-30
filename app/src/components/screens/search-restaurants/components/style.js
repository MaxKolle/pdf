

import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FloatingActionButtonWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('22%')}px;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('15%')}px;
  align-self: flex-end;
  position: absolute;
  margin-right: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

export const MessageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ListWrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

export const NumberRestaurantsFound = styled(Text)`
  margin-vertical: ${({ theme }) => theme.metrics.largeSize}px;
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5.5%')}px;
  font-family: CircularStd-Bold;
`;
