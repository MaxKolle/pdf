// @flow

import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import { persistItemInStorage } from '../../../utils/AsyncStorageManager';
import CONSTANTS from '../../../utils/CONSTANTS';
import appStyles from '../../../styles';
import { Container } from './style';

import  Alert  from '../../../components/common/alert';
import { Types } from '../../../utils/alert';
import Loading from '../../../components/common/Loading';

import YouMightLikeSection from './components/you-might-like/home-section';
import InYourCitySection from './components/in-your-city/home-section';
import PopularSection from './components/popular/home-section';

import Section from './components/Section';
import { ROUTE_NAMES } from './routes';

import {getHomeRequest} from "../../../store/actions/home";


type Props = {
  getHomeRequest: Function,
  homeRequest: Object,
};

type State = {
  isRefreshing: boolean,
};

type HomeRequestResult = {
  youMightLikeDishes: Array<Object>,
  inYourCityEvents: Array<Object>,
  popularDishes: Array<Object>,
  userLocation: Object,
};

class Home extends Component<Props, State> {
  state = {
    isRefreshing: false,
    userLocation: {
      latitude: CONSTANTS.JOHANNESBURG_CITY_LOCATION.latitude,
      longitude: CONSTANTS.JOHANNESBURG_CITY_LOCATION.longitude,
    },
  };

  componentDidMount() {
    this.getUserLocation();

    this.requestData();
    SplashScreen.hide();
  }

  requestData = (): void => {
    const { getHomeRequest } = this.props;

    getHomeRequest();
  };

  getUserLocation = (): Object => {
    //geolocation.setRNConfiguration(config);
    Geolocation.getCurrentPosition(position => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({
          userLocation: userLocation,
        });
        console.log(userLocation);
    });
  };

  async UNSAFE_componentWillReceiveProps (nextProps, nextState) {

    const { userLocation } = this.state;

    if (
        typeof userLocation === 'object'
        && Object.keys(userLocation).length === 2
    ) {
      await persistItemInStorage(
          CONSTANTS.USER_LOCATION,
          JSON.stringify(userLocation),
      );
    }

    this.setState({
      isRefreshing: false,
    });
  }

  renderMainContent = (data : HomeRequestResult, isRefreshing): Object => {

    const { youMightLikeDishes, inYourCityEvents, popularDishes } = data;

    const hasYouMightLikeDishes = youMightLikeDishes && youMightLikeDishes.length > 0;
    const hasInYourCityEvents = inYourCityEvents && inYourCityEvents.length > 0;
    const hasPopularDishes = popularDishes && popularDishes.length > 0;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                  progressBackgroundColor={appStyles.colors.primaryColor}
                  tintColor={appStyles.colors.primaryColor}
                  colors={[appStyles.colors.white]}
                  onRefresh={this.requestData}
                  refreshing={isRefreshing}
              />
            }
        >
          {hasInYourCityEvents && (
              <Section
                  nextRoute={ROUTE_NAMES.SEE_ALL_EVENTS}
                  title="In Your City"
              >
                <InYourCitySection
                    events={inYourCityEvents}
                />
              </Section>
          )}
          {hasYouMightLikeDishes && (
              <Section
                  nextRoute={ROUTE_NAMES.YOU_MIGHT_LIKE_SEE_ALL}
                  title="You Might Like"
              >
                <YouMightLikeSection
                    dishes={youMightLikeDishes}
                />
              </Section>
          )}
          {hasPopularDishes && (
              <Section
                  nextRoute={ROUTE_NAMES.POPULAR_SEE_ALL}
                  title="Popular"
              >
                <PopularSection
                    dishes={popularDishes}
                />
              </Section>
          )}
        </ScrollView>
    );
  };

  render() {

    const { isRefreshing } = this.state;
    const { homeRequest } = this.props;
    const { loading, error, data } = homeRequest;

    return (
        <Container>
          {loading && !error && <Loading />}
          {error && !loading && <Alert
              type={Types.ERROR_SERVER_CONNECTION}
              withExtraTopPadding={true}/>}
          {!loading && !error && this.renderMainContent(data, isRefreshing)}
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  homeRequest : state.home,
});

export default connect(mapStateToProps, {
  getHomeRequest,
})(Home);

