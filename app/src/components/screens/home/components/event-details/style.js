import {Platform, Text, View} from 'react-native';
import styled from 'styled-components';
import appStyles from '../../../../../styles';

const getTextSize = (type: string): number => {
  const types = {
    restaurantsParticipating: Platform.OS === 'android' ? '5%' : '4.2%',
    title: Platform.OS === 'android' ? '5.5%' : '6%',
  };

  return appStyles.metrics.getWidthFromDP(types[type]);
};

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.defaultWhite};
`;

export const ListWrapper = styled(View)`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.metrics.extraSmallSize}px;
  padding-top: ${({theme}) => theme.metrics.extraSmallSize}px;
`;

export const ImageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const HeaderCotainer = styled(View)`
  width: 100%;
  height: ${({theme}) => {
    const percentage = Platform.OS === 'android' ? '33%' : '30%';
    return theme.metrics.getHeightFromDP(percentage);
  }}px;
  justify-content: flex-end;
`;

export const DarkWrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: ${({theme}) => theme.metrics.largeSize}px;
  background-color: ${({theme}) => theme.colors.darkLayer};
`;

export const EventTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${({theme}) => theme.colors.defaultWhite};
  font-size: ${() => getTextSize('title')}px;
  font-family: CircularStd-Black;
`;

export const EventDescription = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: ${({theme}) => theme.metrics.extraSmallSize}px;
  margin-bottom: ${({theme}) => theme.metrics.smallSize}px;
  color: ${({theme}) => theme.colors.defaultWhite};
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('4.3%')}px;
  font-family: CircularStd-Medium;
`;

export const RestaurantParticipatingText = styled(Text)`
  font-size: ${() => getTextSize('restaurantsParticipating')}px;
  font-family: CircularStd-Black;
  color: ${({theme}) => theme.colors.defaultWhite};
`;
