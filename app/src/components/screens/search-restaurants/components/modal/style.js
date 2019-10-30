
import {
  Animated, Image, View, Text, TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.darkLayer};
`;

export const ModalContainer = styled(View)`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const ArrowIcon = styled(Icon).attrs({
  name: 'arrow-left',
  size: 30,
})`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const GapView = styled(View)`
  width: 30px;
  height: 30px;
`;

export const FilterText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
  font-family: CircularStd-Black;
`;

export const QuestionText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  margin-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
  font-family: CircularStd-Medium;
`;

export const DishesTypesSectionContainer = styled(View)`
  width: 100%;
`;

export const MaxDistanceSectionContainer = styled(View)`
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const ApplyButton = styled(TouchableOpacity)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('9%')}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.extraLargeSize}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ApplyButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5.5%')}px;
  font-family: CircularStd-Black;
`;

export const ContainerFilterDishes = styled(Animated.View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('35%')}px;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('25%')}px;
  justify-content: center;
  margin-left: ${({ theme, isFirst }) => (isFirst ? `${theme.metrics.mediumSize}px` : 0)};
  padding-vertical: ${({ theme }) => theme.metrics.getHeightFromDP('1%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('1.5%')}px;
  border-radius: 10px;
`;

export const SelectionMarker = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  padding-vertical: ${({ theme }) => theme.metrics.getHeightFromDP('0.5%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('1%')}px;
  border-radius: 10px;
`;

export const ImageContentContainer = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const DisheImage = styled(Image).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const DisheTypeSelectButtonWrapper = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkLayer};
  border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const DisheTypeText = styled(Animated.Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  text-align: center;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.8%')}px;
  font-family: CircularStd-Bold;
`;

export const ContainerMaxDistance = styled(View)`
  margin-horizontal: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

export const CurrentDistanceText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6%')}px;
  font-family: CircularStd-Black;
`;

export const CurrentDistanceWrapper = styled(View)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const DistanceBoundsWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DistanceBoundsText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Bold;
  text-align: center;
`;
