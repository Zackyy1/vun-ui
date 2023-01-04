import React from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="vcard">{children}</div>;
};

export default Card;
