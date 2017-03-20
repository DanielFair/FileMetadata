const express = require('express');
const multer = require('multer');
const limits = {'fileSize': 500000};
const ejs = require('ejs');
const upload = multer({dest: './uploads/'});
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
})
app.post('/file', upload.single('file'), (req, res, next) => {

    let sizeObj = {'size': req.file.size};
    res.render('size', {
        sizeObj: JSON.stringify(sizeObj)
    });
});

app.listen(port, () => {
    console.log('Listening on port '+port+'!');
})