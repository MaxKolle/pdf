
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import styled from 'styled-components';


export const Container = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('10%')}px;
  flex-direction: row;
  align-items: center;
`;

export const ControllerText = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
  font-family: CircularStd-Medium;
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const DotsWrapper = styled(View)`
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.metrics.getWidthFromDP('40%')}px;
  flex-direction: row;
  position: absolute;
`;

export const PaginationDot = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('7%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('0.5%')}px;
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.primaryColor : theme.colors.defaultWhite)};
`;

export const ButtonsWrapper = styled(View)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ButtonWrapper = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  height: ${({ theme }) => theme.metrics.getHeightFromDP('6%')}px;
  justify-content: center;
  align-items;
  padding-vertical: ${({ theme }) => theme.metrics.getWidthFromDP('3%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('7%')}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.metrics.getHeightFromDP('6%') / 2}px;
`;

export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-family: CircularStd-Bold;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
`;

export const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('60%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.getWidthFromDP('10%')}px;
`;

export const Title = styled(Text)`
  padding-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('7,5%')}px;
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Description = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Medium;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkLayer};
  position: absolute;
`;

export const ImageWrapper = styled(Image).attrs(({ image }) => ({
  source: { uri: image },
  resizeMode: 'cover',
}))`
  width: 100%;
  height: 100%;
  position: absolute;
`;
