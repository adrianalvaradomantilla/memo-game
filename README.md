# Memory Game App

Proyecto desarrollado con Angular en su versión 17.3.0. El proyecto consiste en un juego que ofrece una experiencia de memoria con soporte de registro de usuario, esto para poder contar un puntuaje unico e incluir una experiencia competitiva extra, también puedes jugar sin registrar tu username, pero esto te dejaría fuera del puntuaje, sonidos, temporizador y resultados.

## 📁 Estructura del proyecto

- `memory-game/`
  - `angular.json` - configuración de Angular CLI.
  - `package.json` - dependencias y scripts.
  - `src/`
    - `app/`
      - `core/` - servicios globales, guardias, interceptores y componentes base como el header.
      - `features/` - módulos funcionales por área del juego:
        - `game/` - lógica del juego, cartas, temporizador y control de sonido.
        - `general/` - Componentes de inicio  de la aplicación.
        - `register/` - flujo de registro de usuario.
        - `result/` - pantalla de resultados y navegación final.
        - `score/` - puntajes y estadísticas.
      - `shared/` - componentes reutilizables, constantes, directivas y utilidades.
    - `assets/` - imágenes y sonidos utilizados en el juego.

## 🧱 Arquitectura

El proyecto sigue una arquitectura basada en características con Angular:

- **Modular**: : cada área clave del juego (registro, juego, resultado y puntajes) está separada en su propia ruta y módulo lógico. Al utilizar componentes standalone, cada pieza funciona de manera independiente y encapsulada, importando estrictamente los recursos necesarios para su funcionamiento..
- **Componentes reutilizables**: se utilizan componentes compartidos para botones, modales y elementos de UI comunes.
- **Servicios**: la lógica de negocio y estado del juego se encapsula en servicios dentro de `core/services` y en los servicios específicos de cada característica.
- **Guardias de ruta**: la navegación está protegida según el flujo del juego y el estado del usuario. Se implementaron Guards para restringir el acceso a las rutas del juego principal y de los resultados, evitando que los usuarios accedan de forma directa escribiendo la URL en el navegador sin cumplir el flujo solicitado.
- **Rutas**: la configuración de rutas se define en archivos como `app.routes.ts` y los archivos de rutas de cada feature.

## 🚀 Cómo ejecutar el proyecto

1. Abre una terminal en la carpeta raíz del proyecto:
   ```bash
   cd "c:\Users\youruser\memory-game"
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación en modo de desarrollo:
   ```bash
   npm start
   ```

4. Luego abre el navegador en:
   ```bash
   http://localhost:4200
   ```

## 🛠 Comandos útiles

- `npm install` - instala dependencias.
- `npm start` - arranca el servidor de desarrollo.
- `npm run build` - genera la versión de producción.

## 💡 Características principales

- Juego de memoria con cartas y lógica de aciertos/errores.
- Registro de usuario antes de iniciar la partida.
- Temporizador y control de sonido.
- Pantalla de resultados y puntajes.
- Interfaz modular y mantenible.