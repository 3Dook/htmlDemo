const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;


app.get('/floatdiv', (_req, res) => {
    res.sendFile(path.join(__dirname, 'floatdiv.html'));
});

app.get('/test', (_req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Define the route to serve the HTML file
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// 404
app.get('*', (req, res) =>{
  res.status(404).send("<div> 404 NOT FOUND</div>");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
