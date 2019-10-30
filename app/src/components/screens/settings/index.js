// @flow

import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, Platform, Switch} from 'react-native';
import {
  Container,
  ItemWrapper,
  LanguageSectionWrapper,
  LineSeparator,
  MediumText,
  MultipleOptionsTitleWrapper,
  OptionTextWrapper,
  OptionWithouDescriptionWrapper,
  OptionWrapper,
  SectionTitleText,
  SelectedLanguageText,
  SmallText,
} from './style';
import appStyle from '../../../styles';

import {
  getItemFromStorage,
  persistItemInStorage,
} from '../../../utils/AsyncStorageManager';

import {SWITCH_STATE_REFS, getItemConfig, TYPES} from './SETTING_CONFIG';

type State = {
  receiveAllNotifications: boolean,
  whenIsAboutPromotions: boolean,
  notificationsSound: boolean,
  promotionsNearMe: boolean,
  whenPastSearch: boolean,
};

class Settings extends Component<{}, State> {
  state = {
    receiveAllNotifications: false,
    whenIsAboutPromotions: false,
    notificationsSound: false,
    promotionsNearMe: false,
    whenPastSearch: false,
  };

  async componentDidMount() {
    const receiveAllNotificationsFromStorage = await getItemFromStorage(
      SWITCH_STATE_REFS.RECEIVE_ALL_NOTIFICATIONS,
      'false',
    );

    const whenAboutPromotionsFromStorage = await getItemFromStorage(
      SWITCH_STATE_REFS.WHEN_ABOUT_DISCOUNTS,
      'false',
    );

    const notificationsSoundFromStorage = await getItemFromStorage(
      SWITCH_STATE_REFS.NOTIFICATIONS_SOUND,
      'false',
    );

    const receiveNearMeFromStorage = await getItemFromStorage(
      SWITCH_STATE_REFS.PROMOTIONS_NEAR_ME,
      'false',
    );

    const whenPastSearchFromStorage = await getItemFromStorage(
      SWITCH_STATE_REFS.WHEN_PAST_SEARCH,
      'false',
    );

    this.setState({
      receiveAllNotifications: receiveAllNotificationsFromStorage === 'true',
      whenIsAboutPromotions: whenAboutPromotionsFromStorage === 'true',
      notificationsSound: notificationsSoundFromStorage === 'true',
      promotionsNearMe: receiveNearMeFromStorage === 'true',
      whenPastSearch: whenPastSearchFromStorage === 'true',
    });
  }

  handleSwitchToggle = async (option: string): Promise<void> => {
    const {state} = this;

    const value = !state[option];

    this.setState({
      [option]: value,
    });
	
    await persistItemInStorage(option, value);
  };

  renderSelectLanguageSection = (): Object => (
    <ItemWrapper>
      <LanguageSectionWrapper>
        <SectionTitleText>Select Language</SectionTitleText>
        <TouchableOpacity>
          <SelectedLanguageText>English, SA</SelectedLanguageText>
        </TouchableOpacity>
      </LanguageSectionWrapper>
    </ItemWrapper>
  );

  renderOptionWithDescription = (
    title: string,
    description: string,
  ): Object => (
    <OptionTextWrapper>
      <SectionTitleText>{title}</SectionTitleText>
      <SmallText>{description}</SmallText>
    </OptionTextWrapper>
  );

  renderSwitch = (id: string): Object => {
    const {state} = this;
    const value = state[id];

    const thumbTintColor = value
      ? appStyle.colors.primaryColor
      : appStyle.colors.white;
    const trackColor = {
      true:
        Platform.OS === 'android'
          ? appStyle.colors.activeSwitch
          : appStyle.colors.primaryColor,
      false: Platform.OS === 'android' ? appStyle.colors.inactiveSwitch : '',
    };

    return (
      <Switch
        thumbColor={Platform.OS === 'android' ? thumbTintColor : ''}
        onValueChange={() => this.handleSwitchToggle(id)}
        trackColor={trackColor}
        value={value}
      />
    );
  };

  renderItemWitDescription = (type: string): Object => {
    const config = getItemConfig(type);

    const {switchId, title, text} = config;

    return (
      <ItemWrapper>
        <OptionWrapper>
          {this.renderOptionWithDescription(title, text)}
          {this.renderSwitch(switchId)}
        </OptionWrapper>
      </ItemWrapper>
    );
  };

  renderItemWithoutDescription = (type: string): Object => {
    const config = getItemConfig(type);

    const {switchId, title} = config;

    return (
      <OptionWithouDescriptionWrapper>
        <MediumText>{title}</MediumText>
        {this.renderSwitch(switchId)}
      </OptionWithouDescriptionWrapper>
    );
  };

  render() {
    return (
      <Container>
        <ScrollView alwaysBounceVertical={false}>
          {this.renderSelectLanguageSection()}
          <LineSeparator />
          {this.renderItemWitDescription(TYPES.PROMOTIONS_NEAR_ME)}
          {this.renderItemWitDescription(TYPES.NOTIFICATIONS_SOUND)}
          <LineSeparator />
          <MultipleOptionsTitleWrapper>
            <SectionTitleText>Push Notifications</SectionTitleText>
          </MultipleOptionsTitleWrapper>
          {this.renderItemWithoutDescription(TYPES.RECEIVE_ALL_NOTIFICATIONS)}
          {this.renderItemWithoutDescription(TYPES.WHEN_PAST_SEARCH)}
          {this.renderItemWithoutDescription(TYPES.WHEN_ABOUT_DISCOUNTS)}
        </ScrollView>
      </Container>
    );
  }
}

export default Settings;
