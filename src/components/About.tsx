
import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="fade-in">
      <div className="about-background"></div>
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Soy un apasionado creador de contenido gráfico especializado en análisis de datos, con más de 5 años de experiencia transformando información compleja en visualizaciones claras y atractivas.</p>
          <p>Mi enfoque combina principios de diseño sólidos con conocimiento técnico profundo, permitiéndome crear no solo gráficos hermosos, sino también funcionalmente efectivos.</p>
          <p>Trabajo con empresas de todos los tamaños, ayudándoles a comunicar sus datos de manera que generen impacto y faciliten la toma de decisiones estratégicas.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-item"><div>📊</div><div>Tableau</div></div>
          <div className="skill-item"><div>🐍</div><div>Python</div></div>
          <div className="skill-item"><div>📈</div><div>Power BI</div></div>
          <div className="skill-item"><div>🎨</div><div>D3.js</div></div>
          <div className="skill-item"><div>📋</div><div>Excel</div></div>
          <div className="skill-item"><div>🎯</div><div>Figma</div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
