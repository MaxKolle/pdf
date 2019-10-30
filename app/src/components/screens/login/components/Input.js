// @flow

import React from 'react';
import {InputIcon, InputWrapper, CustomInput, ContentContainer} from './style';
import appStyles from '../../../../styles';

type InputProps = {
  placeholder: string,
  iconName: string,
  type: string,
};

const Input = ({placeholder, iconName, type}: InputProps): Object => (
  <ContentContainer color={appStyles.colors.transparentGray}>
    <InputWrapper>
      <InputIcon iconName={iconName} />
      <CustomInput placeholder={placeholder} type={type} />
    </InputWrapper>
  </ContentContainer>
);

export default Input;
