
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled(View)`
  justify-content: space-between;
  width: 100%;
`;

export const ListWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
`;

export const ContainerInYourArea = styled(View)`
  height: ${({ theme }) => theme.metrics.getHeightFromDP('20%')}px;
  width: ${({ theme }) => theme.metrics.getWidthFromDP('70%')}px;
  margin-left: ${({ theme, isFirst }) => (isFirst ? theme.metrics.largeSize : 0)}px;
  margin-right: ${({ theme }) => theme.metrics.smallSize}
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const ImageShimmerOverlay = styled(ShimmerPlaceHolder).attrs({
  visible: false,
  autoRun: true,
})`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkLayer};
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const EventTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')};
  padding-bottom: ${({ theme }) => theme.metrics.getWidthFromDP('1%')};
  font-family: CircularStd-Black;
`;

export const EventDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
  font-family: CircularStd-Medium;
  text-align: center;
`;

export const EventImage = styled(Image).attrs(({ imageURL }) => ({
  source: { uri: imageURL },
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const AboutEventWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
`;
