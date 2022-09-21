const express = require('express');
const path = require('path');

const app = express();

const root = path.join(__dirname, '/public');

const dir = express.static(root);

app.use(dir);

app.listen(3000, () => console.log('listening on 3000'));
