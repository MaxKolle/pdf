
import {
  TouchableOpacity,
  Platform,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import FastImage from 'react-native-fast-image';


export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled(View)`
  align-items: center;
`;

export const ProfileImageWrapper = styled(View)`
  margin-vertical: ${({ theme }) => theme.metrics.largeSize}px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ProfileImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;

export const NameTextWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubTextWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const NameText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: CircularStd-Black;
  font-size: ${({ theme }) => theme.metrics.getHeightFromDP('3.25%')};
`;

export const SubText = styled(Text)`
  color: ${({ theme }) => theme.colors.lightDarkLayer};
  font-family: CircularStd-Medium;
  font-size: ${({ theme }) => theme.metrics.getHeightFromDP('2.8%')};
`;

export const SocialContactsWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SocialButtonsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const SocialButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
`;

export const AboutMeWrapper = styled(View)`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => 1.5 * theme.metrics.mediumSize}px;
  padding-top: ${({ theme }) => theme.metrics.extraLargeSize}px;
  padding-horizontal: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

export const AboutMeDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.darkLayer};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
  text-align: left;
  font-family: CircularStd-Book;
`;

export const AboutMeTitle = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: CircularStd-Black;
  font-size: ${({ theme }) => theme.metrics.getHeightFromDP('2.7%')};
`;

export const SocialIcon = styled(Icon).attrs(({ name }) => ({
  size: 21,
  name,
}))`
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ withMarginTop }) => (Platform.OS === 'ios' && withMarginTop ? 2 : 0)}px;
`;

export const ButtonWrapper = styled(LinearGradient).attrs({
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 0,
  },
})`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  justify-content: center;
  align-items: center;
`;
