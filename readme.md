# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

Website based on the technical skills

## Table of Contents

- [Installation](#installation)
- [Information](#Information)
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

## Information

The project was built using two approaches for handling images: the first, in which the images are placed as background images, and the second, in which the images are part of the HTML code.

1. Why the second approach? Separate image files (using `<img>` tags) are superior for accessibility, SEO, performance, and maintainability. They allow for alt text, benefit from lazy loading, simplify version control, and potentially improve perceived load times.

2. This project doesn't require Bootstrap, but minor changes (like those shown in the `bootstrap` branch) can achieve the same results without affecting the layout.

3. Grunt Setup: As this was my first time with a Grunt-based environment, I focused on incorporating essential tools:

- Watching for changes in files
- Running a live reload server
- Compiling Sass with Grunt
- Minifying or uglifying JavaScript
- ES6 JavaScript Example (Optional): To showcase my JavaScript skills, I added a snippet (using ES6) that changes the border of an element based on the checkbox state. The code also handles an initial checked state if it is present in the HTML.

4. When there is an `<img>` with the style `object-fit: cover` the best way to avoid a wrong behavior is to include the property `draggable="false"`, so I included and also added the lazy loading property.

5. The spacing in the project is controlled using percentages. While calculations based on aspect ratios might be an alternative, achieving a similar outcome to the video was possible with simpler percentages.

## Contact

- Email: christianleyva@msn.com
- GitHub: [Your GitHub Username](https://github.com/vilopco)
