const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;



app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Define the route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hello.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
