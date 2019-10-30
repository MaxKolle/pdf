

import { Text, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import appStyles from '../../../../styles';


export const Container = styled(View)`
  width: 100%;
  padding: ${({ theme }) => theme.metrics.mediumSize}px
    ${({ theme }) => theme.metrics.largeSize}px
    ${({ theme }) => theme.metrics.smallSize}px
    ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const DescriptionText = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 4,
})`
  margin-bottom: ${({ theme }) => theme.metrics.largeSize}px;
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')};
  font-family: CircularStd-Book;
`;

export const DefaultText = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')};
  font-family: CircularStd-Book;
`;

export const SectionRow = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const RestaurantName = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  width: 75%;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6%')};
  font-family: CircularStd-Bold;
`;

export const CustomIcon = styled(Icon).attrs(({ name }) => ({
  size: 18,
  name,
}))`
  margin-left: -4px;
  margin-right: ${({ theme }) => theme.metrics.smallSize}px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ContainerHeader = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')}px;
`;

export const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightingDarkLayer};
`;

export const ContainerMenuList = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('45%')}px;
  height: 100%;
  margin-horizontal: ${({ theme }) => theme.metrics.smallSize};
`;

export const FlagPriceWrapper = styled(View)`
  align-self: flex-end;
`;

export const DarkLayerMenuList = styled(View)`
  width: 100%;
  height: 70%;
  padding: ${({ theme }) => theme.metrics.smallSize}px;
  position: absolute;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const DishImage = styled(FastImage).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
}))`
  width: 100%;
  height: 70%;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const DishTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('0.5%')}px;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Medium;
`;

const mapHeight = appStyles.metrics.getHeightFromDP('75%');

export const ContainerRestaurantAdd = styled(View)`
  flex: 1;
`;

export const MapContainer = styled(View)`
  width: 100%;
  height: ${mapHeight};
`;

export const FloatingActionButtonWrapper = styled(View)`
  align-self: flex-end;
  position: absolute;
  margin-top: ${mapHeight - 28}px;
  padding-right: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const FooterContainer = styled(View)`
  align-items: flex-start;
  justify-content: center;
  padding-top: ${appStyles.metrics.mediumSize}px;
  padding-left: ${appStyles.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StatusText = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'android' ? '5%' : '4.5%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
  font-family: CircularStd-Black;
`;

export const EstablishmentStatus = styled(Text)`
  color: ${({ theme }) => theme.colors.darkLayer};
  padding-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
  font-family: CircularStd-Medium;
`;

export const MarkerIcon = styled(Icon).attrs(({ name }) => ({
  size: 28,
  name,
}))`
  color: ${({ theme }) => theme.colors.primaryColor};
`;
