// @flow

import React from 'react';
import { FlatList } from 'react-native';
import { Container, ListWrapper } from './style';
import PopularSectionListItem from './PopularSectionListItem';

type Props = {
  dishes: Array<Object>,
};

const PopularSection = ({ dishes }: Props): Object => (
  <Container>
    <ListWrapper>
      <FlatList
        renderItem={({ item, index }) => (
          <PopularSectionListItem
            imageURL={item.mediumImageURL}
            isFirst={index === 0}
            price={item.price}
            stars={item.stars}
            title={item.title}
            id={item.id}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={dishes}
        horizontal
      />
    </ListWrapper>
  </Container>
);

export default PopularSection;
