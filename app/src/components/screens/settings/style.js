import {Platform, Text, View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const SectionTitleText = styled(Text)`
  color: ${({theme}) => theme.colors.darkText};
  font-family: CircularStd-Bold;
  font-size: ${({theme}) => {
    const percentage = Platform.OS === 'ios' ? '4.2%' : '4.8%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
`;

export const ItemWrapper = styled(View)`
  padding: ${({theme}) => theme.metrics.largeSize}px;
`;

export const LineSeparator = styled(View)`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('0.1%')};
  background-color: ${({theme}) => theme.colors.gray};
`;

export const LanguageSectionWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedLanguageText = styled(Text)`
  color: ${({theme}) => theme.colors.red};
  font-family: CircularStd-Medium;
  font-size: ${({theme}) => {
    const percentage = Platform.OS === 'ios' ? '4%' : '4.8%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
`;

export const SmallText = styled(Text)`
  color: ${({theme}) => theme.colors.subText};
  margin: ${({theme}) => `${theme.metrics.extraSmallSize}px 0`};
  font-family: CircularStd-Book;
  font-size: ${({theme}) => {
    const percentage = Platform.OS === 'ios' ? '3.8%' : '4%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
`;

export const OptionWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionTextWrapper = styled(View)`
  width: 75%;
`;

export const MediumText = styled(Text)`
  color: ${({theme}) => theme.colors.subText};
  margin-top: ${({theme}) => theme.metrics.extraSmallSize};
  font-family: CircularStd-Bold;
  font-size: ${({theme}) => {
    const percentage = Platform.OS === 'ios' ? '4%' : '4.5%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
`;

export const OptionWithouDescriptionWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme}) => theme.metrics.largeSize}px;
`;

export const MultipleOptionsTitleWrapper = styled(View)`
  padding: ${({theme}) =>
    `${theme.metrics.largeSize}px 0 ${theme.metrics.mediumSize}px ${
      theme.metrics.largeSize
    }px`};
`;
