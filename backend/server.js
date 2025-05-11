// backend/server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // default XAMPP MySQL password
  database: 'test', // replace with a valid database name
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Endpoint: '/api/users'
app.get('/api/users', (req, res) => {
  res.json({ message: "Hello World" });  // Sending Hello World response
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
