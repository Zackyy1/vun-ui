import React, { forwardRef, MutableRefObject } from "react";
import "./Container.scss";

export interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const VContainer = forwardRef(
  (
    { children, className, id }: ContainerProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <div
        ref={ref}
        className={`vcontainer ${className ? className : ""}`}
        id={id}
      >
        {children}
      </div>
    );
  }
);

export default VContainer;
