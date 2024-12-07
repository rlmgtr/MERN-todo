const express = require('express');

const app = express();

app.get('/todos', (req, res) => {
res.send('This is to do endpoint!')
});

app.listen(8000);