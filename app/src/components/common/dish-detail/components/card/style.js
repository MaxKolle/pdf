
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';


export const Container = styled(View)`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
  padding-top: ${({ theme }) => theme.metrics.largeSize}px;
  margin-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
  border-top-left-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  border-top-right-radius: ${({ theme }) => theme.metrics.borderRadius}px;
  background-color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const DishDescription = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: ${({ theme }) => theme.metrics.mediumSize}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.2%')}px;
  font-family: CircularStd-Book;
`;

export const IngredientsText = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  padding-top: ${({ theme, isFirst }) => (isFirst ? theme.metrics.largeSize : 0)}px;
  padding-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')};
  font-family: CircularStd-Book;
`;

export const ContainerReview = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('10%')}px;
  flex-direction: row;
  margin-top: ${({ theme, isFirst }) => (isFirst ? theme.metrics.mediumSize : 0)}px;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
`;

export const MainContent = styled(View)`
  width: 80%;
  height: 100%;
  justify-content: center;
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

export const ReviewerName = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.8%')}px;
  font-family: CircularStd-Bold;
`;

export const ProfileAvatarWrapper = styled(View)`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

export const ProfileAvatar = styled(FastImage).attrs(({ uri }) => ({
  priority: FastImage.priority.high,
  source: { uri },
}))`
  margin: ${({ theme }) => `${theme.metrics.largeSize}px 0 ${theme.metrics.largeSize}px 0`}
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const ReviewText = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: ${({ theme }) => {
    const marginTop = Platform.OS === 'android'
      ? theme.metrics.extraSmallSize / 2
      : theme.metrics.extraSmallSize;
    return marginTop;
  }}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.8%')}px;
  font-family: CircularStd-Book;
`;

export const TopContetWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentWrapper = styled(View)`
  width: 100%;
`;

export const TitleAndPriceWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled(View)`
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.extraSmallSize / 1.5}px;
`;

export const DishTitle = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  width: 80%;
  padding-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'android' ? '6.5%' : '6%';
    return theme.metrics.getWidthFromDP(percentage);
  }};
  font-family: CircularStd-Black;
`;

export const CustomTabWrapper = styled(View)`
  flex: 1;
  padding-top: ${({ theme }) => theme.metrics.smallSize}px;
`;
