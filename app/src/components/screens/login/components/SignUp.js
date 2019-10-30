// @flow

import React from 'react';

import ButtonContent from './ButtonContent';
import Input from './Input';
import appStyles from '../../../../styles';
import { ContainerSignUp, DefaultText } from './style';

const renderInput = (
  placeholder: string,
  iconName: string,
  type: string,
): Object => (
  <Input
    placeholder={placeholder}
    iconName={iconName}
    type={type}
  />
);

const SignUp = (): Object => (
  <ContainerSignUp>
    {renderInput('E-mail', 'email-outline', 'emailAddress')}
    {renderInput('Password', 'lock-outline', 'password')}
    {renderInput('Confirm Password', 'lock-reset', 'password')}
    <ButtonContent
      color={appStyles.colors.primaryColor}
    >
      <DefaultText>SIGN UP</DefaultText>
    </ButtonContent>
  </ContainerSignUp>
);

export default SignUp;
