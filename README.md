                                                   Frontend (React)
                                                   -----------------
                            
Overview:
----------
--> React-based frontend to interact with the backend user management service.

Provides:
----------
--> Login page for user authentication
--> Dashboard with a user table displaying all users
--> Filtering users by type (Administrator, Agent, Promoter)

Technologies:
-------------
--> React 18
--> Axios (HTTP client)
--> Bootstrap 5 (for UI styling)

Setup & Run:
------------
--> Navigate to the frontend folder.

a) Install dependencies:
--> npm install

b) Start the React development server:
--> npm start
--> The app will be available at http://localhost:3000.

Usage:
-------
--> Login with a valid username and password from the backend data.
--> On successful login, view all users and filter by user type.
--> Refresh the user list anytime using the refresh button.

Project Structure Summary:
--------------------------

--> components/Login.js — Login form
--> components/UserTable.js — Displays user list with filters
--> App.js — Handles login state and routing between Login and Dashboard

