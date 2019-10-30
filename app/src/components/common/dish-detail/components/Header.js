// @flow

import React, { Component, Fragment } from 'react';

import ProgressiveImage from '../../../../components/common/ProgressiveImage';
import CONSTANTS from '../../../../utils/CONSTANTS';

import {
  ImageWrapper, DishImageWrapper, BlackLayer, SmokeShadow, SeeRestaurantButtonWrapper,
} from './style';

import SeeRestaurantButton from './SeeRestaurantButton';

type Props = {
  thumbnailImageURL: string,
  restaurantId: string,
  navigation: Object,
  imageURL: string,
};

type State = {
  isImageLoaded: boolean,
};

class Header extends Component<Props, State> {
  state = {
    isImageLoaded: false,
  };

  onLoadImage = (): void => {
    const { isImageLoaded } = this.state;

    this.setState({
      isImageLoaded: !isImageLoaded,
    });
  };

  render() {
    const {
      thumbnailImageURL,
      restaurantId,
      navigation,
      imageURL,
    } = this.props;
    debugger;
    const isDishDetailInReviewMode = navigation.getParam(
      CONSTANTS.NAVIGATION_PARAM_IS_DISH_DETAIL_REVIEW_MODE,
      false,
    );

    return (
      <Fragment>
        <ImageWrapper>
          <DishImageWrapper>
            <ProgressiveImage
              thumbnailImageURL={thumbnailImageURL}
              imageURL={imageURL}
            />
            <BlackLayer />
          </DishImageWrapper>
          <SmokeShadow />
        </ImageWrapper>
        {isDishDetailInReviewMode && (
          <SeeRestaurantButtonWrapper>
            <SeeRestaurantButton
              restaurantId={restaurantId}
            />
          </SeeRestaurantButtonWrapper>
        )}
      </Fragment>
    );
  }
}

export default Header;
