import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | gaburra</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </div>
  );
};
