# Portafolio de Eduardo Téllez - Visualización de Datos & Música

Este es el repositorio del portafolio personal de Eduardo Téllez, desarrollado con Next.js y TypeScript. El sitio muestra sus proyectos en visualización de datos, su trayectoria musical y sus habilidades técnicas.

![Captura de pantalla del sitio](httpsd://i.imgur.com/URL_DE_LA_IMAGEN.png) <!-- Reemplazar con una URL de captura de pantalla real -->

## ✨ Características Principales

- **Framework Moderno:** Construido con **Next.js 14** para un rendimiento óptimo y renderizado del lado del servidor.
- **Tipado Estricto:** Desarrollado con **TypeScript** para un código más robusto y mantenible.
- **Diseño Interactivo:**
  - **Cursor Personalizado:** Una experiencia de navegación única.
  - **Tema Dual (Claro/Oscuro):** Un interruptor animado en forma de ojos de gato permite cambiar entre modos.
  - **Animaciones Suaves:** Efectos de aparición (`fade-in`) y `scroll` suave para una navegación fluida.
  - **Modal Multimedia:** Un visor de imágenes y videos integrado para mostrar los proyectos.
- **Totalmente Responsivo:** Adaptado para una correcta visualización en dispositivos de escritorio, tabletas y móviles.

---

## 🚀 Cómo Empezar

Sigue estas instrucciones para tener una copia del proyecto corriendo en tu máquina local para desarrollo y pruebas.

### Pre-requisitos

- [Node.js](https://nodejs.org/) (versión 18.x o superior)
- [npm](https://www.npmjs.com/) (generalmente viene con Node.js)
- [Git](https://git-scm.com/)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Eddglitch/Portfolio.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd Portfolio
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

---

## 🛠️ Scripts Disponibles

En el archivo `package.json`, encontrarás varios scripts para gestionar la aplicación:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia un servidor de producción después de compilar.
- `npm run lint`: Ejecuta el linter de Next.js para revisar el código.

---

## 🚢 Despliegue

Este proyecto está configurado para ser desplegado fácilmente en **GitHub Pages**.

### Proceso de Despliegue

El repositorio utiliza una **GitHub Action** (`.github/workflows/deploy.yml`) que automatiza el proceso de construcción y despliegue.

1.  **Push a la rama `main`:** Cada vez que se hace un `push` o un `merge` a la rama `main`, la GitHub Action se dispara automáticamente.

2.  **La Action realiza los siguientes pasos:**
    - Configura el entorno de Node.js.
    - Instala las dependencias del proyecto.
    - Construye la aplicación para producción (`npm run build`).
    - Exporta el sitio estático a la carpeta `out/`.
    - Despliega el contenido de la carpeta `out/` a la rama `gh-pages` del repositorio.

3.  **Configuración de GitHub Pages:**
    - En la configuración de tu repositorio de GitHub, ve a la sección "Pages".
    - Asegúrate de que la fuente de despliegue ("Source") esté configurada para usar la rama `gh-pages` desde el directorio raíz (`/root`).

Una vez completado el flujo de trabajo, el sitio estará disponible en `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 🔧 Depuración en VS Code

Este proyecto incluye una configuración de depuración para Visual Studio Code.

1.  Inicia la aplicación en modo de desarrollo (`npm run dev`).
2.  Ve a la pestaña "Ejecutar y depurar" (`Ctrl+Shift+D`).
3.  Selecciona **"Launch Chrome against localhost"** y presiona F5.

Esto abrirá una nueva ventana de Chrome conectada al depurador de VS Code, permitiéndote establecer breakpoints y analizar el código en tiempo de ejecución.