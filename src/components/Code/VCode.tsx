import React, { forwardRef, MutableRefObject } from "react";
import "./Code.scss";
export interface CodeProps {
  children: React.ReactNode[] | React.ReactNode;
  inline?: boolean;
  className?: string;
  id?: string;
}

const VCode = forwardRef(
  (
    { children, inline, className, id }: CodeProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <span
        ref={ref}
        className={`vcode ${inline ? "inline" : ""} ${
          className ? className : ""
        }`}
        id={id}
      >
        {inline ? (
          <code>{children}</code>
        ) : (
          <pre>
            <code>{children}</code>
          </pre>
        )}
      </span>
    );
  }
);

export default VCode;
