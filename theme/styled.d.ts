import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: {
      main: string;
      sub: string;
    };

    brandColor: {
      main: string;
    };

    activateColor: {
      error: string;
    };

    backgroundColor: {
      bg: string;
      card: string;
    };

    lineColor: {
      main: string;
    };

    common: {
      fontSize: {
        s10: Number;
        s12: Number;
        s14: Number;
        s16: Number;
        s18: Number;
        s20: Number;
        s24: Number;
        s28: Number;
        s32: Number;
        s36: Number;
      };
      fontWeight: {
        medium: string;
        bold: string;
      };
      borderRadius: {
        default: Number;
      };
    };
  }
}
