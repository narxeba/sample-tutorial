const express = require('express'); //Expressjs
const cors = require('cors'); //Cross-origin resourse sharing middleware
const bodyParser = require('body-parser'); // Handle HTTP POST request
const morgan = require('morgan'); // Logger for Node.js

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.json({
       message: 'Hello world!'
   });
});

/*
The process object is a global that provides information about, and control over, the current Node.js process.
As a global, it is always available to Node.js applications without using require().
https://nodejs.org/api/process.html#process_process
 */
const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Listening on ${port}`);
});