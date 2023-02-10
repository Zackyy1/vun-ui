import React, { forwardRef, MutableRefObject } from "react";
import "./Slider.scss";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  className?: string;
  id?: string;
  name?: string;
}

const VSlider = forwardRef(
  (
    { min, max, step, defaultValue, className, id, name }: SliderProps,
    ref: React.Ref<any> | MutableRefObject<any>
  ) => {
    return (
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        className={`vslider ${className ? className : ""}`}
        id={id}
        name={name}
      />
    );
  }
);

export default VSlider;
