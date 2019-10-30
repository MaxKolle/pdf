

import {
  Image,
  View,
  Text,
} from 'react-native';

import styled from 'styled-components';


export const Container = styled(View)`
  flex: 1;
`;

export const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ContentWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.width}px;
  height: 100%;
  padding-horizontal: ${({ theme }) => 2 * theme.metrics.extraLargeSize}px;
`;

export const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.intermediateDarkLayer};
`;

export const Title = styled(Text)`
  font-family: Modesta-Script;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('11.5%')}px;
`;

export const TitleWrapper = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-vertical: ${({ theme }) => theme.metrics.getHeightFromDP('8%')}px;
`;

export const BackgroundImage = styled(Image).attrs({
  source: { uri: 'login' },
  resizeMode: 'cover',
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const NavigationTitleWrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('10%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${({ theme }) => 2 * theme.metrics.extraLargeSize}px;
`;
