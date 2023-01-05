import React, { forwardRef } from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const Card = forwardRef(({ children, className, id }: CardProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className={`vcard ${className ? className : ""}`} id={id}>
      {children}
    </div>
  );
});

export default Card;
