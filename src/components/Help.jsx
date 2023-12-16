import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import HelpCenter from './HelpCenter';
import HelpButton from './HelpButton';
import { useHelpCenterState } from '../Providers/HelpCenterStateProvider';

const Help = () => {
  return (
    <>
      <HelpButton />
      <HelpCenter />
    </>
  )
}

export default Help