// @flow

import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import {withNavigation} from 'react-navigation';

import Alert from '../../../../components/common/alert';
import {Types} from '../../../../utils/alert';
import Loading from '../../../../components/common/Loading';

import Header from './Header';
import Card from './card';

import {Container} from './style';

type Props = {
  navigation: Function,
  dishDetail: Object,
  loading: Object,
  error: Object,
};

const DishDetail = ({
  navigation,
  dishDetail,
  loading,
  error,
}: Props): Object => {
  const shouldShowContent =
    Object.keys(dishDetail).length > 0 && !loading && !error;
  debugger;
  return (
    <Fragment>
      <StatusBar
        backgroundColor="transparent"
        barStyle={error || loading ? 'dark-content' : 'light-content'}
        translucent
        animated
      />
      {loading && <Loading />}
      {error && (
        <Alert type={Types.ERROR_SERVER_CONNECTION} withExtraTopPadding />
      )}
      {shouldShowContent && (
        <Container>
          <Header
            thumbnailImageURL={dishDetail.dish.thumbnailImageURL}
            restaurantId={dishDetail.restaurant.id}
            imageURL={dishDetail.dish.imageURL}
            navigation={navigation}
          />
          <Card dishDetail={dishDetail} />
        </Container>
      )}
    </Fragment>
  );
};

export default withNavigation(DishDetail);
