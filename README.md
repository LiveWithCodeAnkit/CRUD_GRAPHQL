# MERN Project - Client and Project Details Management

This is a complete MERN (MongoDB, Express, React, Node.js) project that focuses on managing client details and associated project information. The backend is developed using Node.js, Express, MongoDB, and GraphQL, while the frontend is built with Next.js (v13), JavaScript, Apollo Server GraphQL, and utilizes both Tailwind CSS and Bootstrap for styling.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Client Details Management**: Store and manage client information including names, contact details, and addresses.
- **Project Details Integration**: Associate project information with respective clients, including project names, descriptions, and deadlines.
- **GraphQL API**: Utilize GraphQL for querying and mutating data efficiently.
- **Responsive UI**: Design a user-friendly interface using both Tailwind CSS and Bootstrap components.
- **Seamless Navigation**: Navigate between client and project details seamlessly.
- **Data Validation**: Implement input validation to ensure accurate data entry.
- **Error Handling**: Handle errors gracefully with appropriate error messages.
- **Search Functionality**: Search and filter clients and projects based on various criteria.

## Prerequisites
- Node.js (v14+)
- MongoDB installed and running
- npm or yarn package manager

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/mern-client-project.git`
2. Navigate to the project directory: `cd mern-client-project`

## Backend
1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on the `.env.example` provided and set up your MongoDB connection details.
4. Start the backend server: `npm start`

## Frontend
1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm run dev`

## Usage
1. Access the application in your web browser at `http://localhost:3000`.
2. Use the navigation to view and manage client details.
3. Connect clients with project details and manage project-related information.
4. Explore the GraphQL API at `http://localhost:8000/graphql` for querying and mutating data.

## Contributing
Contributions are welcome! Fork the repository, create a branch, and submit a pull request explaining your changes.

## License
This project is licensed under the [MIT License](LICENSE).
