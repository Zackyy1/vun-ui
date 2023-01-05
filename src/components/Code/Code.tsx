import React from "react";
import "./Code.scss";
export interface CodeProps {
  children: React.ReactNode[] | React.ReactNode;
  inline?: boolean;
  className?: string;
  id?: string;
}

const Code = ({ children, inline, className, id }: CodeProps) => {
  return (
    <span className={`vcode ${inline ? "inline" : ""} ${className ? className : ''}`} id={id}>
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
