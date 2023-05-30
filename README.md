# Proyecto en Vite

¡Bienvenido/a al proyecto en Vite! Este repositorio contiene el código fuente de una aplicación web desarrollada utilizando Vite, un entorno de desarrollo rápido para aplicaciones web en JavaScript.

## Descripción

El objetivo de este proyecto es proporcionar una base sólida y moderna para construir aplicaciones web utilizando Vite. Vite es un framework de desarrollo rápido que permite crear aplicaciones web con un rendimiento excelente. En este proyecto, hemos configurado Vite con las herramientas y dependencias necesarias para comenzar a desarrollar tu aplicación de forma eficiente.

## Características

- Configuración predeterminada de Vite para un inicio rápido.
- Soporte para JavaScript moderno (ES6+).
- Integración con React (u otra biblioteca de tu elección).
- Soporte para recarga en caliente (hot-reloading) para una experiencia de desarrollo fluida.
- Empaquetado optimizado para producción con generación de código minificado y optimizado.
- Soporte para gestión de rutas (routing) mediante React Router (o una alternativa de tu preferencia).

## Requisitos previos

Antes de comenzar a trabajar con este proyecto, asegúrate de tener instalado Node.js en tu máquina. Puedes descargarlo e instalarlo desde el sitio web oficial de Node.js: [https://nodejs.org](https://nodejs.org)

## Configuración

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo local:

1. Clona este repositorio en tu máquina local o descarga el código fuente.

  ```shell
    git clone https://github.com/Maij3/Postcast-App.git
  ```
2.- Navega hasta el directorio del proyecto:

  ```shell
    cd podcast-app
  ```
3.- Instala las dependencias del proyecto utilizando npm (o yarn):

  ```shell
    npm install
  ```
4.- Inicia el servidor de desarrollo local:

  ```shell
    npm run dev
  ```

## Estructura del proyecto
 - public: Este directorio contiene archivos estáticos que se copiarán sin procesamiento en la carpeta de salida final.

  - src: Aquí es donde se encuentra el código fuente de la aplicación.
  components: Componentes reutilizables de la aplicación.

  - pages: Páginas o vistas de la aplicación.

  -  App.js: El componente raíz de la aplicación.

  -  index.js: El punto de entrada principal de la aplicación.

  - package.json: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

  - npm run dev: Inicia el servidor de desarrollo local.

  - npm run build: Crea una versión optimizada y lista para producción de la aplicación.

  - npm run serve: Sirve la versión de producción de la aplicación en un servidor local.