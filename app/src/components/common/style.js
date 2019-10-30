import {
  TouchableOpacity,
  Animated,
  Platform,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

export const Container = styled(View)`
  width: 100%;
  height: ${({theme}) => {
    const percentage = Platform.OS === 'android' ? '8%' : '7%';
    return theme.metrics.getHeightFromDP(percentage);
  }};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
`;

export const ListWrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Cell = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: ${({width}) => width};
  height: 100%;
  background-color: ${({color}) => color};
`;

export const MarkerWrapper = styled(Animated.View)`
  height: ${({theme}) => theme.metrics.getHeightFromDP('0.5%')};
  width: ${({width}) => width}px;
  background-color: transparent;
  align-self: flex-end;
  position: absolute;
`;

export const Marker = styled(View)`
  height: 100%;
  width: ${({width}) => width};
  background-color: ${({color}) => color};
`;

export const OptionText = styled(Text)`
  color: ${({color}) => color}
  font-size: ${({theme}) => {
    const percentage = Platform.OS === 'android' ? '4.5%' : '4%';
    return theme.metrics.getWidthFromDP(percentage);
  }}px;
  font-family: CircularStd-Medium;
`;

export const Wrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.red};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Price = styled(Text)`
  margin: ${({theme}) =>
    `${theme.metrics.extraSmallSize}px ${theme.metrics.smallSize}px`};
  color: ${({theme}) => theme.colors.defaultWhite};
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('3.5%')}px;
  font-family: CircularStd-Black;
`;

export const ButtonShape = styled(View)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({theme, color}) => theme.colors[color]};
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(Icon).attrs(({name}) => ({
  size: 25,
  name,
}))`
  color: ${({theme}) => theme.colors.defaultWhite};
`;

export const LoadingWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ForegroundLayer = styled(View)`
  background-color: ${({theme}) => theme.colors.progressiveImageForeground};
  border-radius: ${({theme, withBorder}) =>
    withBorder ? theme.metrics.borderRadius : 0}px;
`;

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  imageOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export const CardContainer = styled(View)`
  width: 100%;
  margin-bottom: ${({theme}) => theme.metrics.extraSmallSize}px;
`;

export const ContentWrapper = styled(View)`
  width: 100%;
`;

export const DarkLayer = styled(View)`
  background-color: ${({theme}) => theme.colors.darkLayer};
  position: absolute;
  border-radius: ${({theme}) => theme.metrics.borderRadius}px;
  height: 100%;
  width: 100%;
`;

export const Content = styled(View)`
  padding: ${({theme}) => `${theme.metrics.largeSize}px`};
`;

export const RestaurantImageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  border-radius: ${({theme}) => theme.metrics.borderRadius}px;
`;

export const RestaurantImage = styled(FastImage).attrs(({imageURL}) => ({
  source: {uri: imageURL},
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: ${({theme}) => theme.metrics.borderRadius}px;
`;

export const Name = styled(Text)`
  color: ${({theme}) => theme.colors.defaultWhite};
  margin-bottom: ${({theme}) => theme.metrics.extraSmallSize}px;
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('5%')}px;
  font-family: CircularStd-Black;
`;

export const AddressWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: ${({theme}) => theme.metrics.mediumSize}
  padding-right: ${({theme}) => `${theme.metrics.largeSize}px`};
`;

export const Address = styled(Text)`
  color: ${({theme}) => theme.colors.defaultWhite};
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('4%')}px;
  margin-left: ${({theme}) => theme.metrics.extraSmallSize}px;
  font-family: CircularStd-Medium;
`;

export const AddressIcon = styled(Icon).attrs({
  name: 'map-marker',
  size: 20,
})`
  color: ${({theme}) => theme.colors.defaultWhite};
`;

export const WrapperReview = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Reviews = styled(Text)`
  margin-left: ${({theme}) => theme.metrics.extraSmallSize}px;
  color: ${({theme, textColor}) => theme.colors[textColor]};
  font-family: CircularStd-Book;
  font-size: ${({theme, isSmall}) => {
    const percentage = isSmall ? '3.5%' : '4%';
    return theme.metrics.getWidthFromDP(percentage);
  }};
`;

export const WrapperStars = styled(View)`
  flex-direction: row;
`;
