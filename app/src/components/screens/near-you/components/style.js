import {View} from 'react-native';

import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ContentContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CustomTabWrapper = styled(View)`
  position: absolute;
`;
