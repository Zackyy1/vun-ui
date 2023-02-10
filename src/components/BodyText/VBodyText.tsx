import React, { forwardRef, MutableRefObject } from "react";
import "./BodyText.scss";

export interface BodyTextProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const VBodyText = forwardRef(
  (
    { children, className, id }: BodyTextProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <p
        ref={ref}
        className={`vbodytext ${className ? className : ""}`}
        id={id}
      >
        {children}
      </p>
    );
  }
);

export default VBodyText;
