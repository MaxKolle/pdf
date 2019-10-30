// @flow

import React from 'react';
import { IngredientsText } from './style';

type Props = {
  ingredient: string,
  isFirst: boolean,
};

const IngredientsItemList = ({ ingredient, isFirst }: Props) => (
  <IngredientsText
    isFirst={isFirst}
  >
    {ingredient}
  </IngredientsText>
);

export default IngredientsItemList;
