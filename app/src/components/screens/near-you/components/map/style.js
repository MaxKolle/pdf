

import { View, Text } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';

export const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.smallSize}px;
`;

export const RestaurantName = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5.5%')}px;
  font-family: CircularStd-Bold;
  text-align: center;
`;

export const MapContainer = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MarkerWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CustomMarker = styled(Icon).attrs(({ name }) => ({
  size: 30,
  name,
}))`
  color: ${({ theme }) => theme.colors.primaryColor};
`;
