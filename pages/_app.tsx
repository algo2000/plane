import React from "react";

import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import ThemeRoot from "../theme/ThemeRoot";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeRoot>
        <Component {...pageProps} />
      </ThemeRoot>
    </RecoilRoot>
  );
}
