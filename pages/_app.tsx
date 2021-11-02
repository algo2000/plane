import React from "react";

import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import ThemeRoot from "../theme/ThemeRoot";

import Sidebar from "../components/sidebar";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeRoot>
        <div style={{ display: "flex", maxWidth: 1100 }}>
          <div style={{ flexBasis: "30%", margin: 25 }}>
            <Sidebar />
          </div>
          <div style={{ flexBasis: "70%", margin: 25 }}>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeRoot>
    </RecoilRoot>
  );
}
