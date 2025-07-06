import React from 'react';

interface ProjectsProps {
  openModal: (type: 'video' | 'image', src: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openModal }) => {
  return (
    <section id="proyectos" className="fade-in">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>📊</div>
          <div className="project-content">
            <h3 className="project-title">Dashboard de Ventas Interactivo</h3>
            <p className="project-description">Dashboard que analiza tendencias de ventas, performance por región y predicciones de crecimiento.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>🌐</div>
          <div className="project-content">
            <h3 className="project-title">Visualización de Datos Geoespaciales</h3>
            <p className="project-description">Mapa interactivo que muestra patrones de migración urbana y densidad poblacional.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image" onClick={() => openModal('image', `${process.env.NEXT_PUBLIC_BASE_PATH}/Edd.png`)}>💰</div>
          <div className="project-content">
            <h3 className="project-title">Análisis de Mercado Financiero</h3>
            <p className="project-description">Herramienta de análisis técnico para traders con indicadores personalizados y alertas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;