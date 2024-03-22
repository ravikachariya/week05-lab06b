
/*
Run the following command to initialize npm and create a package.json file for managing dependencies:
npm init -y
Install Express: Install Express.js as a project dependency using npm:
npm install express
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
To run the Express application, execute the following command in your project directory:
node app.js
open your web browser and navigate to http://localhost:3000 to see the "Hello World!" message displayed in the browser
*/