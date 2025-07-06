import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', () => {
        video.style.opacity = '0';
        video.currentTime = 0;
        video.play();
      });

      video.addEventListener('playing', () => {
        if (video.currentTime < 0.1) {
          video.style.opacity = '0.65';
        }
      });

      video.style.opacity = '0.65';
    }
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>Eduardo Téllez Valverde</h1>
        <p className="subtitle">Creador de Contenido Gráfico para Análisis de Datos</p>
        <p className="description">Transformo datos complejos en narrativas visuales comprensibles y atractivas. Especializado en crear visualizaciones que comunican insights de manera efectiva.</p>
        <a href="#proyectos" className="cta-button">Ver Mi Trabajo</a>
      </div>

      <div className="hero-video-background">
        <video autoPlay muted loop id="heroVideo" ref={videoRef}>
          <source src={`${process.env.NEXT_PUBLIC_BASE_PATH}/video2.mp4`} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="video-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;