const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {

      res.send('Hello from our server!')
})

app.get('/datetime', (req, res) => {
      
      res.send(new Date())
})

app.listen(8080, () => {
      
      console.log('server listening on port 8080')
})