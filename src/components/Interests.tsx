
import React from 'react';

const Interests = () => {
  return (
    <section id="intereses" className="interests fade-in">
      <div className="video-container">
        <video autoPlay muted loop id="interestsVideo">
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
