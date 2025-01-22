const express = require('express');
const path = require('path');       
const app = express();              

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));


app.get('/nodetest', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/galerij', (req, res) => {
    res.sendFile(path.join(__dirname, 'galerij.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start de server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
