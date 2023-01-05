import React from "react";
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

const Slider = ({ min, max, step, defaultValue, className, id, name }: SliderProps) => {
  return (
    <input type="range" min={min} max={max} defaultValue={defaultValue} step={step} className={`vslider ${className ? className : ''}`} id={id} name={name} />
  );
};

export default Slider;
