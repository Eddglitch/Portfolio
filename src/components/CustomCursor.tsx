
'use client';

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .media-placeholder, .eye-container-wrapper, .social-media-group');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const easingFactor = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * easingFactor;
      cursorY += (mouseY - cursorY) * easingFactor;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX - cursor.offsetWidth / 2}px, ${cursorY - cursor.offsetHeight / 2}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animateCursor);

    const handleMouseEnter = () => cursor?.classList.add('hover');
    const handleMouseLeave = () => cursor?.classList.remove('hover');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
