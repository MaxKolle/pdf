// @flow

import React from 'react';
import {StatusBar, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import FloatinActionButton from '../../../../components/common/FloatingActionButton';

import CONSTANTS from '../../../../utils/CONSTANTS';
import appStyles from '../../../../styles';

import {
  ContainerRestaurantAdd,
  MapContainer,
  FloatingActionButtonWrapper,
  FooterContainer,
  StatusText,
  EstablishmentStatus,
  MarkerIcon,
} from './style';

const ASPECT_RATIO = appStyles.metrics.width / appStyles.metrics.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_REGION = {
  latitude: -3.7900894,
  longitude: -38.6590335,
};

const edgePadding = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

let _restaurantMarkerRef: Object;
let _userMarkerRef: Object;
let _mapRef: Object;

const onFitMapCoordinates = (markers: Array<Object>): void => {
  _mapRef.fitToCoordinates(markers, {
    animated: true,
    edgePadding,
  });
};

const renderMap = (restaurantName: string, markers: Array<Object>): Object => (
  <MapContainer>
    <MapView
      onMapReady={() => onFitMapCoordinates(markers)}
      style={{width: '100%', height: '100%'}}
      initialRegion={{
        latitude: INITIAL_REGION.latitude,
        longitude: INITIAL_REGION.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      ref={ref => {
        _mapRef = ref;
      }}
      showsPointsOfInterest={false}
      rotateEnabled={false}
      scrollEnabled={false}
      showBuildings={false}
      zoomEnabled={false}>
      {markers.map(marker => (
        <Marker
          title={marker.id === 'user_location' ? "You're here" : restaurantName}
          ref={markerRef => {
            if (marker.id === 'user_location') {
              _userMarkerRef = markerRef;
            } else {
              _restaurantMarkerRef = markerRef;
            }
          }}
          onPress={() => {
            const ref =
              marker.id === 'user_location'
                ? _userMarkerRef
                : _restaurantMarkerRef;

            ref.showCallout();
          }}
          coordinate={marker}
          key={marker.id}>
          <MarkerIcon
            name={
              marker.id === 'user_location'
                ? 'account-location'
                : 'map-marker-radius'
            }
          />
        </Marker>
      ))}
    </MapView>
  </MapContainer>
);

const renderFooter = (distance: number, isOpen: boolean): Object => {
  const status = `${isOpen ? 'Open' : 'Closed'} now`;

  return (
    <FooterContainer>
      <View>
        <StatusText>{status}</StatusText>
        <EstablishmentStatus>{`${distance} km from you`}</EstablishmentStatus>
      </View>
    </FooterContainer>
  );
};

const renderFloatingActionButton = (markers: Array<Object>): Object => (
  <FloatingActionButtonWrapper>
    <FloatinActionButton
      action={() => onFitMapCoordinates(markers)}
      name="directions"
      color="blue"
    />
  </FloatingActionButtonWrapper>
);

type Props = {
  navigation: Function,
};

const RestaurantAddressMap = ({navigation}: Props): Object => {
  const {
    restaurantLocation,
    userLocation,
    distance,
    isOpen,
  } = navigation.getParam(CONSTANTS.NAVIGATION_PARAM_USER_LOCATION, {});

  const restaurantName = navigation.getParam(
    CONSTANTS.NAVIGATION_PARAM_RESTAURANT_NAME,
    '',
  );

  const markers = [restaurantLocation, userLocation];

  return (
    <ContainerRestaurantAdd>
      <StatusBar
        backgroundColor={appStyles.colors.androidToolbarColor}
        barStyle="light-content"
        translucent
        animated
      />
      {renderMap(restaurantName, markers)}
      {renderFooter(distance, isOpen)}
      {renderFloatingActionButton(markers)}
    </ContainerRestaurantAdd>
  );
};

export default RestaurantAddressMap;
