// @flow

import React from 'react';
import {
  Linking,
  ScrollView,
} from 'react-native';
import { TYPES, SOCIAL_BUTTONS } from './components/SOCIAL_BUTTONS';
import {
  ButtonWrapper, Content, Container, AboutMeDescription, AboutMeTitle, AboutMeWrapper, NameText,
  NameTextWrapper, ProfileImage, ProfileImageWrapper, SocialButton, SocialButtonsWrapper,
  SocialContactsWrapper, SocialIcon, SubText, SubTextWrapper,
} from './style';
import HeartBeating from './components/HeartBeating';

const PROFILE_IMAGE_URL = 'https://github.com/MaxKolle/pdf/blob/master/download.jpg';

const handleSocialButtonClick = async (url: string): void => {
  const canOpenURL = await Linking.canOpenURL(url);

  if (canOpenURL) {
    Linking.openURL(url);
  } else {
    alert("Unfortunately, this URL can't be opened on your devices! :(");
  }
};

const renderSocialButton = (type: string): Object => {
  const {
    withMarginTop, iconName, colors, url,
  } = SOCIAL_BUTTONS[type];

  return (
    <ButtonWrapper
      colors={colors}
    >
      <SocialButton
        onPress={() => handleSocialButtonClick(url)}
      >
        <SocialIcon
          withMarginTop={withMarginTop}
          name={iconName}
        />
      </SocialButton>
    </ButtonWrapper>
  );
};

const Profile = (): Object => (
  <Container>
    <ScrollView
      alwaysBounceVertical={false}
    >
      <Content>
        <ProfileImageWrapper>
          <ProfileImage
            uri={PROFILE_IMAGE_URL}
          />
        </ProfileImageWrapper>
        <NameTextWrapper>
          <NameText>Max Kolle</NameText>
        </NameTextWrapper>
        <SubTextWrapper>
          <SubText>Full Stack Engineer</SubText>
          <HeartBeating />
        </SubTextWrapper>
        <SocialContactsWrapper>
          <SocialButtonsWrapper>
            {renderSocialButton(TYPES.LINKEDIN)}
            {renderSocialButton(TYPES.GITHUB)}
            {renderSocialButton(TYPES.INSTAGRAM)}
          </SocialButtonsWrapper>
        </SocialContactsWrapper>
        <AboutMeWrapper>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeDescription>
            {
              "A Full Stack Engineer with interests in the world, including NodeJS and, obviously, the React Ecossystem (ReactJS, React-Native and GraphQL).\n\nI also have a good eye for design, and that’s why I’m passionate about building amazing, beautiful and problem-solver things to contribute and sum with other people's lives!"
            }
          </AboutMeDescription>
        </AboutMeWrapper>
      </Content>
    </ScrollView>
  </Container>
);

export default Profile;
