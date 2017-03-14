const express = require('express');
const path = require('path');

// API imports
const epic_image = require('./api/epic_image');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'html');

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Fetch latest EPIC image of earth
app.get('/api/epic_image', function (req, res) {
  epic_image(res)
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
