# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

Website based on the technical skills

## Table of Contents

- [Installation](#installation)
- [Explanation](#explanation)
- [Extra Information](#Information)
- [Contact](#contact)

## Installation

To install and run this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/vilopco/assignment.git
```

2. Change to the project directory:

```bash
cd assignment
```

3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm run dev
```

The application will now be running on `http://localhost:9000`.

## Explanation

All points were made (updated) all in the main branch.

1. Use bootstrap5 html framework to code the webpage.

   - Was included as a CSS `<Link>` doesn't require to change variables or original behaviour with mixins.

2. Image should only load when in viewport.

   - The project was built using two approaches for handling images: the first, in which the images are placed as background images with an observer, and the second, in which the images are part of the HTML code.

     - Why the second approach? Separate image files (using `<img>` tags) are superior for accessibility, SEO, performance, and maintainability. They allow for alt text, benefit from lazy loading, simplify version control, and potentially improve perceived load times.

     - Bonus: When there is an `<img>` with the style `object-fit: cover` the best way to avoid a wrong behavior is to include the property `draggable="false"`, so I included and also added the lazy loading property.

3. Webpage must be responsive and must use grid structure ( 4-5 images on desktop and 2 images on tablet, 1 image on mobile)

   - Included a solution with bootstrap, adding the col-XXXX-size.

4. Use Vanilla JS/jQuery wherever is required, no external plugins allowed.

   - Bonus: Isn't required but I left an example code in the src/js/script.js. It makes a class toggle to the parent element, is linked with a border style. Just need to remove the comments.

5. Image box must always be square and image should always fill the box.

   - SCSS has the solution. The label element has an style with aspect-ratio: 1/1.

6. Image should not lose its aspect ratio

   - Also included

7. Those boxes must be checkbox and image should be background image of those checkboxes.

   - Improved the SCSS code to include all images urls and classes with a for.

8. As the default property of checkbox, i should be able to select those image and selection should be highlighted with outline/border, selection part must be done using only css without any js

   - Was made with SCSS also with a bonus Javascript code.

## Extra Information

1. This project doesn't require Bootstrap, but minor changes can achieve the same results without affecting the layout.

2. Grunt Setup: As this was my first time with a Grunt-based environment, I focused on incorporating essential tools:

- Watching for changes in files
- Running a live reload server
- Compiling Sass with Grunt
- Minifying or uglifying JavaScript
- ES6 JavaScript Example (Optional): To showcase my JavaScript skills, I added a snippet (using ES6) that changes the border of an element based on the checkbox state. The code also handles an initial checked state if it is present in the HTML.

## Contact

- Email: christianleyva@msn.com
- GitHub: [Your GitHub Username](https://github.com/vilopco)
