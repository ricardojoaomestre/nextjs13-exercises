"use client";
import { TextLink } from "./Link";
import { useRouter } from "next/navigation";

const NavBackLink = () => {
  const { back } = useRouter();
  return (
    <nav className="my-6">
      <TextLink onClick={back}>&lt; Back</TextLink>
    </nav>
  );
};

export default NavBackLink;
