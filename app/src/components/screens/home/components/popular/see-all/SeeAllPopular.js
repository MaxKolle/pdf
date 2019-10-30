// @flow

import React from 'react';
import { FlatList } from 'react-native';

import { Wrapper } from './style';
import PopularSeeAllItemList from './PopularSeeAllItemList';
import Alert from '../../../../../../components/common/alert';
import { Types } from '../../../../../../utils/alert';
import Loading from '../../../../../../components/common/Loading';

type Props = {
  isDishesEmpty: boolean,
  dishes: Array<Object>,
  loading: boolean,
  error: boolean,
};

const AllYouMightLike = ({
  isDishesEmpty,
  loading,
  dishes,
  error,
}: Props): Object => {

  const shouldRenderContent = !isDishesEmpty && !loading && !error;

  debugger;

  return (
    <Wrapper>
      {loading && <Loading />}
      {error && !loading && <Alert
        type={Types.ERROR_SERVER_CONNECTION}
      />}
      {isDishesEmpty && !loading && <Alert
        type={Types.POPULAR_EMPTY}
      />}
      {shouldRenderContent && (
        <FlatList
          renderItem={({ item }) => (
            <PopularSeeAllItemList
              price={parseFloat(item.price).toFixed(2)}
              description={item.description}
              imageURL={item.mediumImageURL}
              title={item.title}
              stars={item.stars}
              id={item.id}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={dishes}
        />
      )}
    </Wrapper>
  );
};

export default AllYouMightLike;
