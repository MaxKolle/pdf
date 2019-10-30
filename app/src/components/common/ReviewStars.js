// @flow

import React, { Fragment } from 'react';
import { WrapperReview, WrapperStars, Reviews } from './style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appStyle from '../../styles';

const MAX_GRADE = 5;

const getStars = (stars: number, isSmall: boolean): Array<Object> => {
  const quantityEmptyStars = MAX_GRADE - Math.ceil(stars);
  const starsFromGrade = [];

  const iconSize = isSmall ? 12 : 16;

  const FullStar = (
    <Icon
      color={appStyle.colors.yellow}
      name="star"
      size={iconSize}
    />
  );

  const HalfStar = (
    <Icon
      color={appStyle.colors.yellow}
      name="star-half"
      size={iconSize}
    />
  );

  const EmptyStar = (
    <Icon
      color={appStyle.colors.yellow}
      name="star-outline"
      size={iconSize}
    />
  );

  let currentStars = stars;

  if (currentStars >= MAX_GRADE) {
    for (let i = 0; i < MAX_GRADE; i++) {
      starsFromGrade.push(FullStar);
    }

    return starsFromGrade;
  }

  while (currentStars >= 1) {
    starsFromGrade.push(FullStar);
    currentStars--;
  }

  if (currentStars === 0.5) {
    starsFromGrade.push(HalfStar);
  }

  for (let i = 0; i < quantityEmptyStars; i++) {
    starsFromGrade.push(EmptyStar);
  }

  return starsFromGrade;
};

const renderStars = (grade: number, isSmall: boolean): Object => {
  const starsFromGrade = getStars(grade, isSmall);

  return (
    <WrapperStars>
      {starsFromGrade.map(star => (
        <Fragment
          key={Math.random()}
        >
          {star}
        </Fragment>
      ))}
    </WrapperStars>
  );
};

type Props = {
  shouldShowReviewsText: boolean,
  textColor: ?string,
  isSmall: boolean,
  reviews: ?number,
  stars: number,
};

const ReviewStars = ({
  shouldShowReviewsText,
  textColor,
  isSmall,
  reviews,
  stars,
}: Props) => (
  <WrapperReview>
    {renderStars(stars, isSmall)}
    {shouldShowReviewsText && !!reviews && (
      <Reviews
        textColor={textColor}
        isSmall={isSmall}
      >
        {`${reviews} ${reviews > 1 ? 'Reviews' : 'Review'}`}
      </Reviews>
    )}
  </WrapperReview>
);

export default ReviewStars;
