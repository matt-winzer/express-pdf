const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('server working');
})

app.listen(PORT, () =>  console.log(`listening on port ${PORT}`));