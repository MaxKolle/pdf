// @flow

import React, { Component } from 'react';

import InYourAreaAllEventsList from './InYourAreaAllEventsList';

import {connect} from "react-redux";
import {requestAllEvents} from "../../../../../../store/actions/events";

type Props = {
  requestAllEvents: Function,
  events: Object,
};

class AllEventsContainer extends Component<Props, {}> {

  componentDidMount() {
    const { requestAllEvents } = this.props;

    requestAllEvents();
  }

  render() {
    const { events } = this.props;

    debugger;
    return <InYourAreaAllEventsList
        {...events}
    />;
  }
}


const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps, {
  requestAllEvents,
})(AllEventsContainer);
