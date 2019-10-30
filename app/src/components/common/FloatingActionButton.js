// @flow

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonShape, ButtonIcon} from './style';

type Props = {
  action: Function,
  color: string,
  name: string,
};

const FloatingActionButton = ({action, color, name}: Props) => (
  <TouchableOpacity onPress={() => action()}>
    <ButtonShape color={color}>
      <ButtonIcon name={name} />
    </ButtonShape>
  </TouchableOpacity>
);

export default FloatingActionButton;
