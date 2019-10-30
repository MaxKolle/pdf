

import { Platform, Text, View } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import appStyles from '../../../../../../styles';


const getTextSize = (type: string): number => {
  const sizes = {
    title: Platform.OS === 'android' ? '5%' : '4.5%',
    default: Platform.OS === 'android' ? '4%' : '3.5%',
  };

  return appStyles.metrics.getWidthFromDP(sizes[type]);
};

export const Container = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('18%')}px;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
`;

export const DishImageWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getHeightFromDP('18%')}px;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  overflow: hidden;
`;

export const DishImage = styled(FastImage).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
  resizeMode: 'cover',
}))`
  width: ${({ theme }) => theme.metrics.getHeightFromDP('18%')}px;
  height: 100%;
`;

export const TextContentContainer = styled(View)`
  width: ${({ theme }) => theme.metrics.width
  - (theme.metrics.extraLargeSize + theme.metrics.getHeightFromDP('18%'))}px;
  justify-content: center;
  margin-left: ${({ theme }) => theme.metrics.smallSize}px;
  padding-right: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const TopRowContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DisheTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${getTextSize('title')}px;
  font-family: CircularStd-Black;
  width: 70%;
`;

export const DisheDescription = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${getTextSize('default')}px;
  font-family: CircularStd-Book;
`;

export const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
