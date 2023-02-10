import React, { forwardRef, MutableRefObject } from "react";
import "./Button.scss";

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
  inset?: boolean;
}

const VButton = forwardRef(
  (
    { onClick, children, className, id, inset }: ButtonProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <button
        ref={ref}
        className={`vbutton ${inset ? "inset" : ""} ${
          className ? className : ""
        }`}
        id={id}
        onClick={(event) => onClick && onClick(event)}
      >
        {children}
      </button>
    );
  }
);

export default VButton;
