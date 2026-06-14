# Course Registration App

A clean and simple course registration web application built with **Next.js**, React, and TypeScript. This project demonstrates reusable component design, page-based routing, and basic state handling for a student-focused academic interface. [1][2][3][4][5]

## Overview

The application is designed to help users browse available courses, explore registered courses, and interact with a basic course input form. It uses a modular component structure with shared layout elements such as a navigation bar, header, footer, and main content wrapper. [1][6][7][8][9][4][5]

## Features

- Browse available courses with course title, code, and credit value. [4][2]
- Display course information through reusable `CourseCard` components. [2]
- Add a new course using a simple form with `useState` for input handling and confirmation feedback. [1]
- Include a registration button component for course actions. [10]
- Organize the interface with shared UI components for layout and navigation. [6][7][8][9]
- Provide a separate page for viewing selected or registered courses. [5]

## Tech Stack

- Next.js using the Pages Router. [3][4][11][5]
- React for component-based UI development. [1][2][10]
- TypeScript for props and page structure. [2][3]
- Basic inline styling for layout and presentation. [1][2][10]

## Project Structure

```bash
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
```

## Pages

### Home Page
The home page acts as the entry point of the application and introduces users to the course registration interface. [11]

### Courses Page
The courses page displays available courses using reusable cards and presents key details such as course code and credit count. [4][2]

### My Courses Page
The my courses page is intended to show registered or selected courses in a separate view. [5]

## Components

### AddCourse
Handles user input through a form and displays a confirmation message after submission. [1]

### CourseCard
Displays an individual course with its name, code, credits, and registration button. [2][10]

### CreditTracker
Supports the display of academic credit-related information within the app. [12]

### Layout Components
`Navbar`, `Header`, `Footer`, and `Main` provide the shared structure used across pages. [6][7][8][9]

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

After starting the development server, open `http://localhost:3000` in your browser.

## Learning Goals

This project is a good example of foundational front-end development using Next.js and React. It shows understanding of reusable components, props, simple form handling, page navigation, and clean project organization in a college-level web development assignment. [1][2][3][4]

## Future Improvements

- Connect course data to a database or API.
- Add persistent registration functionality.
- Improve styling with CSS modules or Tailwind CSS.
- Add form validation and better user feedback.
- Track registered credits dynamically across pages. [1][12][4][5]
