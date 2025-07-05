import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

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

      cursor.style.transform = `translate(${cursorX - cursor.offsetWidth / 2}px, ${cursorY - cursor.offsetHeight / 2}px)`;

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animateCursor);

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .media-placeholder, .eye-container-wrapper, .social-media-group');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.removeEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;