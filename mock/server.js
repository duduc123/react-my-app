let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');

app.get('/', (req, res) => {
    res.send('3000');
});
app.get('/api/ad', (req, res) => {
    res.send(ad);
});
