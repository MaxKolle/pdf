// @flow

import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  DarkWrapper,
  EventImage,
  EventDescription,
  EventTitle,
  RestaurantParticipatingText,
} from './style';
import {withNavigation} from 'react-navigation';

import {ROUTE_NAMES} from '../../../../../../components/screens/home/routes';
import CONSTANTS from '../../../../../../utils/CONSTANTS';

const renderTextContent = (
  title: string,
  description: string,
  restaurantsParticipating: number,
): Object => (
  <DarkWrapper>
    <EventTitle>{title}</EventTitle>
    <EventDescription>{description}</EventDescription>
    <RestaurantParticipatingText>
      {`${restaurantsParticipating} Restaurants participating`}
    </RestaurantParticipatingText>
  </DarkWrapper>
);

type Props = {
  restaurantsParticipating: number,
  mediumImageURL: string,
  navigation: Function,
  description: string,
  isFirst: boolean,
  title: string,
  id: string,
};

const AllEventsListItem = ({
  restaurantsParticipating,
  mediumImageURL,
  description,
  navigation,
  isFirst,
  title,
  id,
}: Props): Object => (
  <TouchableWithoutFeedback
    onPress={() =>
      navigation.navigate(ROUTE_NAMES.EVENT_DETAILS, {
        [CONSTANTS.NAVIGATION_PARAM_ID]: id,
      })
    }>
    <Container isFirst={isFirst}>
      <EventImage imageURL={mediumImageURL} />
      {renderTextContent(title, description, restaurantsParticipating)}
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(AllEventsListItem);
