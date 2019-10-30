// @flow

import React, { Fragment } from 'react';

import ReviewStars from '../../../../components/common/ReviewStars';

import {
  Container, CustomIcon, DefaultText, DescriptionText, RestaurantName, SectionRow,
} from './style';

const getOperatingHoursText = (
  operatingHours: Object,
  isOpen: boolean,
): string => {
  const { open, close } = operatingHours;

  const operatingHoursText = isOpen
    ? `Open now - Closes ${close}`
    : `Closed now - Opens ${open}`;

  return operatingHoursText;
};

const renderAddressAndOperatingHours = (
  operatingHours: Object,
  address: string,
  isOpen: boolean,
): Object => (
  <Fragment>
    <SectionRow>
      <CustomIcon
        name="map-marker-outline"
      />
      <DefaultText>{address}</DefaultText>
    </SectionRow>
    <SectionRow>
      <CustomIcon
        name="clock-outline"
      />
      <DefaultText>{getOperatingHoursText(operatingHours, isOpen)}</DefaultText>
    </SectionRow>
  </Fragment>
);

type Props = {
  operatingHours: Object,
  description: string,
  isOpen: boolean,
  address: string,
  stars: number,
  name: string,
};

const AboutRestaurant = ({
  operatingHours,
  description,
  address,
  isOpen,
  stars,
  name,
}: Props) => (
  <Container>
    <RestaurantName>{name}</RestaurantName>
    <ReviewStars
      stars={stars}
    />
    {renderAddressAndOperatingHours(operatingHours, address, isOpen)}
    <DescriptionText>{description}</DescriptionText>
  </Container>
);

export default AboutRestaurant;
