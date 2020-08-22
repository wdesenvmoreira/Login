const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const { sessionconfig, allowCrossDomain } = require('./config')
const path = require('path')
const router = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
//app.use(session({sessionconfig}))
app.use(session({
    secret: 'cookie_secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(allowCrossDomain);
app.use(cors({ credentials: true }));

router(app)

module.exports = app