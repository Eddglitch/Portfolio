import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerTransform, setHeaderTransform] = useState('translateY(0)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setHeaderTransform('translateY(-100%)');
      } else {
        setHeaderTransform('translateY(0)');
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header style={{ transform: headerTransform }}>
      <nav>
        <div className="logo">Edd Téllez</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#intereses">Intereses</a></li>
          <li><a href="#trayectoria-musical">Música</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;