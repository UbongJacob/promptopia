import { Metadata } from "next";

import "@styles/globals.css";
import { PropsWithChildren } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

interface Props extends PropsWithChildren {}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
