// @flow

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  ButtonsWrapper,
  ControllerText,
  DotsWrapper,
  PaginationDot,
} from './style';

const renderDots = (numberOfDots: number, currentIndex: number): Object => {
  const dots = Array(numberOfDots).fill();

  return (
    <DotsWrapper>
      {dots.map((_, index) => (
        <PaginationDot
          isSelected={index === currentIndex}
          key={`DOT${index - 1}`}>
          {'\u2022'}
        </PaginationDot>
      ))}
    </DotsWrapper>
  );
};

type Props = {
  onPressRightButton: Function,
  onPressLeftButton: Function,
  numberOfDots: number,
  currentIndex: number,
  withSkip: ?boolean,
};

const BottomPagination = ({
  onPressRightButton,
  onPressLeftButton,
  numberOfDots,
  currentIndex,
  withSkip,
}: Props): Object => (
  <Container>
    {renderDots(numberOfDots, currentIndex)}
    <ButtonsWrapper>
      <TouchableOpacity onPress={onPressLeftButton}>
        <ControllerText>{withSkip ? 'SKIP' : 'PREV'}</ControllerText>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRightButton}>
        <ControllerText>NEXT</ControllerText>
      </TouchableOpacity>
    </ButtonsWrapper>
  </Container>
);

export default BottomPagination;
