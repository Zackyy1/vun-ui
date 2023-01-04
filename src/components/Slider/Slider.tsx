import React from "react";
import "./Slider.scss";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

const Slider = ({ min, max, step, defaultValue }: SliderProps) => {
  return (
    <input type="range" min={min} max={max} defaultValue={defaultValue} step={step} className="vslider " />
  );
};

export default Slider;
