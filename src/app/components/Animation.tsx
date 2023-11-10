'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
// import Typed from 'typed.js';

export default function Animation() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-ani');
        } else {
          entry.target.classList.remove('show-ani');
        }
      });
    });

    const scrollUpEl = document.querySelectorAll('.hidden-ani');
    const scrollUpFromLeftEl = document.querySelectorAll(
      '.hidden-ani-from-left'
    );
    const scrollUpFromRightEl = document.querySelectorAll(
      '.hidden-ani-from-right'
    );
    const scrollUpFromBotEl = document.querySelectorAll('.hidden-ani-from-bot');
    const scaleBgEl = document.querySelectorAll('.ani-scale-bg');

    scrollUpEl.forEach(el => {
      observer.observe(el);
    });
    scrollUpFromLeftEl.forEach(el => {
      observer.observe(el);
    });
    scrollUpFromRightEl.forEach(el => {
      observer.observe(el);
    });
    scrollUpFromBotEl.forEach(el => {
      observer.observe(el);
    });
    scaleBgEl.forEach(el => {
      observer.observe(el);
    });
  }, [pathname]);
  return null;
}
