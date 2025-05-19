import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Arrow = ({ size = 16, color = '#FFFFFF' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 3L14 8L8 13M2 8H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrow; 