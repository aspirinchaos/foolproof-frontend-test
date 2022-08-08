import React from 'react';

interface SvgIconProps {
  width: number;
  height: number;
  children: React.ReactNode
}

const SvgIcon: React.FC<SvgIconProps> = ({ children, height, width }) => {
  return (
    <svg
      width={'1em'}
      height={'1em'}
      viewBox={`0 0 ${width} ${height}`}
      version={'1.1'}
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'currentColor'}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
