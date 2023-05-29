# Expenses Tracker
[Expenses Tracker](https://otavie.github.io/react-exp-cal/) is a simple expenses tracker app built with React. The app includes keys features such as add, edit, delete expenses, view total, etc. Manage your expenses and stay on top of your finances.

## Tools/Techniques Used:
- **SCSS and CSS:** Used for styling.
- **JavaScript:** Provides the base for using React
- **React:** JS library used for creating re-usable UI components. React Hooks such as useState and useEffect are used for state management and data fetching.
- **HTML:**  Used for structuring the UI elements.
- **Local Storage:** LocalStorage API is used to persist the expense data between page reloads. That is, the expense data is saved to the browser's Local Storage to retain it between page reloads.

## Features:
- **Add Expenses** - Add new expenses with name and amount. For example, "Shirts - ₦ 8,00", "Shoes - ₦ 20,000", etc.
- **Edit Expenses** - Edit any existing expense to update the name or amount.
- **Delete Expenses** - Remove expenses you no longer need to track.
- **See Total Expenses** - See the total amount of all your expenses right on the homepage.
- **Clear All Expenses** - Clear all expenses with a single button click.
- **Persistence with LocalStorage** - Data is persisted between page refreshes using localStorage.
- **Responsive Design** - The app is responsive and adapts to different screen sizes.
- **Simple, Clean UI** - The UI is designed to be minimal and easy to use, focusing on the core functionality.

## Components:
The app is built with the following components:

- **App.js** - Contains the main App component and state. Handles adding, editing, deleting and clearing expenses.
- **Alert.js** - Renders an alert message when an expense is added/edited/deleted.
- **Form.js** - Contains the form for adding or editing an expense.
- **Item.js** - Renders an individual expense item with edit and delete buttons.
- **List.js** - Renders all expense items and the "Clear Expenses" button.

## Getting Started
1. Clone the repository: git clone https://github.com/Otavie/react-exp-cal.git
2. Install dependencies: npm install
3. Start the development server: npm start
4. The app will be available at http://localhost:3000
5. Try adding, editing and deleting expenses to see functionality in action!

## Acknowledgement
The React Application was initially developed by [Coding Addict](https://www.youtube.com/watch?v=f6HYLHrYpGs&list=PLgMICEduGwEzy6jqbR_yciKiGDsto74Dq) as React Hooks Project - Budget Calculator. I have made enhancements to the application by modifying the user interface and adapting the code to incorporate specific changes that I desired. These changes include the implementation of an Alert Warning feature, which allows users to receive warnings when attempting to either clear all items or delete a specific item.

## Duration:
- **Started:** Sunday, May 28, 2023
- **Finished:** Monday, May 29, 2023