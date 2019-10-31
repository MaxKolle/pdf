// @flow

import React, {Component, Fragment} from 'react';
import {Platform} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import {MapContainer, MarkerWrapper, CustomMarker} from './style';

import AndroidCallout from './AndroidCallout';

type Props = {
  indexLocationSelected: number,
  restaurants: Array<Object>,
  onSelectMarker: Function,
  userLocation: Object,
};

class Map extends Component<Props, {}> {
  _markersRefs: any = [];
  _mapRef: any = null;

  componentDidUpdate() {

    const {indexLocationSelected, restaurants} = this.props;

    this.animateToLocation(indexLocationSelected, restaurants);
  }

  animateToLocation = (
    indexLocationSelected: number,
    restaurants: Array<Object>,
  ): void => {

    console.log("map ready");
    if (!restaurants[indexLocationSelected] || restaurants.length === 0) {
      return;
    }

    const {latitude, longitude} = restaurants[indexLocationSelected].location;

    this._mapRef.animateCamera(
      {
        latitude,
        longitude,
      },
      500,
    );

    setTimeout(() => {
      const isMarkerSet =
        typeof this._markersRefs[indexLocationSelected].showCallout ===
        'function';

      if (isMarkerSet) {
        this._markersRefs[indexLocationSelected].showCallout();
      }
    }, 1000);
  };

  renderMarkers = (
    markers: Array<Object>,
    onSelectMarker: Function,
  ): Object => (
    <Fragment>
      {markers.map((marker, index) => {
        const {location, name, id} = marker;

        const iconName = id === 'user-location' ? 'account' : 'map-marker-radius';

        return (
          <Marker
            ref={markerRef => {
              this._markersRefs[index] = markerRef;
            }}
            onPress={() => id !== 'user-location' && onSelectMarker(index)}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={name}
            key={id}>
            <MarkerWrapper>
              <CustomMarker name={iconName} />
              {Platform.OS === 'android' && (
                <Callout style={{flex: 1, position: 'relative'}}>
                  <AndroidCallout restaurantName={name} />
                </Callout>
              )}
            </MarkerWrapper>
          </Marker>
        );
      })}
    </Fragment>
  );

  render() {
    const {
      indexLocationSelected,
      onSelectMarker,
      userLocation,
      restaurants,
    } = this.props;


    const userLocationMarker = ({
      description: "You're here",
      name: 'Your Position',
      id: 'user-location',
      location: {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
      },
    });

    const markers = [...restaurants, userLocationMarker];
    this._markersRefs = [markers.length];

    return (
      <MapContainer
        onMapReady={() =>
          this.animateToLocation(indexLocationSelected, restaurants)
        }
        ref={ref => {
          this._mapRef = ref;
        }}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01152,
          longitudeDelta: 0.01
        }}
        rotateEnabled={false}>
        {markers.length > 0 &&
          this.renderMarkers(markers, onSelectMarker)
        }
      </MapContainer>
    );
  }
}

export default Map;
