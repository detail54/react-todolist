import React from 'react'
import OpenSectionView from './OpenSectionView';

interface IProps {
  osTitle: string;
  osBody: any;
  onCloseSection: () => void;
}

const OpenSection: React.FC<IProps> = (props) => {

  const { osTitle, osBody, onCloseSection } = props;

  const viewProps = {
    osTitle,
    osBody,
    onCloseSection,
  }

  return <OpenSectionView {...viewProps} />
}

export default OpenSection
