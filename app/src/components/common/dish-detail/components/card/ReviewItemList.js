// @flow

import React from 'react';

import ReviewStars from '../../../../../components/common/ReviewStars';

import {
  ProfileAvatar, MainContent, TopContetWrapper, ReviewerName, ReviewText, ContainerReview, ProfileAvatarWrapper,
} from './style';

type Props = {
  profileImageURL: string,
  isFirst: boolean,
  review: string,
  stars: number,
  name: string,
};

const renderProfileAvatar = (profileImageURL: string): Object => (
  <ProfileAvatarWrapper>
    <ProfileAvatar
      uri={profileImageURL}
    />
  </ProfileAvatarWrapper>
);

const renderMainContent = (
  name: string,
  review: string,
  stars: number,
): Object => (
  <MainContent>
    <TopContetWrapper>
      <ReviewerName>{name}</ReviewerName>
      <ReviewStars
        stars={stars}
      />
    </TopContetWrapper>
    <ReviewText>{review}</ReviewText>
  </MainContent>
);

const ReviewItemList = ({
  profileImageURL,
  isFirst,
  review,
  stars,
  name,
}: Props): Object => (
  <ContainerReview
    isFirst={isFirst}
  >
    {renderProfileAvatar(profileImageURL)}
    {renderMainContent(name, review, stars)}
  </ContainerReview>
);

export default ReviewItemList;
