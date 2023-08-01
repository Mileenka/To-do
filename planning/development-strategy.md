# To do list - Development Strategy

This development strategy outlines the implementation of user stories for the
"To do list" application. Each user story represents a specific feature or
improvement that will be added to the application. The development will be
organized into branches, allowing for focused and collaborative work. Once each
user story is completed and thoroughly tested, the respective branches will be
merged into the `main` branch to make the changes available in the live
application.

## User Story 1: As a user, I want to see a clear and visually appealing header section with the main title and a distinct background.

Branch: `index-html` Status: In progress

### Implementation Plan:

- Add a `<header>` tag at the beginning of the `<body>` to represent the header
  section of the page.
- Add a `<span>` tag with the class "bg" after the `<header>` for a distinct
  background.
- Add a `<div>` tag with a nested `<header>` tag containing an `<h1>` element to
  demonstrate the structure of a div container with its own header.
- Keep the original `<h1>` element as the main title for the page.

## User Story 2: As a user, I want to see the title and background of the page.

Branch: `index-html` Status: In progress

### Implementation Plan:

- Add the `<header>` tag to the HTML code.
- Add a `<div>` tag to the HTML code to create a container for the title.
- Add an `<h1>` tag within the `<header>` tag to represent the page title.
- Add a `<span>` tag within the `<header>` tag to create a background element.
- Add the `title` class to the `<header>` tag to style the title container.
- Set the `position` property to `absolute` and add `margin-top` to adjust the
  position of the title.
- Apply font styles to the title.
- Add the `background` class to the `<div>` tag to style the background element.
- Set the `display`, `background`, `width`, and `height` properties for the
  background element.

## User Story 3: As a user, I want to see info sections.

Branch: `index-html` Status: In progress

### Implementation Plan:

- Add the `<main>` tag to the HTML code to represent the main content section of
  the page.
- Add a `<section>` tag to create an information section within the main
  content.
- Add an `<h2>` tag within the `<section>` tag to represent a subsection title.
- Add a `<p>` tag within the `<section>` tag to provide textual information.
- Set the `display` property to `flex` for the main content section.
- Add the `volunteer` class to the `<section>` tag to style the information
  section.
- Apply styling properties such as `border-top`, `color`, and `font-size` to the
  volunteer section.
- Add the `about` class to the section for additional styling.
- Set the `position` property to `absolute` and add `padding-right` to the about
  section.

## User Story 4: As a user, I want to be able to add tasks to the to-do list.

Branch: `js` Status: In progress

### Implementation Plan:

- Create an event listener on the form element with id `new-task-form` to handle
  form submissions.
- When the form is submitted, retrieve the input value.
- Dynamically create a new task element and add it to the list with the provided
  task content.
- Add "Edit" and "Delete" buttons to each task.
- When the "Edit" button is clicked, make the task editable.
- When the "Save" button is clicked, save the changes and make the task
  non-editable again.
- When the "Delete" button is clicked, remove the task from the list.
