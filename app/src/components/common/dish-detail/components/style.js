
import {
  TouchableOpacity, Platform, View, Text,
} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import appStyles from '../../../../styles';


export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;


export const ImageWrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('27%')};
`;

export const SeeRestaurantButtonWrapper = styled(View)`
  height: ${({ theme }) => theme.metrics.getHeightFromDP('27%')};
  position: absolute;
  align-self: flex-end;
  justify-content: flex-end;
`;

export const SmokeShadow = styled(LinearGradient).attrs({
  colors: ['transparent', appStyles.colors.dark, appStyles.colors.dark],
})`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('28%')};
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('12%')};
`;

export const DishImageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BlackLayer = styled(View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

export const ContainerRestaurantButton = styled(View)`
  width: 100%;
  padding-right: ${({ theme }) => theme.metrics.largeSize}px;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
`;

export const Wrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  padding-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const SeeText = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => {
    const percentage = Platform.OS === 'android' ? '4%' : '3.8%';
    return theme.metrics.getWidthFromDP(percentage);
  }};
  font-family: CircularStd-Black;
`;
