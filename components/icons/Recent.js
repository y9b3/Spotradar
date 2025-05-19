import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Recent = ({ size = 24, color = '#FFFFFF' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
        fill={color}
      />
      <Path
        d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
        fill={color}
      />
    </Svg>
  );
};

export default Recent; 