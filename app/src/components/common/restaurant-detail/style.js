import {View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
`;

export const Menu = styled(View)`
  flex: 1;
  padding-bottom: ${({theme}) => theme.metrics.smallSize}px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const FloatingActionButtonWrapper = styled(View)`
  width: 100%;
  align-items: flex-end;
  position: absolute;
  margin-top: ${({theme}) => theme.metrics.getHeightFromDP('25%') - 28}px;
  padding-right: ${({theme}) => theme.metrics.largeSize}px;
`;
