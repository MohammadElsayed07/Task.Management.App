const express = require('express');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});