import {
  View, Text, TextInput, TouchableOpacity, Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

export const DefaultText = styled(Text)`
  color: ${({ theme, color }) => color || theme.colors.defaultWhite};
  font-family: CircularStd-Black;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const ContentContainer = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('7%')}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;


export const InputWrapper = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const InputIcon = styled(Icon).attrs(({ iconName }) => ({
  name: iconName,
  size: 22,
}))`
  margin-right: ${({ theme }) => theme.metrics.mediumSize}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const CustomInput = styled(TextInput).attrs(({ placeholder, type, theme }) => ({
  placeholderTextColor: theme.colors.transparentGrayx,
  selectionColor: theme.colors.defaultWhite,
  underlineColorAndroid: 'transparent',
  secureTextEntry: type === 'password',
  autoCapitalize: 'none',
  textContentType: type,
  autoCorrect: false,
  placeholder,
}))`
  width: 90%;
  height: 100%;
  font-family: CircularStd-Book;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

export const ButtonIcon = styled(Icon).attrs(({ iconName }) => ({
  name: iconName,
  size: 24,
}))`
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-left: ${({ iconName }) => (iconName === 'facebook' ? -4 : 0)}px;
`;

export const SocialButtonWrapper = styled(View)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const SocialButtonsContainer = styled(View)`
  height: 50%;
  justify-content: flex-end;
`;

export const ForgotPasswordContainer = styled(Animated.View)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordWrapper = styled(View)`
  flex-direction: row;
`;

export const RecoverTextButton = styled(TouchableOpacity)`
  margin-left: 4px;
`;

export const ContainerSignUp = styled(View)`
  height: 100%;
`;
