export interface NavItemModel {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

export enum SCREEN_BREAKPOINT {
  XS = 0,
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  DXL = 1536,
}

export type APP_ENV_MODE = 'dev' | 'qa' | 'prod';
