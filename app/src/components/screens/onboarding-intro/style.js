

import { View } from 'react-native';
import styled from 'styled-components';


export const Container = styled(View)`
  flex: 1;
`;

export const IntroScreenWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.width}px;
  height: ${({ theme }) => theme.metrics.height}px;
`;

export const BottomContent = styled(View)`
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('85%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.extraLargeSize}px;
  position: absolute;
`;
