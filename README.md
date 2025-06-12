# Auth-Role-App
Role-based user authentication system built with Node.js, Express, MongoDB, and React (Vite).  
Handles secure signup, login, and JWT-based access control for Users and Admins.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Validator
- **Frontend**: React (Vite), JavaScript
- **Tools**: Postman, MongoDB Compass


## Contributors
- [@Jonathane36](https://github.com/Jonathane36) – Full Stack Developer  
- [@RandyMitchellQA](https://github.com/RandyMitchellQA) – QA Engineer / Tester  

> Built collaboratively to simulate a professional development-testing workflow.

## Features
- User signup/login with password strength validation
- JWT token generation for authenticated sessions
- Role-based access (user vs. admin support in future)
- Field-level validation with error messaging
- MongoDB integration with Mongoose
- Manual & API testing using Postman

  ## Testing Instructions
- Run backend: `node backend/server.js`
- Run frontend: `npm run dev` from `/client`
- Use Postman to test endpoints at `http://localhost:5000/api/auth/`
