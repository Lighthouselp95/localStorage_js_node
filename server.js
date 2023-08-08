const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listening to port: 3000
app.listen(3000, () => {
    console.log('Listening on port: 3000');
});
// use morgan to log request
app.use(morgan('dev'));

app.use('/public',express.static('publics'));
app.get('/', (req,res) => {

    res.sendFile('./publics/index.html', {root: __dirname});
});

app.get('/about', (req,res) => {
    res.sendFile('./publics/about.html', {root: __dirname});
});
// redirect
app.get('/about-us', (req,res) => {
    res.redirect('https://www.google.com');
    res.redirect('/about');
});
app.get('/about-us2', (req,res) => {
    res.writeHead(302,{'Location' : '/about'});
});
// handle params
app.get('/example/:name/:age', (req,res) => {
    console.log(req.params);
    console.log(req.query, JSON.stringify(req.query));
    res.send(req.params.name +" "+ req.params.age);
})
// 404 error
app.use((req,res) => {
    res.status(404).sendFile('./publics/404.html', {root: __dirname});
});
