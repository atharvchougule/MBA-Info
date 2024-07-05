// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registration'
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Endpoint to save UTM parameters
app.post('/api/save-utm', (req, res) => {
  const utmParams = req.body;

  console.log('Received UTM parameters:', utmParams);

  saveToDatabase(utmParams)
    .then(() => res.status(200).send('UTM parameters logged and saved successfully'))
    .catch(err => {
      console.error('Error saving UTM parameters:', err);
      res.status(500).send('Error saving UTM parameters: ' + err.message);
    });
});

const saveToDatabase = (utmParams) => {
  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = utmParams;
  const query = `
    INSERT INTO utm_parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [utm_source, utm_medium, utm_campaign, utm_term, utm_content];
  
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
