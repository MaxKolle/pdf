// @flow

import React from 'react';
import { getAlertConfig } from './CONFIG_TYPES';
import {
  Container, Wrapper, FoodNotFoundIcon, TopText, BottomText, MiddleText,
} from './style';

type Props = {
  withExtraTopPadding: ? boolean,
  type: string,
};

const Alert = ({ withExtraTopPadding, type }: Props) => {
  const {
    middleText, bottomText, iconName, topText,
  } = getAlertConfig(type);
  debugger;
  return (
    <Container
      withExtraTopPadding={withExtraTopPadding}
    >
      <Wrapper>
        <FoodNotFoundIcon
          iconName={iconName}
        />
        <TopText>{topText}</TopText>
        <MiddleText>{middleText}</MiddleText>
        <BottomText>{bottomText}</BottomText>
      </Wrapper>
    </Container>
  );
};

export default Alert;
