import React from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const Card = ({ children, className, id }: CardProps) => {
  return <div className={`vcard ${className ? className : ''}`} id={id}>{children}</div>;
};

export default Card;
