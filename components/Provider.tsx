"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

const Provider = ({ children, session }: SessionProviderProps): JSX.Element => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
