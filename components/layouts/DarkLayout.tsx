import React from "react";
import { FC, PropsWithChildren } from "react";
export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "16px",
        borderRadius: "5px",
        border: "1px solid purple",
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
