// @flow

import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  HeaderWrapper, SectionText, SeeAllButtonWrapper, ArrowIcon, ContentContainer, SeeAllText,
} from './style';

const renderSectionHeader = (
  navigation: Object,
  nextRoute: string,
  title: string,
): Object => (
  <HeaderWrapper>
    <SectionText>{title}</SectionText>
    <SeeAllButtonWrapper
      onPress={() => navigation.navigate(nextRoute)}
    >
      <SeeAllText>See All</SeeAllText>
      <ArrowIcon />
    </SeeAllButtonWrapper>
  </HeaderWrapper>
);

type Props = {
  navigation: Object,
  nextRoute: string,
  children: Object,
  title: string,
};

const Section = ({
  title, nextRoute, navigation, children,
}: Props) => (
  <ContentContainer>
    <View>
      {renderSectionHeader(navigation, nextRoute, title)}
      {children}
    </View>
  </ContentContainer>
);

export default withNavigation(Section);
