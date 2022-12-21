import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "../../styles/nav.css";
import "../../styles/globals.css";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#000000",
      text: "#ffffff",
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    
      <SessionProvider session={session}>
        <NextUIProvider theme={myDarkTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </SessionProvider>
    
  );
}
