import React from 'react';

interface ProjectsProps {
  openModal: (type: 'video' | 'image', src: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openModal }) => {
  return (
    <section id="proyectos" className="fade-in">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        <div className="project-card card-hover">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>📊</div>
          <div className="project-content">
            <h3 className="project-title">Dashboard de Ventas Interactivo</h3>
            <p className="project-description">Dashboard que analiza tendencias de ventas, performance por región y predicciones de crecimiento.</p>
            <div className="project-tags"><span className="tag">Tableau</span><span className="tag">Python</span><span className="tag">SQL</span></div>
            <div className="project-links"><a href="#" className="project-link">Ver Proyecto →</a><a href="#" className="project-link">GitHub →</a></div>
          </div>
        </div>
        <div className="project-card card-hover">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>🌐</div>
          <div className="project-content">
            <h3 className="project-title">Visualización de Datos Geoespaciales</h3>
            <p className="project-description">Mapa interactivo que muestra patrones de migración urbana y densidad poblacional.</p>
            <div className="project-tags"><span className="tag">D3.js</span><span className="tag">Leaflet</span><span className="tag">JavaScript</span></div>
            <div className="project-links"><a href="#" className="project-link">Ver Proyecto →</a><a href="#" className="project-link">Demo →</a></div>
          </div>
        </div>
        <div className="project-card card-hover">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>💰</div>
          <div className="project-content">
            <h3 className="project-title">Análisis de Mercado Financiero</h3>
            <p className="project-description">Herramienta de análisis técnico para traders con indicadores personalizados y alertas.</p>
            <div className="project-tags"><span className="tag">Power BI</span><span className="tag">R</span><span className="tag">API</span></div>
            <div className="project-links"><a href="#" className="project-link">Ver Proyecto →</a><a href="#" className="project-link">Docs →</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;