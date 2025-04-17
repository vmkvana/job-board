Job Board Application
Overview
This is a full-stack job board application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to:

View a list of job postings.
Add new job postings via a form.
View detailed information about each job.

The project is structured into two main folders:

client/: React frontend with Tailwind CSS for styling.
server/: Node.js/Express backend with MongoDB Atlas for data storage.

Tech Stack

Frontend: React, React Router, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Tools: Git, GitHub, VS Code

Setup Instructions
Prerequisites

Node.js (v16 or higher)
MongoDB Atlas account
Git

Installation

Clone the Repository:
git clone https://github.com/vmkvana/job-board.git
cd job-board


Backend Setup:

Navigate to the server folder:cd server
npm install


Create a .env file in server/ with your MongoDB Atlas connection string:MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jobBoard?retryWrites=true&w=majority


Start the backend:npm start


The server runs on http://localhost:5000.


Frontend Setup:

Open a new terminal and navigate to the client folder:cd client
npm install
npm start


The frontend runs on http://localhost:3000.



Usage

Homepage: View all jobs at http://localhost:3000/.
Add Job: Click "Add New Job" to submit a job posting.
Job Details: Click a job card to view details.

Project Structure
job-board/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # React components (Home.js, AddJob.js, JobDetails.js)
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
├── server/              # Node.js/Express backend
│   ├── index.js         # API routes and MongoDB connection
│   ├── package.json
├── .gitignore           # Ignores node_modules, .env
├── README.md            # Project documentation

Future Improvements

Add user authentication.
Implement job filtering and search.
Enhance UI with advanced styling.

Contact
For questions, contact Vivek Makvana at vmkvana558@gmail.com.

Built for Knovator Technologies Interview Submission.
