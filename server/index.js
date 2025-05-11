const { Client } = require('pg');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const dbConfig = {
  user: 'nlgatewood',
  password: '',
  host: '192.168.1.14',
  port: 5432,
  database: 'nlgatewood',
};

//Generic GET Request
app.get('/', (req, res) => {

      res.send('Hello from our server!')
})

//datetime GET Request
app.get('/datetime', (req, res) => {

      // Create a new PostgreSQL client
      const client = new Client(dbConfig);

      client
	      .connect()
	      .then(() => {
		      console.log('Connected to PostgreSQL database');

		      // Execute SQL queries here

		      client.query('SELECT NOW()', (err, result) => {

			      if (err) {
				      console.error('Error executing query', err);
			      } else {
                              res.send(result.rows[0]['now'])
				      //console.log('Query result:', result.rows[0]['now']);
			      }

			      // Close the connection when done
			      client
				      .end()
				      .then(() => {
					      console.log('Connection to PostgreSQL closed');
				      })
				      .catch((err) => {
					      console.error('Error closing connection', err);
				      });
		      });
	      })
	      .catch((err) => {
		      console.error('Error connecting to PostgreSQL database', err);
	      });
})

app.listen(8080, () => {

      console.log('server listening on port 8080')
})