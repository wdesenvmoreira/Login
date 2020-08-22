const routerLogin = require('./login')

module.exports = router = (app)=>{
    
    app.use(routerLogin)
    
}