import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth?: string;

    color: {
      main: string;
      sub: string;
      button?: string;
      subtext?: string;
      background?: string;
      consulting?: string;
    };
  }
}
