Course Registration App
A simple Next.js course registration project built with TypeScript and reusable React components. The app includes pages for viewing available courses, checking registered courses, and adding a course through a basic form interface. 

Features
View a list of available courses with course name, code, and credit value. 

Reusable CourseCard component with a registration button for each course. 

Add a course using a small interactive form component. 

Track or display credit-related information with a dedicated credit tracker component. 

Shared layout and UI pieces such as Navbar, Header, Footer, and Main container components. 

Tech Stack
Next.js with the Pages Router structure through files such as app.tsx, index.tsx, courses.tsx, and my-courses.tsx. 

TypeScript for component props and page structure. 

React hooks like useState for handling form input and UI feedback. 

Project Structure
bash
components/
├── AddCourse.tsx
├── CourseCard.tsx
├── CreditTracker.tsx
├── Footer.tsx
├── Header.tsx
├── Main.tsx
├── Navbar.tsx
└── RegisterButton.tsx

pages/
├── _app.tsx
├── _document.tsx
├── courses.tsx
├── index.tsx
└── my-courses.tsx
Getting Started
Clone the repository.

Open the project folder in VS Code.

Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open http://localhost:3000 in the browser.

Pages
Home
The homepage serves as the starting point of the app and links into the course registration experience. 

Courses
This page displays available courses using reusable course cards that show the course title, code, and credits. 

My Courses
This page is intended to show the user's selected or registered courses. 

Components
AddCourse.tsx handles course input and displays a confirmation message after submission. 

CourseCard.tsx presents individual course details in a card layout. 

CreditTracker.tsx is used for showing academic credit information. 

RegisterButton.tsx provides a call-to-action for course registration. 

Navbar.tsx, Header.tsx, Footer.tsx, and Main.tsx support the overall page layout. 

Purpose
This project demonstrates core front-end development skills with reusable components, page-based routing, props, and simple state management in a student-focused academic app. It is a solid college project for showing understanding of Next.js structure and React component design. 
