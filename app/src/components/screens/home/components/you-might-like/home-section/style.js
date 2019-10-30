

import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';


export const Container = styled(View)`
  justify-content: space-between;
  width: 100%;
`;

export const ListWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
`;


export const ContainerMightLike = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('50%')};
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')};
  margin-left: ${({ theme, isFirst }) => (isFirst ? theme.metrics.largeSize : 0)}px;
  margin-right: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const ImageShimmerOverlay = styled(ShimmerPlaceholder).attrs({
  visible: false,
  autoRun: true,
})`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  position: absolute;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightDarkLayer};
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
`;

export const DisheImage = styled(Image).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('50%')};
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')};
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  position: absolute;
`;

export const PriceWrapper = styled(View)`
  width: 100%;
  height: 30%;
  align-items: flex-end;
`;

export const BottomContentWrapper = styled(View)`
  width: 100%;
  height: 70%;
  justify-content: flex-end;
`;

export const DisheTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Black;
`;

export const DistanceWrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('3%')};
  margin-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
  flex-direction: row;
  align-items: center;
`;

export const DistanceText = styled(Text)`
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')};
  font-family: CircularStd-Bold;
`;

export const DistanceIcon = styled(Icon).attrs(({ theme }) => ({
  color: theme.colors.defaultWhite,
  name: 'map-marker',
  size: 16,
}))``;
