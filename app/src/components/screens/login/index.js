// @flow

import React, {Component} from 'react';
import {TouchableOpacity, StatusBar, Animated, FlatList} from 'react-native';
import {
  Container,
  Wrapper,
  DarkLayer,
  ContentWrapper,
  BackgroundImage,
  NavigationTitleWrapper,
  Title,
  TitleWrapper,
} from './style';

import SplashScreen from 'react-native-splash-screen';
import SignUpComponent from './components/SignUp';
import LoginComponent from './components/Login';

import appStyles from '../../../styles';

const MAX_FONT_SIZE = appStyles.metrics.getWidthFromDP('8.5%');
const MIN_FONT_SIZE = appStyles.metrics.getWidthFromDP('5%');

const LAYOUTS = [
  {Layout: LoginComponent, id: 'login'},
  {Layout: SignUpComponent, id: 'signup'},
];

class Login extends Component {
  _loginFontSize: Object = new Animated.Value(1);
  _signUpFontSize: Object = new Animated.Value(0);
  _flatListRef: Object = {};

  state = {
    isBackgroundImageLoaded: false,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  onClickLoginButton = (): void => {
    Animated.parallel([
      Animated.timing(this._loginFontSize, {
        toValue: 1,
        duration: 200,
      }),
      Animated.timing(this._signUpFontSize, {
        toValue: 0,
        duration: 200,
      }),
    ]).start(this._flatListRef.scrollToIndex({animated: true, index: 0}));
  };

  onClickSignUpButton = (): void => {
    Animated.parallel([
      Animated.timing(this._loginFontSize, {
        toValue: 0,
        duration: 200,
      }),
      Animated.timing(this._signUpFontSize, {
        toValue: 1,
        duration: 200,
      }),
    ]).start(this._flatListRef.scrollToIndex({animated: true, index: 1}));
  };

  onLoadBackgroundImage = (): void => {
    this.setState({
      isBackgroundImageLoaded: true,
    });
  };

  renderContent = (): Object => (
    <FlatList
      renderItem={({item}) => {
        const {Layout} = item;

        return (
          <ContentWrapper>
            <Layout />
          </ContentWrapper>
        );
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      ref={(ref: any): void => {
        this._flatListRef = ref;
      }}
      scrollEnabled={false}
      data={LAYOUTS}
      pagingEnabled
      horizontal
    />
  );

  render() {
    const {isBackgroundImageLoaded} = this.state;

    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
          animated
        />
        <BackgroundImage onLoad={this.onLoadBackgroundImage} />
        <DarkLayer />
        {isBackgroundImageLoaded && (
          <Wrapper>
            <TitleWrapper>
              <Title>Kame Tcha</Title>
            </TitleWrapper>
            <NavigationTitleWrapper>
              <TouchableOpacity onPress={this.onClickLoginButton}>
                <Animated.Text
                  style={{
                    paddingBottom: appStyles.metrics.getHeightFromDP('3%'),
                    paddingRight: appStyles.metrics.getHeightFromDP('4%'),
                    paddingTop: appStyles.metrics.getHeightFromDP('1%'),
                    fontFamily: 'CircularStd-Black',
                    color: this._loginFontSize.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        appStyles.colors.gray,
                        appStyles.colors.defaultWhite,
                      ],
                      extrapolate: 'clamp',
                    }),
                    fontSize: this._loginFontSize.interpolate({
                      inputRange: [0, 1],
                      outputRange: [MIN_FONT_SIZE, MAX_FONT_SIZE],
                      extrapolate: 'clamp',
                    }),
                  }}>
                  Login
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onClickSignUpButton}>
                <Animated.Text
                  style={{
                    paddingBottom: appStyles.metrics.getHeightFromDP('3%'),
                    paddingLeft: appStyles.metrics.getHeightFromDP('4%'),
                    paddingTop: appStyles.metrics.getHeightFromDP('1%'),
                    fontFamily: 'CircularStd-Black',
                    color: this._signUpFontSize.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        appStyles.colors.gray,
                        appStyles.colors.defaultWhite,
                      ],
                      extrapolate: 'clamp',
                    }),
                    fontSize: this._signUpFontSize.interpolate({
                      inputRange: [0, 1],
                      outputRange: [MIN_FONT_SIZE, MAX_FONT_SIZE],
                      extrapolate: 'clamp',
                    }),
                  }}>
                  Sign Up
                </Animated.Text>
              </TouchableOpacity>
            </NavigationTitleWrapper>
            {this.renderContent()}
          </Wrapper>
        )}
      </Container>
    );
  }
}

export default Login;
