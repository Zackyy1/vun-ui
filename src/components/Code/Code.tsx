import React from "react";
import "./Code.scss";
export interface CodeProps {
  children: React.ReactNode[] | React.ReactNode;
  inline?: boolean;
}

const Code = ({ children, inline }: CodeProps) => {
  return (
    <span className={`vcode ${inline ? "inline" : ""}`}>
      {inline ? (
        <code>{children}</code>
      ) : (
        <pre>
          <code>{children}</code>
        </pre>
      )}
    </span>
  );
};

export default Code;
