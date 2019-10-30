// @flow

import React from 'react';

import ReviewStars from '../../../../../components/common/ReviewStars';
import FlagPrice from '../../../../../components/common/FlagPrice';

import {
  ContentWrapper, TitleAndPriceWrapper, PriceWrapper, DishTitle,
} from './style';

type Props = {
  reviews: number,
  price: number,
  stars: number,
  title: string,
};

// This component displays on dish detail, top title, price
const DishInfoHeader = ({
  reviews, price, stars, title,
}: Props) => (
  <ContentWrapper>
    <TitleAndPriceWrapper>
      <DishTitle>{title}</DishTitle>
      <PriceWrapper>
        <FlagPrice
          price={price}
        />
      </PriceWrapper>
    </TitleAndPriceWrapper>
    <ReviewStars
      shouldShowReviewsText
      textColor="darkText"
      reviews={reviews}
      stars={stars}
    />
  </ContentWrapper>
);

export default DishInfoHeader;
