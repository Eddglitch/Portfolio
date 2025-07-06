import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutBgRef = useRef<HTMLDivElement>(null);
  const sobreMiSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const aboutBg = aboutBgRef.current;
    const sobreMiSection = sobreMiSectionRef.current;

    if (!aboutBg || !sobreMiSection) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
      if (inMin === inMax) return outMin;
      const t = (value - inMin) / (inMax - inMin);
      return lerp(outMin, outMax, Math.min(1, Math.max(0, t)));
    };

    const updateBackgroundEffect = () => {
      const sectionRect = sobreMiSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let currentOpacity;
      let currentBlur;

      const sectionScrollTop = window.pageYOffset - sobreMiSection.offsetTop;
      aboutBg.style.transform = `translateY(${sectionScrollTop * 0.1}px)`;

      const startFadeInPoint = viewportHeight;
      const endFadeInPoint = viewportHeight * 0.5;
      const startFadeOutPoint = viewportHeight * 0.9;
      const endFadeOutPoint = -sobreMiSection.offsetHeight;

      if (sectionRect.top < startFadeInPoint && sectionRect.bottom > endFadeOutPoint) {
        if (sectionRect.top > endFadeInPoint) {
          const t = mapRange(sectionRect.top, startFadeInPoint, endFadeInPoint, 0, 1);
          currentOpacity = lerp(0, 0.09, t);
          currentBlur = lerp(20, 1.5, t);
        } else if (sectionRect.top < startFadeOutPoint) {
          const t = mapRange(sectionRect.top, startFadeOutPoint, endFadeOutPoint, 0, 1);
          currentOpacity = lerp(0.09, 0, t);
          currentBlur = lerp(1.5, 20, t);
        } else {
          currentOpacity = 0.09;
          currentBlur = 1.5;
        }
      } else {
        currentOpacity = 0;
        currentBlur = 20;
      }

      aboutBg.style.opacity = Math.max(0, Math.min(0.69, currentOpacity)).toString();
      aboutBg.style.filter = `blur(${Math.max(1.5, Math.min(20, currentBlur))}px)`;
    };

    window.addEventListener('scroll', updateBackgroundEffect, { passive: true });
    window.addEventListener('resize', updateBackgroundEffect);
    updateBackgroundEffect();

    return () => {
      window.removeEventListener('scroll', updateBackgroundEffect);
      window.removeEventListener('resize', updateBackgroundEffect);
    };
  }, []);

  return (
    <section id="sobre-mi" className="fade-in" ref={sobreMiSectionRef}>
      <div className="about-background" ref={aboutBgRef} style={{ backgroundImage: `url(/Edd.png)` }}></div>
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