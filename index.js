var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/images'))

app.get('/computer', function (req, res) {
    res.render('computer', {
        computer: [
            {name : 'Windows', pic: './1.jpg'},
            {name : 'OSX', pic: './2.jpg'},
            {name : 'Andriod', pic: './3.jpg'},
            {name : 'IOS', pic:  './4.jpg'},
        ]
    })
})
app.listen(8000)