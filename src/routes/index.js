const routerLogin = require('./login')
const { logado } = require('./auth')

module.exports = router = (app)=>{
    
    app.get('/home', logado, (req, res, next)=>{
        console.log('req.headers.authorization',req.headers.authorization)
        console.log('req.authenticate() depois: ',req.isAuthenticated())
        console.log('req.user: ',req.user)

        res.render('home')
    })

    app.get('/', logado, (req, res, next)=>{
        console.log('req.headers.authorization',req.headers.authorization)
        console.log('req.authenticate() depois: ',req.isAuthenticated())
        console.log('req.user: ',req.user)
        console.log('req.user: ',req.locals.user)

        res.render('home')
    })

    app.use(routerLogin)
    
}