# Todo List Application

This is a simple and minimalistic Todo List application built with React, TypeScript, Vite, and Tailwind CSS. The application allows users to add new tasks, filter tasks by active and completed status, and store tasks in local storage.

## Features

- Add new tasks
- Mark tasks as completed
- Filter tasks by active and completed status
- Persist tasks in local storage
- Custom components with unit tests

## Tools and Technologies

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Jest**: A delightful JavaScript testing framework
- **React Testing Library**: A library for testing React components
- **@testing-library/jest-dom**: Custom jest matchers to test the state of the DOM

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine

### Installation

1. Clone the repository:

```sh
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
```

2. Install the dependencies:

```sh
    npm install
    # or
    yarn install
```

### Running the Application

To start the development server:
```sh
    npm run dev
    # or
    yarn dev
```
Open your browser and navigate to http://localhost:3000 to see the application running.

### Running Tests
To run the unit tests:
```sh
    npm test
    # or
    yarn test
```

### Project Structure
```css
    src/
    ├── components/
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   └── Button.test.tsx
    │   ├── TodoInput/
    │   │   ├── TodoInput.tsx
    │   │   ├── TodoInput.module.css
    │   │   └── TodoInput.test.tsx
    │   ├── TodoItem/
    │   │   ├── TodoItem.tsx
    │   │   ├── TodoItem.module.css
    │   │   └── TodoItem.test.tsx
    ├── hooks/
    │   ├── useLocalStorage.ts
    │   └── useLocalStorage.test.ts
    ├── styles/
    │   ├── index.css
    ├── App.tsx
    ├── index.tsx
```

### Custom Hooks
The project includes a custom hook useLocalStorage for managing state synchronized with local storage.

## useLocalStorage

```tsx
    import useLocalStorage from './hooks/useLocalStorage';

    const [value, setValue] = useLocalStorage('key', 'default value');
```

### License
This project is licensed under the MIT License.


## Contact

For any questions or suggestions, feel free to contact [ia.corral94@gmail.com].

