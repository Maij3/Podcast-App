# Vite Project

Welcome to the Vite project! This repository contains the source code of a web application developed using Vite, a fast development environment for web applications in JavaScript.

## Description

The goal of this project is to provide a solid and modern foundation for building web applications using Vite. Vite is a rapid development framework that allows you to create web applications with excellent performance. In this project, we have set up Vite with the necessary tools and dependencies to start developing your application efficiently.

## Features

- Default Vite configuration for quick start.
- Support for modern JavaScript (ES6+).
- Integration with React (or any other library of your choice).
- Hot-reloading support for a smooth development experience.
- Optimized bundling for production with minified and optimized code generation.
- Routing management support using React Router (or an alternative of your preference).

## Prerequisites

Before getting started with this project, make sure you have Node.js installed on your machine. You can download and install it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

## Configuration

Follow these steps to set up the project on your local development environment:

1. Clone this repository to your local machine or download the source code.

  ```shell
    git clone https://github.com/Maij3/Postcast-App.git
  ```
2.- Navigate to the project directory:

  ```shell
    cd podcast-app
  ```
3.- Install the project dependencies using npm (or yarn):

  ```shell
    npm install
  ```
4.- Start the local development server::

  ```shell
    npm run dev
  ```

## Project Structure

 - public: This directory contains static files that will be copied as-is to the final output folder.

- src: src: This is where the application source code is located.

    - components: Componentes reutilizables de la aplicación.

    - pages: Application pages or views.

    -  PodcastApp.js: The root component of the application.

   -  index.js: The main entry point of the application.

- package.json: The npm configuration file that includes project dependencies and scripts.

## Available Scripts

In the project directory, you can run the following scripts:

  - npm run dev: Starts the local development server.

  - npm run build: Creates an optimized, production-ready build of the application.

  - npm run serve: Serves the production version of the application on a local server.