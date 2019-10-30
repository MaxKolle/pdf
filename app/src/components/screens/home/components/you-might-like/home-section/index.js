// @flow

import React from 'react';
import { FlatList } from 'react-native';
import { Container, ListWrapper } from './style';

import YouMightLikeSectionListItem from './YouMightLikeSectionListItem';

type Props = {
  dishes: any,
};

const RecommendedHomeSection = ({ dishes }: Props): Object => (
  <Container>
    <ListWrapper>
      <FlatList
        renderItem={({ item, index }) => (
          <YouMightLikeSectionListItem
            distance={parseFloat(item.reviews / item.stars).toFixed(1)}
            imageURL={item.mediumImageURL}
            reviews={item.reviews}
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

export default RecommendedHomeSection;
