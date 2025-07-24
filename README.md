# Travel Destinations App
#### A modern, responsive React application for managing and organizing your travel destinations, January 2025
#### By **GROUP 10 MEMBERS**

## Description
This Travel Destinations App is a comprehensive web application built with React that allows users to manage their travel bucket list and track their adventures. The application provides a clean, intuitive interface where users can view, edit, and delete travel destinations with detailed information including images, descriptions, planned dates, and budgeted amounts.

The app features a modern card-based layout that displays destinations in a responsive grid, making it easy to browse through saved locations. Users can edit destination details inline without navigating to separate pages, providing a seamless user experience. The application also includes a dark/light theme toggle that respects system preferences and persists user choices.

Key functionality includes smooth navigation between sections (Home, About, Contact), real-time data management through a JSON server API, and responsive design that works across all device sizes. The interface is designed with accessibility in mind and provides visual feedback for all user interactions.

## Setup/Installation Requirements
* Clone this repository to your local machine
* Navigate to the project directory in your terminal
* Run `npm install` to install all dependencies
* Ensure you have Node.js version 16 or higher installed

### Running the Application
**Option 1: Using hosted JSON server (recommended)**
* Run `npm run dev` to start the development server
* Open your browser and navigate to `http://localhost:5173`
* The application connects to a JSON server hosted at `https://json-server-books-2.onrender.com`

**Option 2: Using local JSON server**
* Open two terminal windows in the project directory
* In the first terminal: Run `npm run server` to start the local JSON server on port 3001
* In the second terminal: Run `npm run dev` to start the development server
* Update the API URLs in the code to use `http://localhost:3001` instead of the hosted server
* Open your browser and navigate to `http://localhost:5173`

## Live Site
🌐 **View the live application:** [https://traveljournala.netlify.app/](https://traveljournala.netlify.app/)

## Known Bugs
Currently, there are no known critical bugs in the application. However, some areas for improvement include:
* Image URLs must be provided manually rather than through file upload
* The application depends on an external JSON server, so functionality may be limited if the server is unavailable
* Theme toggle animation could be smoother on some browsers
* On very slow internet connections, destination loading may take longer than expected
* After adding a new destination, the page refreshes to show the updated list

## Technologies Used
* React 19.1.0 - Frontend framework for building the user interface
* Vite 7.0.4 - Build tool and development server for fast development
* React Router DOM 7.7.0 - Client-side routing for navigation between sections
* CSS-in-JS - Inline styling approach for component-specific styles
* React Context API - State management for theme functionality
* JSON Server - RESTful API for data persistence (hosted on Render)
* Local Storage - Browser storage for theme preference persistence
* ESLint - Code linting and formatting
* Modern JavaScript (ES6+) features including hooks, async/await, and destructuring

## Support and contact details
If you encounter any issues with the application or have suggestions for improvements, please feel free to reach out. You can contact me through GitHub or email for support, bug reports, or collaboration opportunities. Contributions to the codebase are welcome - please fork the repository and submit a pull request with your improvements.

### License
*This application is licensed under the MIT License, allowing for free use, modification, and distribution.*

Copyright (c) 2025 **JOSHUA KARANJA**
