// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleHiddenHeaderStyle } from '../../../../../routes/headerUtils';
import EventDetails from './EventDetails';
import CONSTANTS from '../../../../../utils/CONSTANTS';

import {requestEventDetail} from "../../../../../store/actions/events";

type Props = {
  requestEventDetails: Function,
  navigation: Function,
  events: Object,
};

class EventDetailsContainer extends Component<Props, {}> {
  state = {
    loading: false,
    error: false,
    eventDetails: {},
  };

  componentDidMount() {
    debugger;
    const { requestEventDetail, navigation } = this.props;

    const id = navigation.getParam(CONSTANTS.NAVIGATION_PARAM_ID, '');

    requestEventDetail(id);
  };

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { loading, error } = nextProps.events;
    const { navigation } = this.props;

    handleHiddenHeaderStyle(navigation, loading, error);
  }

  render() {
    const { events } = this.props;
    const { eventDetails, loading, error } = events;

    return <EventDetails
        eventDetails={eventDetails}
        loading={loading}
        error={error}
    />;
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps, {
    requestEventDetail,
})(EventDetailsContainer);
