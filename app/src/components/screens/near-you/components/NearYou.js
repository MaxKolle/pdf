// @flow

import React, { Fragment } from 'react';
import { Container, ContentContainer, CustomTabWrapper } from './style';
import Alert from '../../../../components/common/alert';
import { Types } from '../../../../utils/alert';
import CustomTab from '../../../../components/common/CustomTab';
import Loading from '../../../../components/common/Loading';
import appStyles from '../../../../styles';

import RestaurantsList from './restaurants-list';
import Map from './map';

type Props = {
  turnOffMoveRestaurantList: Function,
  shouldMoveRestaurantList: boolean,
  dishesTypesItems: Array<Object>,
  indexRestaurantSelected: number,
  onDishesTypeChange: Function,
  restaurants: Array<Object>,
  onSelectMarker: Function,
  userLocation: Object,
  hasSomeData: boolean,
  error: boolean,
};

const NearYou = ({
  turnOffMoveRestaurantList,
  shouldMoveRestaurantList,
  indexRestaurantSelected,
  onDishesTypeChange,
  dishesTypesItems,
  onSelectMarker,
  userLocation,
  hasSomeData,
  restaurants,
  error,
}: Props): Object => (
  <Container>
    {!hasSomeData && !error && <Loading />}
    {error && <Alert
      type={Types.ERROR_SERVER_CONNECTION}
    />}
    {!error && hasSomeData && (
      <Fragment>
        <ContentContainer>
          <Map
            indexLocationSelected={indexRestaurantSelected}
            onSelectMarker={onSelectMarker}
            userLocation={userLocation}
            restaurants={restaurants}
          />
          {restaurants.length > 0 && (
            <RestaurantsList
              turnOffMoveRestaurantList={turnOffMoveRestaurantList}
              shouldMoveRestaurantList={shouldMoveRestaurantList}
              indexRestaurantSelected={indexRestaurantSelected}
              onSelectMarker={onSelectMarker}
              restaurants={restaurants}
            />
          )}
        </ContentContainer>
        <CustomTabWrapper>
          <CustomTab
            onChangeMenuIndex={index => onDishesTypeChange(index)}
            contentWidth={appStyles.metrics.width}
            data={dishesTypesItems}
            theme="red"
          />
        </CustomTabWrapper>
      </Fragment>
    )}
  </Container>
);

export default NearYou;
