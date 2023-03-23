# Interview Scheduler

## Introduction

If keeping track of interviews at your company has become challenging, then Interview Scheduler is here to help. It's a modern React-based application that makes it easy for you to book, edit, and cancel appointments.

<img width="1713" alt="Screen Shot 2023-03-22 at 19 45 04" src="https://user-images.githubusercontent.com/36883798/227063502-7b2c5a8c-0f64-45ba-8da7-fb968c0db1ac.png">

<img width="1713" alt="Screen Shot 2023-03-22 at 19 45 13" src="https://user-images.githubusercontent.com/36883798/227063631-4f705559-3a15-408a-b00b-8844956f9385.png">

## How To Use Interview Scheduler
### Book an Interview
To book an interview, click on any available spot on the calendar. Then, enter the interviewee's name and select an interviewer. If there are no available spots, you can choose a different day on the left sidebar.

![ADD GIF NEW](https://user-images.githubusercontent.com/36883798/227073473-f59558ab-9854-4df1-88e5-22fa012e1287.gif)

### Edit an Interview
To edit an interview, hover over the appointment, click the edit button, make the necessary changes, and save.

![EDIT GIF](https://user-images.githubusercontent.com/36883798/227073561-28a82f62-f840-48f3-8b6d-69e71bc4066f.gif)

### Delete an Interview
To delete an appointment, hover over it and click the delete button.

![DELETE GIF NEW](https://user-images.githubusercontent.com/36883798/227073287-35551b29-88df-4224-a265-cca3c1edc320.gif)

## Stack
Interview Scheduler is a single-page application that uses modern React practices such as hooks and functional components. The front-end is built with HTML, SCSS, and React, while the back-end uses Node, Express, and PostgreSQL.

### Dependencies
To use Interview Scheduler, you'll need to have the following dependencies installed. Install dependencies with `npm install`.

- react 16.9.0 or above
- react-dom 16.9.0 or above
- react-scripts 3.4.4 or above
- axios 1.3.4 or above
- classnames
- express
- node.js
- postgreSQL

### Testing
Interview Scheduler was thoroughly tested using the following technologies. Install dependencies with `npm install`.

- Storybook for unit testing
- Jest for unit and integration testing
- Cypress for end-to-end testing

For development, you will need the following devDependencies:

- babel/core 7.4.3 or above
- babel-loader 8.1.0 or above
- sass 1.53.0 or above
- storybook 5.0.10 or above
- testing-library/jest-dom 4.0.0 or above
- testing-library/react 8.0.7 or above
- testing-library/react-hooks 8.0.1 or above
- prop-types 15.8.1 or above
- react-test-renderer 16.14.0 or above

## Running Jest Test Framework
```sh
npm test
```
## Running Storybook Visual Testbed
```sh
npm run storybook
```
## Local Setup
To set up Interview Scheduler locally, follow these steps:

1) Install all dependencies using the npm install command.
2) Download and install scheduler-api by following the instructions on its repo.
3) Start the API server while in the "scheduler-api" directory using ` npm start `
4) Start the Webpack development server while in the "scheduler" directory using ` npm start ` 
5) The app will be served at http://localhost:8000/.