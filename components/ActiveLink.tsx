import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, CSSProperties } from "react";
const style: CSSProperties = {
  color: "rgb(181, 180, 253)",
  paddingBottom: ".2rem",
  borderBottom: "1px solid rgb(181, 180, 253)",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
