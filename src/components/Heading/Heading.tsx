import React from "react";
import "./Heading.scss";

export interface HeadingProps {
  children: React.ReactNode[] | React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  id?: string;
}

const Heading = ({ children, tag, className, id }: HeadingProps) => {
  const Tag = tag || 'h1';
  return (
    <div className={`vheading ${className ? className : ''}`} id={id}>
      <Tag>{children}</Tag>
    </div>
  );
};

export default Heading;
