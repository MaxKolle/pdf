

import { Platform, Text, View } from 'react-native';

import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

import appStyles from '../../../../../../styles';


export const Container = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')};
  margin-top: ${({ theme, isFirst }) => (isFirst ? 0 : theme.metrics.extraSmallSize)}px;
`;

export const DarkWrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.darkLayer};
`;

export const EventImage = styled(FastImage).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
  resizeMode: 'cover',
}))`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const getTextSize = (type: string): number => {
  const types = {
    restaurantsParticipating: Platform.OS === 'android' ? '5%' : '4.2%',
    title: Platform.OS === 'android' ? '5.5%' : '6%',
  };

  return appStyles.metrics.getWidthFromDP(types[type]);
};

export const EventTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: ${() => getTextSize('title')}px;
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const EventDescription = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.3%')}px;
  font-family: CircularStd-Medium;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const RestaurantParticipatingText = styled(Text)`
  font-size: ${() => getTextSize('restaurantsParticipating')}px;
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const ContainerInYourCity = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
