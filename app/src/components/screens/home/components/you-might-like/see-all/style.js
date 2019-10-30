

import {
  FlatList, Platform, Text, View,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import appStyles from '../../../../../../styles';


export const List = styled(FlatList)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const getTextSize = (type: string): number => {
  const sizes = {
    title: Platform.OS === 'android' ? '6.5%' : '5%',
    default: Platform.OS === 'android' ? '5%' : '4.5%',
  };

  return appStyles.metrics.getWidthFromDP(sizes[type]);
};

export const Container = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')}px;
  margin-bottom: ${({ hasBottomMargin, theme }) => (hasBottomMargin ? theme.metrics.extraSmallSize : 0)}px;
`;

export const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.darkLayer};
`;

export const FlagPriceWrapper = styled(View)`
  align-self: flex-end;
`;

export const DisheImageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const DisheImage = styled(FastImage).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
  resizeMode: 'cover',
}))`
  width: 100%;
  height: 100%;
`;

export const TextContentWrapper = styled(View)`
  width: 100%;
  height: 80%;
  justify-content: flex-end;
`;

export const DisheTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  width: 100%;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: 20px;
  font-family: CircularStd-Black;
`;

export const DistanceWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('1%')}px;
`;

export const RestaurantDistance = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${getTextSize('default')}px;
  font-family: CircularStd-Medium;
`;

export const MapIcon = styled(Icon).attrs({
  name: 'map-marker',
  size: 18,
})`
  margin-right: ${({ theme }) => theme.metrics.smallSize}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;
