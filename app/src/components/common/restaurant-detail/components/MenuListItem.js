// @flow

import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import ReviewStars from '../../../../components/common/ReviewStars';
import FlagPrice from '../../../../components/common/FlagPrice';
import CONSTANTS from '../../../../utils/CONSTANTS';
import {
  ContainerMenuList, FlagPriceWrapper, DarkLayerMenuList, DishImage, DishTitle,
} from './style';

type Props = {
  navigation: Object,
  imageURL: string,
  reviews: number,
  title: string,
  price: number,
  stars: number,
  id: string,
};

const MenuListItem = ({
  navigation,
  imageURL,
  reviews,
  price,
  stars,
  title,
  id,
}: Props): Object => (
  <ContainerMenuList>
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(CONSTANTS.ROUTE_DISH_DETAIL_REVIEW, {
        [CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE]: false,
        [CONSTANTS.NAVIGATION_PARAM_ID]: id,
      })
      }
    >
      <View>
        <DishImage
          imageURL={imageURL}
        />
        <DarkLayerMenuList>
          <FlagPriceWrapper>
            <FlagPrice
              price={price}
            />
          </FlagPriceWrapper>
        </DarkLayerMenuList>
        <DishTitle>{title}</DishTitle>
        <ReviewStars
          shouldShowReviewsText
          textColor="darkText"
          reviews={reviews}
          stars={stars}
          small
        />
      </View>
    </TouchableWithoutFeedback>
  </ContainerMenuList>
);

export default withNavigation(MenuListItem);
