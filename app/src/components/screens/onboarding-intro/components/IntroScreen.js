// @flow

import React from 'react';
import {
  Wrapper, ImageWrapper, DarkLayer, TextContainer, Title, Description,
} from './style';

type Props = {
  description: string,
  image: string,
  title: string,
};

const IntroScreen = ({ description, image, title }: Props): Object => (
  <Wrapper>
    <ImageWrapper
      image={image}
    />
    <DarkLayer />
    <TextContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextContainer>
  </Wrapper>
);

export default IntroScreen;
