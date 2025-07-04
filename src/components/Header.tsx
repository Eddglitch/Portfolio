
'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)' }}>
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
