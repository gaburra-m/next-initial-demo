import styles from "./Navbar.module.css";
import { Inter } from "next/font/google";
import { ActiveLink } from "./ActiveLink";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <header className={`${styles.header} ${inter.className}`}>
      <Link href="/" className={styles.logo}>
        Gaburra
      </Link>
      <nav className={styles["menu-container"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink text={text} href={href} key={href} />
        ))}
      </nav>
    </header>
  );
};
