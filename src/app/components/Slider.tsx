'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { forwardRef } from 'react';
import ReactSlider from 'react-slick';

const _Slider = ({ children, ...props }, ref) => {
  return (
    <ReactSlider ref={ref} {...props}>
      {children}
    </ReactSlider>
  );
};

export const Slider = forwardRef(_Slider);
