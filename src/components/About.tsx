import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sobreMiSectionRef = useRef<HTMLElement>(null);
  const aboutBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sobreMiSectionRef.current;
    const background = aboutBgRef.current;
    if (!section || !background) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            background.classList.add('visible');
          } else {
            background.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section id="sobre-mi" className="fade-in" ref={sobreMiSectionRef}>
      <div className="about-background" ref={aboutBgRef} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Edd.png)` }}></div>
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
