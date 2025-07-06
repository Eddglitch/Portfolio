import React, { useEffect, useRef } from 'react';

const Interests: React.FC = () => {
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
          video.style.opacity = '0.55';
        }
      });

      video.style.opacity = '0.55';
    }
  }, []);

  return (
    <section id="intereses" className="interests fade-in">
      <div className="video-container">
        <video autoPlay muted loop id="interestsVideo" ref={videoRef}>
          <source src="/tu-video-intereses.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <div className="video-overlay"></div>
      <div className="interests-content">
        <h2 className="section-title">Intereses Personales</h2>
        <div className="interests-grid">
          <div className="interest-item"><span className="interest-icon">🎵</span><h3 className="interest-title">Música</h3><p className="interest-description">Exploro la relación entre patrones musicales y visualización de datos.</p></div>
          <div className="interest-item"><span className="interest-icon">🏃‍♂️</span><h3 className="interest-title">Running</h3><p className="interest-description">Analizo mis datos de carrera para optimizar mi performance.</p></div>
          <div className="interest-item"><span className="interest-icon">📚</span><h3 className="interest-title">Lectura</h3><p className="interest-description">Fascinado por libros sobre psicología cognitiva y percepción visual.</p></div>
          <div className="interest-item"><span className="interest-icon">🌱</span><h3 className="interest-title">Sostenibilidad</h3><p className="interest-description">Visualizo datos ambientales para crear conciencia sobre el cambio climático.</p></div>
        </div>
      </div>
    </section>
  );
};

export default Interests;