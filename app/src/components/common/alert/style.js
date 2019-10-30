
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';


export const Container = styled(View)`
  flex: 1;
  padding-top: ${({ theme, withExtraTopPadding }) => (withExtraTopPadding ? theme.metrics.getHeightFromDP('10%') : 0)}px;
  align-items: center;
`;

export const Wrapper = styled(View)`
  justify-content: center;
  align-items: center;
  margin-horizontal: ${({ theme }) => theme.metrics.extraLargeSize}px;
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('8%')}px;
`;

export const FoodNotFoundIcon = styled(Icon).attrs(({ iconName }) => ({
  name: iconName,
  size: 120,
}))`
  margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const TopText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: CircularStd-Black;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('8%')}px;
`;

export const BottomText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  font-family: CircularStd-Bold;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5.5%')}px;
`;

export const MiddleText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.subText};
  text-align: center;
  font-family: CircularStd-Medium;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6%')}px;
`;
