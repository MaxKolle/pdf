// @flow

import React, { Component, Fragment } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { withNavigation } from 'react-navigation';

import { ROUTE_NAMES } from '../../../../../../components/screens/home/routes';
import CONSTANTS from '../../../../../../utils/CONSTANTS';

import {
  ContainerInYourArea, EventTitle, EventDescription, DarkLayer, AboutEventWrapper, EventImage, ImageShimmerOverlay,
} from './style';

type Props = {
  navigation: Function,
  description: string,
  imageURL: string,
  isFirst: boolean,
  title: string,
  id: string,
};

type State = {
  isImageLoaded: boolean,
};

class InYourAreaListItem extends Component<Props, State> {
  state = {
    isImageLoaded: false,
  };

  onLoadImage = (): void => {
    this.setState({
      isImageLoaded: true,
    });
  };

  render() {
    const {
      description, imageURL, title, isFirst, navigation, id,
    } = this.props;
    const { isImageLoaded } = this.state;

    return (
      <Fragment>
        <ContainerInYourArea
          isFirst={isFirst}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(ROUTE_NAMES.EVENT_DETAILS, {
              [CONSTANTS.NAVIGATION_PARAM_ID]: id,
            })
            }
            disabled={!isImageLoaded}
          >
            <View>
              <EventImage
                imageURL={imageURL}
                onLoad={() => this.onLoadImage()}
              />
              <DarkLayer />
              <AboutEventWrapper>
                <EventTitle>{title}</EventTitle>
                <EventDescription>{description}</EventDescription>
              </AboutEventWrapper>
            </View>
          </TouchableWithoutFeedback>
          {!isImageLoaded && <ImageShimmerOverlay />}
        </ContainerInYourArea>
      </Fragment>
    );
  }
}

export default withNavigation(InYourAreaListItem);
