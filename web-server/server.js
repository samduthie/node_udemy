const express = require('express');
const hsb = require('hbs')
const fs = require('fs');

var app = express();

app.use((req, res, next) => {
    var now = new Date().toString();
    log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append to server log')
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// })

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello express</h1>');
    res.send({
        name: 'test',
        occupation: 'devlper'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad', (req, res) => {
    res.send({
        request: 'failed',
        status: '500',
        message: 'unable to proceed with request'
    })
})

app.listen(3000);