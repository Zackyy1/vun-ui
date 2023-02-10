import React, { forwardRef, MutableRefObject } from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const VCard = forwardRef(
  (
    { children, className, id }: CardProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <div ref={ref} className={`vcard ${className ? className : ""}`} id={id}>
        {children}
      </div>
    );
  }
);

export default VCard;
