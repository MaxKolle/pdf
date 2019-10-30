// @flow

import React, { Component } from 'react';
import { Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Wrapper } from './style';
import style from '../../../../styles';

const HeartIcon = Animated.createAnimatedComponent(Icon);

class HeartBeating extends Component {
  _heartSize = new Animated.Value(20);

  componentDidMount() {
    this.beatHeart();
  }

  beatHeart = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._heartSize, {
          toValue: 30,
          duration: 100,
        }),

        Animated.timing(this._heartSize, {
          toValue: 25,
          duration: 100,
        }),

        Animated.timing(this._heartSize, {
          toValue: 30,
          duration: 100,
        }),

        Animated.timing(this._heartSize, {
          toValue: 25,
          duration: 200,
        }),

        Animated.delay(700),
      ]),
    ).start();
  };

  render() {
    return (
      <Wrapper>
        <HeartIcon
          name="heart"
          style={{
            fontSize: this._heartSize,
            color: style.colors.red,
          }}
          size={this._heartSize}
        />
      </Wrapper>
    );
  }
}

export default HeartBeating;
