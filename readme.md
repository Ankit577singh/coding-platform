Codix is a full-stack web-based online coding platform, inspired by LeetCode and HackerRank, designed to help users practice coding problems, submit code in real time, and receive instant feedback. This platform supports problem-solving in multiple programming languages and provides real-time code evaluation through a powerful backend architecture.

🛠️ Tech Stack:
Frontend: React.js, Tailwind CSS, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB

Other Tools: Git, GitHub

🔑 Key Features:

1. User Authentication
Secure sign-up and login

Password hashing with bcrypt

JWT-based session management

2. Problem Dashboard
View categorized problems (Easy, Medium, Hard)

Problem description, input/output format, constraints

Tags and difficulty filters

3. Code Editor
Monaco Editor (VS Code-like experience)

Supports multiple languages (JavaScript, Python, C++, Java)

Syntax highlighting, auto-indent, theme switching

4. Code Execution & Submission
Real-time code compilation and output using Judge0 API or a custom code sandbox

Compare user output with expected output

Pass/fail status based on test cases

5. Leaderboard & User Profile
Track progress and solved problems

Show number of submissions, accuracy, and rank

6. Admin Panel (Optional)
Add/update/delete problems

Manage user accounts and submissions

📊 Database Models (MongoDB):
User: Stores email, username, hashed password, solvedProblems[]

Problem: Title, description, constraints, sample inputs/outputs, test cases

Submission: userID, problemID, language, code, result, runtime

🧠 Challenges Solved:
Built a Docker-isolated code execution engine for safe code evaluation

Designed a scalable backend to handle multiple simultaneous code submissions

Implemented clean, responsive UI with efficient routing using React Router

🚀 Future Improvements:

Add real-time collaborative coding (like CodePair)
Discussion forums and solution tabs
Time-based contests with leaderboards