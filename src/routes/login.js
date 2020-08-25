const express = require('express')
const passport = require('passport')

const route = express.Router();

route
    .post('/login', (req, res, next)=>{
                console.log('req.authenticate() antes: ',req.isAuthenticated())
                passport.authenticate('local', {
                   successRedirect:'/home',
                    failureRedirect: '/login',
                    failureFlas: true
            }
            
        )(req, res, next)
        
    })
    
    .post('/login1', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            console.log('info: ', info)
            console.log('user: ', user)
            console.log('error: ', err)
          if (err) { return next(err); }
          if (!user) { 
            console.log('nãu user', user)  
            return res.redirect('/login'); 
        }
          req.logIn(user, function(err) {
            if (err) { return next(err);
            
            }
            return res.redirect('/home');
          });
        })(req, res, next);
      })

    .get('/login',(req, res, next)=>{
        console.log('req.authenticate() depois: ',req.isAuthenticated())
        console.log('req.headers.authorization',req.headers.authorization)
        console.log('req.user: ',req.user)

        res.render('login')
    })

module.exports = route

 