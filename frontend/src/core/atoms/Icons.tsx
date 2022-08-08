import React from 'react';

import SvgIcon from './SvgIcon';

export const FoldersIcon: React.FC = () => (
  <SvgIcon width={576} height={512}>
    <path
      d="M544 32h-112l-32-32H320c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h224c17.62 0 32-14.38 32-32V64C576 46.38 561.6 32 544 32zM544 320h-112l-32-32H320c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h224c17.62 0 32-14.38 32-32v-128C576 334.4 561.6 320 544 320zM64 16C64 7.125 56.88 0 48 0h-32C7.125 0 0 7.125 0 16V416c0 17.62 14.38 32 32 32h224v-64H64V160h192V96H64V16z" />
  </SvgIcon>
);

export const TypeIcon: React.FC = () => (
  <SvgIcon width={512} height={512}>
    <path
      d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z" />
  </SvgIcon>
);

export const FileIcon = () => (
  <SvgIcon width={384} height={512}>
    <path
      d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z" />
  </SvgIcon>
);
