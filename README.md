# Expenses Tracker
[Expenses Tracker](https://otavie.github.io/react-exp-cal/) simple expenses tracker app built with React. Manage your expenses and stay on top of your finances.

## Features
- **Add Expenses** - Add new expenses with name and amount. For example, "Rent - $600", "Groceries - $200", etc.
- **Edit Expenses** - Edit any existing expense to update the name or amount.
- **Delete Expenses** - Remove expenses you no longer need to track.
- **See Total Expenses** - See the total amount of all your expenses right on the homepage.
- **Clear All Expenses** - Clear all expenses with a single button click.
- **Persistence with LocalStorage** - Data is persisted between page refreshes using localStorage.
- **Responsive Design** - The app is responsive and adapts to different screen sizes.
- **Simple, Clean UI** - The UI is designed to be minimal and easy to use, focusing on the core functionality.

## Components
The app is built with the following components:

- **App.js** - Contains the main App component and state. Handles adding, editing, deleting and clearing expenses.
- **Alert.js** - Renders an alert message when an expense is added/edited/deleted.
- **Form.js** - Contains the form for adding or editing an expense.
- **Item.js** - Renders an individual expense item with edit and delete buttons.
- **List.js** - Renders all expense items and the "Clear Expenses" button.

## Getting Started
1. Clone the repository: git clone https://github.com/your/repo.git
2. Install dependencies: npm install
3. Start the development server: npm start
4. The app will be available at http://localhost:3000
5. Try adding, editing and deleting expenses to see functionality in action!

## Acknowledgement
The React Application was initially developed by [Coding Addict](https://www.youtube.com/watch?v=f6HYLHrYpGs&list=PLgMICEduGwEzy6jqbR_yciKiGDsto74Dq) as React Hooks Project - Budget Calculator. I have made enhancements to the application by modifying the user interface and adapting the code to incorporate specific changes that I desired. These changes include the implementation of an Alert Warning feature, which allows users to receive warnings when attempting to either clear all items or delete a specific item.