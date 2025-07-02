const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ishaan Sarkar application is running ');
});

app.listen(8080, () => {
    console.log('App is listening on port 8080');
});