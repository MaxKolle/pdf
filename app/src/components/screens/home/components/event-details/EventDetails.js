// @flow

import React from 'react';
import {StatusBar, FlatList} from 'react-native';

import RestaurantItemList from '../../../../../components/common/RestaurantListItem';
import ProgressiveImage from '../../../../../components/common/ProgressiveImage';
import {Alert} from '../../../../../components/common/alert';
import {Types} from '../../../../../utils/alert';
import Loading from '../../../../../components/common/Loading';

import {
  Container,
  HeaderCotainer,
  ImageWrapper,
  DarkWrapper,
  EventDescription,
  EventTitle,
  RestaurantParticipatingText,
  ListWrapper,
} from './style';

type Props = {
  eventDetails: Object,
  loading: boolean,
  error: boolean,
};

// RENDER HEADER OF EVENT DETAILS
const renderHeader = (
  eventDetails: Object,
  numberRestaurantsParticipating: number,
): Object => (
  <HeaderCotainer>
    <ImageWrapper>
      <ProgressiveImage
        thumbnailImageURL={eventDetails.thumbnailImageURL}
        imageURL={eventDetails.imageURL}
      />
    </ImageWrapper>
    <DarkWrapper>
      <EventTitle>{eventDetails.title}</EventTitle>
      <EventDescription>{eventDetails.description}</EventDescription>
      <RestaurantParticipatingText>
        {`${numberRestaurantsParticipating} Restaurants participating`}
      </RestaurantParticipatingText>
    </DarkWrapper>
  </HeaderCotainer>
);

// RENDER RESTAURANT LIST OF EVENT DETAILS
const renderRestaurantList = (
  restaurantsParticipating: Array<Object>,
): Object => (
  <ListWrapper>
    <FlatList
      renderItem={({item}) => (
        <RestaurantItemList
          address={item.location.address}
          imageURL={item.mediumImageURL}
          stars={item.stars}
          name={item.name}
          id={item.id}
        />
      )}
      showsVerticalScrollIndicator={false}
      data={restaurantsParticipating}
      keyExtractor={item => item.id}
    />
  </ListWrapper>
);

// EVENT DETAILS SCREEN RENDERING
const EventDetails = ({loading, error, eventDetails}: Props): Object => {
  const shouldShowContent =
    !loading && !error && Object.keys(eventDetails).length > 0;
  debugger;
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle={error || loading ? 'dark-content' : 'light-content'}
        translucent
        animated
      />
      {loading && <Loading />}
      {error && (
        <Alert type={Types.ERROR_SERVER_CONNECTION} withExtraTopPadding />
      )}
      {shouldShowContent &&
        renderHeader(eventDetails.event, eventDetails.restaurants.length)}
      {shouldShowContent && renderRestaurantList(eventDetails.restaurants)}
    </Container>
  );
};

export default EventDetails;
