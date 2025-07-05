import React, { useEffect, useRef } from 'react';

const ThemeToggle: React.FC = () => {
  const eyeContainerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    const eyeContainerWrapper = eyeContainerWrapperRef.current;
    if (!eyeContainerWrapper) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.dataset.theme = savedTheme;
    } else {
      body.dataset.theme = 'dark';
    }

    const applyPupilStyle = () => {
      const eyes = document.querySelectorAll('.eye-sphere');
      const currentTheme = body.dataset.theme;
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.eye-pupil');
        if (pupil) {
          if (currentTheme === 'light') {
            pupil.classList.add('day-mode-pupil');
            pupil.classList.remove('night-mode-pupil');
          } else {
            pupil.classList.add('night-mode-pupil');
            pupil.classList.remove('day-mode-pupil');
          }
        }
      });
    };

    const blink = (eyeLids: NodeListOf<Element>) => {
      eyeLids.forEach(lid => lid.classList.add('closed'));
      setTimeout(() => {
        eyeLids.forEach(lid => lid.classList.remove('closed'));
      }, 200);
    };

    eyeContainerWrapper.addEventListener('click', () => {
      const currentTheme = body.dataset.theme;
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.dataset.theme = newTheme;
      localStorage.setItem('theme', newTheme);
      applyPupilStyle();

      const eyeLids = document.querySelectorAll('.eye-lid');
      blink(eyeLids);
    });

    applyPupilStyle();

    const eyes = document.querySelectorAll('.eye-sphere');
    eyes.forEach(eye => {
      const eyeIris = eye.querySelector<HTMLElement>('.eye-iris');
      const eyePupil = eye.querySelector<HTMLElement>('.eye-pupil');

      if (!eyeIris || !eyePupil) return;

      let pupilX = 0;
      let pupilY = 0;
      let irisX = 0;
      let irisY = 0;
      let targetPupilX = 0;
      let targetPupilY = 0;
      let targetIrisX = 0;
      let targetIrisY = 0;

      const pupilRange = 3;
      const irisRange = 8;

      const handleMouseMove = (e: MouseEvent) => {
        const sphereRect = eye.getBoundingClientRect();
        const sphereCenterX = sphereRect.left + sphereRect.width / 2;
        const sphereCenterY = sphereRect.top + sphereRect.height / 2;

        const deltaX = e.clientX - sphereCenterX;
        const deltaY = e.clientY - sphereCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), pupilRange);

        targetPupilX = Math.cos(angle) * distance;
        targetPupilY = Math.sin(angle) * distance;

        const irisDistance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), irisRange);
        targetIrisX = Math.cos(angle) * irisDistance;
        targetIrisY = Math.sin(angle) * irisDistance;
      };

      const animateEye = () => {
        pupilX += (targetPupilX - pupilX) * 0.1;
        pupilY += (targetPupilY - pupilY) * 0.1;

        const currentTheme = body.dataset.theme;
        if (currentTheme === 'light') {
          eyePupil.classList.add('day-mode-pupil');
          eyePupil.classList.remove('night-mode-pupil');
          eyePupil.style.transform = `translate(${pupilX}px, ${pupilY}px) scaleX(0.5)`;
        } else {
          eyePupil.classList.add('night-mode-pupil');
          eyePupil.classList.remove('day-mode-pupil');
          eyePupil.style.transform = `translate(${pupilX}px, ${pupilY}px) scaleX(1)`;
        }

        irisX += (targetIrisX - irisX) * 0.1;
        irisY += (targetIrisY - irisY) * 0.1;
        eyeIris.style.transform = `translate(${irisX}px, ${irisY}px)`;

        requestAnimationFrame(animateEye);
      };

      document.addEventListener('mousemove', handleMouseMove);
      animateEye();

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, []);

  return (
    <div className="eye-container-wrapper" role="button" aria-label="Toggle day/night mode" ref={eyeContainerWrapperRef}>
      <div className="eye-sphere" id="leftEye">
        <div className="eye-iris">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye-lid top"></div>
        <div className="eye-lid bottom"></div>
      </div>
      <div className="eye-sphere" id="rightEye">
        <div className="eye-iris">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye-lid top"></div>
        <div className="eye-lid bottom"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;