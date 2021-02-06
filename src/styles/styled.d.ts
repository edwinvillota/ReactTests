import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      background: string;
      text: string;
      gray: string;
    };
  }
}
