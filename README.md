# Construcción y recopilación - Estructura de portafolio

## Control de Cambios

### v1.0.1 - Corrección de Despliegue en GitHub Pages

- **Problema:** La aplicación no se visualizaba correctamente al ser desplegada en GitHub Pages, resultando en errores 404 para todos los assets (CSS, JS, imágenes y videos).
- **Causa Raíz:** Configuración incorrecta en `next.config.mjs` que no generaba las rutas de los archivos de manera compatible con un despliegue en un subdirectorio (ej. `https://<usuario>.github.io/<repositorio>/`).
- **Solución Implementada:**
  1.  Se ajustó `next.config.mjs` para definir explícitamente las variables `basePath` y `assetPrefix` basadas en el nombre del repositorio. Esto asegura que Next.js construya todas las rutas de los archivos (tanto de la aplicación como de los assets) con el prefijo correcto.
  2.  Se reintrodujo una variable de entorno (`NEXT_PUBLIC_BASE_PATH`) para ser usada en el código fuente al referenciar assets estáticos (imágenes, videos), garantizando que las rutas sean siempre correctas tanto en desarrollo como en producción.
  3.  Se actualizaron todos los componentes que usan assets para que utilicen esta variable de entorno, eliminando las rutas relativas que causaban los errores.
- **Resultado:** La aplicación ahora se despliega y visualiza correctamente en GitHub Pages, cargando todos los recursos sin errores.

## Desarrollo

### Depuración en VS Code

Este proyecto incluye una configuración de depuración para Visual Studio Code que te permite iniciar y depurar la aplicación directamente desde el editor.

**Para usarla:**

1.  Asegúrate de tener la aplicación corriendo en modo de desarrollo (`npm run dev`), que se ejecuta en `http://localhost:3000`.
2.  Ve a la pestaña "Ejecutar y depurar" (Run and Debug) en VS Code (puedes usar el atajo `Ctrl+Shift+D`).
3.  En el menú desplegable de la parte superior, selecciona **"Launch Chrome against localhost"**.
4.  Haz clic en el botón de play (▶️) para iniciar.

Esto abrirá una nueva ventana de Chrome conectada al depurador de VS Code, permitiéndote poner breakpoints, inspeccionar variables y depurar el código de tu aplicación de manera eficiente.
