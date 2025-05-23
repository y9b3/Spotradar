import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Arrow({ size = 24, color = '#000' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 5l8 7-8 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
} 