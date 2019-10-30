// @flow

import React from 'react';
import { FlatList } from 'react-native';
import { Container, ListWrapper } from './style';

import InYourCitySectionListItem from './InYourCitySectionListItem';

type Props = {
  events: Array<Object>,
};

const InYourCitySection = ({ events }: Props): Object => (
  <Container>
    <ListWrapper>
      <FlatList
        renderItem={({ item, index }) => (
          <InYourCitySectionListItem
            restaurantsParticipating={item.restaurantsParticipating}
            dishesTypes={item.dishesTypes}
            description={item.description}
            imageURL={item.smallImageURL}
            isFirst={index === 0}
            title={item.title}
            id={item.id}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={events}
        horizontal
      />
    </ListWrapper>
  </Container>
);

export default InYourCitySection;
