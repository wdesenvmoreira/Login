const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const { sessionconfig, allowCrossDomain } = require('./config')
const path = require('path')
const router = require('./routes')
const flash = require('connect-flash')
const passport = require('passport')
require('./config/auth')(passport)
const cookieParser = require('cookie-parser')



const app = express()
app.use(cookieParser())

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(session(sessionconfig));

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_ msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
})
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(allowCrossDomain);
app.use(cors({ credentials: true }));

router(app)

module.exports = app