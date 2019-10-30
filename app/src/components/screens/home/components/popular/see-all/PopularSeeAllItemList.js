// @flow

import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { withNavigation } from 'react-navigation';

import { ROUTE_NAMES } from '../../../../../../components/screens/home/routes';

import ReviewStars from '../../../../../../components/common/ReviewStars';
import FlagPrice from '../../../../../../components/common/FlagPrice';

import {
  Container, DisheTitle, DishImageWrapper, DisheDescription, DishImage, TextContentContainer, TopRowContent,
} from './style';

import CONSTANTS from '../../../../../../utils/CONSTANTS';

type Props = {
  navigation: Function,
  description: string,
  imageURL: string,
  price: number,
  stars: number,
  title: string,
  id: string,
};

const RecommendedSeeAllItemList = ({
  description,
  navigation,
  imageURL,
  price,
  title,
  stars,
  id,
}: Props): Object => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate(ROUTE_NAMES.DISH_DETAIL, {
      [CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE]: true,
      [CONSTANTS.NAVIGATION_PARAM_ID]: id,
    })
    }
  >
    <Container>
      <DishImageWrapper>
        <DishImage
          imageURL={imageURL}
        />
      </DishImageWrapper>
      <TextContentContainer>
        <View>
          <TopRowContent>
            <DisheTitle>{title}</DisheTitle>
            <View>
              <FlagPrice
                price={price}
              />
            </View>
          </TopRowContent>
          <ReviewStars
            stars={stars}
          />
        </View>
        <DisheDescription>{description}</DisheDescription>
      </TextContentContainer>
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(RecommendedSeeAllItemList);
