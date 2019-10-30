// @flow

import React from 'react';

import { FlatList } from 'react-native';

import { ContainerInYourCity } from './style';

import AllEventsListItem from './AllEventsListItem';

import Alert from '../../../../../../components/common/alert';
import { Types } from '../../../../../../utils/alert';
import Loading from '../../../../../../components/common/Loading';

const renderList = (events: Array<Object>): Object => (
  <FlatList
    renderItem={({ item, index }) => (
      <AllEventsListItem
        isFirst={index === 0}
        {...item}
      />
    )}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
    data={events}
  />
);

type Props = {
  events: Array<Object>,
  loading: boolean,
  error: boolean,
};

const InYourCityAllEventsList = ({ loading, events, error }: Props): Object => {
  debugger;
  const hasEvents = events.length > 0;

  const shouldShowBoringCityAlert = !hasEvents && !loading && !error;
  const shouldShowList = hasEvents && !loading && !error;

  return (
    <ContainerInYourCity>
      {loading && <Loading />}
      {shouldShowBoringCityAlert && <Alert
        type={Types.BORING_CITY}
      />}
      {error && <Alert
        type={Types.ERROR_SERVER_CONNECTION}
      />}
      {shouldShowList && renderList(events)}
    </ContainerInYourCity>
  );
};

export default InYourCityAllEventsList;
