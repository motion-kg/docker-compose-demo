const express = require('express');
const app = express();
const PORT = 80;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the Backend API!' });
});

app.listen(PORT, () => {
    console.log(`Backend API is running on port ${PORT}`);
});