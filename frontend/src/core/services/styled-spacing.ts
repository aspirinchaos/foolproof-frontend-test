export interface PaddingProps {
  pb?: string;
  pt?: string;
  pr?: string;
  pl?: string;
  px?: string;
  py?: string;
  p?: string;
}

export interface MarginProps {
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  mx?: string;
  my?: string;
  m?: string;
}


export const paddingMixin = ({ pb, pt, pr, pl, px, py, p }: PaddingProps) => {
  const padding = [
    p ? `padding: ${p};` : '',
    px ? `padding-right: ${px}; padding-left: ${px};` : '',
    py ? `padding-top: ${py}; padding-bottom: ${py};` : '',
    pt ? `padding-top: ${pt};` : '',
    pr ? `padding-right: ${pr};` : '',
    pb ? `padding-bottom: ${pb};` : '',
    pl ? `padding-left: ${pl};` : '',
  ];

  return padding.filter(Boolean).join(' ');
};

export const marginMixin = ({ mb, mt, mr, ml, mx, my, m }: MarginProps) => {
  const padding = [
    m ? `margin: ${m};` : '',
    mx ? `margin-right: ${mx}; margin-left: ${mx};` : '',
    my ? `margin-top: ${my}; margin-bottom: ${my};` : '',
    mt ? `margin-top: ${mt};` : '',
    mr ? `margin-right: ${mr};` : '',
    mb ? `margin-bottom: ${mb};` : '',
    ml ? `margin-left: ${ml};` : '',
  ];

  return padding.filter(Boolean).join(' ');
};
