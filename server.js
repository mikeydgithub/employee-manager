// Connect the inputCheck
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connections');
const express = require('express');

// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });
});

// Call the function
getDepartments();

// Talks to the database to get everyting from department * (every column)
function getDepartments () {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if (err) {
            throw err;
        }
        console.info(res)
    });
};
