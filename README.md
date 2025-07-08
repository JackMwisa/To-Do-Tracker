# To-Do Tracker

A simple web-based To-Do Tracker that fetches tasks from a remote API and displays them in "To Do" and "Completed" tables.

## Features

- Fetches tasks from a public API
- Displays tasks in separate tables for "To Do" and "Completed"
- Shows a loading message while fetching
- Displays a message when all tasks are completed
- Shows the count of completed tasks

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.)
- Internet connection

### Usage

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. The app will automatically fetch and display tasks.

## Project Structure

```
.
├── index.html
├── index.js
├── style.css
└── README.md
```

## API

This app uses [MockAPI](https://mockapi.io/) for demonstration purposes:
```
https://6762b9fe46efb3732375b6fb.mockapi.io/todo/todo
```

## Customization

- To use your own API, change the `API_URL` in `index.js`.
- Update the HTML/CSS as needed for your own style.

## License

MIT License

