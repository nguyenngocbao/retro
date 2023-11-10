'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
// import Typed from 'typed.js';

export default function Animation() {
  const pathname = usePathname();

  const animationInVisible = (classNames: string[]) => {
    const cancelObservers: IntersectionObserver[] = [];

    classNames.forEach(className => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            entry.target.classList.remove(className);
          }
        });
      });

      const els = document.querySelectorAll(`.${className}`);
      els.forEach(el => {
        observer.observe(el);
      });

      cancelObservers.push(observer);
    });

    return () => {
      cancelObservers.forEach(o => o.disconnect());
    };
  };

  const animationOnVisibile = () => {
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

    return observer;
  };

  useEffect(() => {
    const animationInVisibleObserverCancelation = animationInVisible([
      'jello-horizontal',
      'jello-vertical'
    ]);
    const animationOnVisibileObserver = animationOnVisibile();
    return () => {
      animationInVisibleObserverCancelation();
      animationOnVisibileObserver.disconnect();
    };
  }, [pathname]);
  return null;
}
