
import React from 'react';

const Hero = () => {
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
        <video autoPlay muted loop id="heroVideo">
          <source src="/video2.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="video-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
