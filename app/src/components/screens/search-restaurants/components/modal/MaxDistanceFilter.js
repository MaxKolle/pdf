// @flow

import React from 'react';
import Slider from '@react-native-community/slider';
import {
  ContainerMaxDistance,
  CurrentDistanceText,
  CurrentDistanceWrapper,
  DistanceBoundsWrapper,
  DistanceBoundsText,
} from './style';

import appStyles from '../../../../../styles';

type Props = {
  onChangeDistance: Function,
  currentDistance: number,
};

let sliderRef: Object;

const renderDistanceBounds = (): Object => (
  <DistanceBoundsWrapper>
    <DistanceBoundsText>1 km</DistanceBoundsText>
    <DistanceBoundsText>15 km</DistanceBoundsText>
  </DistanceBoundsWrapper>
);

const MaxDistanceFilter = ({
  onChangeDistance,
  currentDistance,
}: Props): Object => (
  <ContainerMaxDistance>
    <CurrentDistanceWrapper>
      <CurrentDistanceText>{`${currentDistance} km`}</CurrentDistanceText>
    </CurrentDistanceWrapper>
    <Slider
      onLayout={() => sliderRef.setNativeProps({value: currentDistance})}
      onValueChange={distance => onChangeDistance(distance)}
      ref={ref => {
        sliderRef = ref;
      }}
      minimumTrackTintColor={appStyles.colors.primaryColor}
      thumbTintColor={appStyles.colors.primaryColor}
      maximumValue={15}
      minimumValue={1}
      step={0.5}
    />
    {renderDistanceBounds()}
  </ContainerMaxDistance>
);

export default MaxDistanceFilter;
