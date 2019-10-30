// @flow

import React from 'react';

import ProgressiveImage from '../../../../components/common/ProgressiveImage';

import { ContainerHeader, DarkLayer } from './style';

type Props = {
  thumbnailImageURL: string,
  imageURL: string,
};

const HeaderSection = ({ thumbnailImageURL, imageURL }: Props): Object => (
  <ContainerHeader>
    <ProgressiveImage
      thumbnailImageURL={thumbnailImageURL}
      imageURL={imageURL}
    />
    <DarkLayer />
  </ContainerHeader>
);

export default HeaderSection;
