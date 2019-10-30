// @flow

import React from 'react';
import { Container, DishDescription } from './style';

import DishInfoHeader from './Header';
import Tabs from './Tabs';

type Props = {
  dishDetail: Object,
};

const Card = ({ dishDetail }: Props): Object => {
  const { reviews, dish } = dishDetail;
  debugger;
  return (
    <Container>
      <DishInfoHeader
        price={dish.price.toFixed(2)}
        reviews={dish.reviews}
        stars={dish.stars}
        title={dish.title}
      />
      <DishDescription>{dish.description}</DishDescription>
      <Tabs
        ingredients={dish.ingredients}
        reviews={reviews}
      />
    </Container>
  );
};

export default Card;
