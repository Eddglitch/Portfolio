
'use client';

import { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    const body = document.body;
    const eyeContainer = document.querySelector('.eye-container-wrapper');

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
        const pupil = eye.querySelector('.eye-pupil') as HTMLElement;
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

    const handleThemeToggle = () => {
      const currentTheme = body.dataset.theme;
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.dataset.theme = newTheme;
      localStorage.setItem('theme', newTheme);
      applyPupilStyle();
    };

    eyeContainer?.addEventListener('click', handleThemeToggle);

    applyPupilStyle();

    return () => {
      eyeContainer?.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  return (
    <div className="eye-container-wrapper" role="button" aria-label="Toggle day/night mode">
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
