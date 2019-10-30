
import { View } from 'react-native';
import styled from 'styled-components';


export const Wrapper = styled(View)`
  align-items: center;
  margin: 0 ${({ theme }) => theme.metrics.extraSmallSize}px;
  width: 30px;
`;
