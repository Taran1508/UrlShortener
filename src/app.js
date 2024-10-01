const express = require('express');
const PORT = 3000;
const { join } = require('path');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const route  = require('./routes/shorten');
const { urls } = require('./utils/shortener');
const helmet = require('helmet');

const app = express();
const server = createServer(app);

app.use(express.static(join(__dirname,'..','public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views',join(__dirname,'..', 'views'));

// Helmet Configuration
app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:'],
          connectSrc: ["'self'"],
          reportUri: '/csp-violation-report-endpoint',
        },
      },
    })
  );



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