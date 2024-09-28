const express = require('express');
const PORT = 3000;
const { join } = require('path');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const route  = require('./routes/shorten');
const { urls } = require('./utils/shortener');

const app = express();
const server = createServer(app);

app.use(express.static(join(__dirname,'..','public')));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'../public/index.html'));
})

app.get('/privacypolicy',(req,res)=>{
    res.sendFile(join(__dirname,'../public/pp.html'));
})

app.get('/termsofservice',(req,res)=>{
    res.sendFile(join(__dirname,'../public/tos.html'));
})

app.use('/',route);

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const originalUrl = urls[id] ;
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}/`);
})