# Podcast Project

Welcome to the Podcast project! This repository contains the source code of a web application developed using Vite, a rapid development environment for JavaScript web applications. Also the libraries React-router-dom, Material ui , Redux with RTKQuery and Jest were used.

## Description

A project is proposed that connects to the iTunes API to retrieve the top 100 podcasts. To accomplish this, the project will use the iTunes API to perform a search in the podcast category and then select the top 100 results based on the number of plays.

In addition to displaying the top 100 most popular podcasts, the project will offer users the opportunity to listen to an excerpt of the podcast, read a brief description of the topic covered and meet the presenter. In addition, users will have the option to subscribe to the podcast via a link that will take them directly to iTunes.

Finally, the project will be designed with a responsive approach, meaning that it will be optimized for use on a variety of devices and screens. This functionality will allow users to access the top 100 podcasts from anywhere and at any time. In short, this project will be a useful tool for podcast lovers who want to explore the best podcasts from around the world.

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

  - npm run test: To be able to run the tests you have to modify the package.json and add the following

  - npm run build: Creates an optimized, production-ready build of the application.

  - npx vite build --config vite.config.prod.ts: To run Vite in production mode, use the following command

  - npx vite build --config vite.config.ts: To run Vite in develoment mode, use the following command 

  ```javascript
    script:{
      "test": "jest --watchAll"
    }
  ```
