import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = (): JSX.Element => {
  return (
    <div>
      <h4>Nav</h4>
    </div>
  );
};

export default Nav;
