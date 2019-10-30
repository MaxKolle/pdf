

import { View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';


export const ListWrapper = styled(View)`
  flex: 1;
  position: absolute;
`;

export const Container = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('82%')}px;
  margin-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('9%')}px;
  align-self: flex-end;
`;

export const Card = styled(View)`
  width: 100%;
  margin-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  padding-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.defaultWhite};
  border-radius: 4px;
`;

export const TopRowContentWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const BottomRowContentWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

export const DistanceWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DistanceText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText}
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'ios' ? '4%' : '4.3%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
  font-family: CircularStd-Medium;
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

export const RestaurantDescriptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'ios' ? '4%' : '4.3%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
  font-family: CircularStd-Medium;
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

export const RestaurantDescriptionWrapper = styled(View)`
  width: 100%;
  margin-vertical: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const RestaurantStatus = styled(Text)`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'ios' ? '4%' : '4.3%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
  font-family: CircularStd-Medium;
`;

export const Icon = styled(Icons).attrs(({
  color, theme, name, size,
}) => ({
  color: theme.colors[color],
  name,
  size,
}))``;
