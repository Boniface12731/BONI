const express = require('express');
const app = express();
const port = 3000;

// Sample employee data
const employees = [
  { id: 1, name: 'John Doe', position: 'Developer', salary: 60000.0 },
  { id: 2, name: 'Jane Smith', position: 'Manager', salary: 80000.0 },
  // Add more employees as needed
];

// API endpoint to get employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
