module.exports = {
    logado: function(req, res, next){
        console.log('req.user', req.user)
        if(req.isAuthenticated()){
            next()
        }else{
            req.flash('error_msg', "Você deve esta logado para acesso.")
            res.redirect('/login')
        }
    }
}