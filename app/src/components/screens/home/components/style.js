import {TouchableOpacity, Platform, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import appStyles from '../../../../styles';

const getTextSize = (type: string): number => {
  const types = {
    restaurantsParticipating: Platform.OS === 'android' ? '5.2%' : '4.2%',
    city: Platform.OS === 'android' ? '6.5%' : '5.5%',
    currentCity: Platform.OS === 'android' ? '4.5%' : '4%',
    buttonText: Platform.OS === 'android' ? '5.5%' : '5%',
  };

  return appStyles.metrics.getWidthFromDP(types[type]);
};

export const Container = styled(View)`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('8%')}px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${({theme}) => theme.metrics.mediumSize}px;
  padding-horizontal: ${({theme}) => theme.metrics.largeSize}px;
`;

export const Content = styled(View)`
  width: 92%;
  height: 100%;
  justify-content: center;
`;

export const CurrentLocationText = styled(Text)`
  color: ${({theme}) => theme.colors.subText};
  font-family: CircularStd-Medium;
  font-size: ${() => getTextSize('currentCity')}px;
`;

export const CityText = styled(Text)`
  color: ${({theme}) => theme.colors.darkText};
  font-family: CircularStd-Black;
  font-size: ${() => getTextSize('city')}px;
`;

export const CityAndChangeButtonRow = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChangeButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const ChangeButtonText = styled(Text)`
  color: ${({theme}) => theme.colors.subText};
  font-family: CircularStd-Bold;
  font-size: ${() => getTextSize('buttonText')}px;
`;

export const LocationIcon = styled(Icon).attrs({
  name: 'map-marker-multiple',
  size: 20,
})`
  color: ${({theme}) => theme.colors.subText};
  margin-left: -4px;
  width: 20px;
  height: 20px;
`;

export const LocationIconWrapper = styled(View)`
  width: 8%;
  height: 100%;
  justify-content: center;
`;

export const ContentContainer = styled(View)`
  margin-bottom: ${({theme}) => theme.metrics.largeSize}px;
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) =>
    `${theme.metrics.largeSize}px ${theme.metrics.smallSize}px ${
      theme.metrics.extraSmallSize
    }px  ${theme.metrics.largeSize}px`};
`;

export const SeeAllButtonWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionText = styled(Text)`
  color: ${({theme}) => theme.colors.darkText};
  font-family: CircularStd-Black;
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('5%')};
`;

export const SeeAllText = styled(Text)`
  color: ${({theme}) => theme.colors.primaryColor};
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('4.5%')};
  font-family: CircularStd-Bold;
`;

export const ArrowIcon = styled(Icon).attrs({
  name: 'chevron-right',
  size: 25,
})`
  color: ${({theme}) => theme.colors.primaryColor};
  margin-left: -5px;
  width: 25px;
  height: 25px;
`;
