const localStrategy = require('passport-local').Strategy
const usuarios = require('../controller/controllerUsuarios')
const bcrypt = require('bcryptjs')


module.exports = (passport)=>{


    passport.serializeUser(function(user, done) {
        console.log('serialize usuario: ', user)
        done(null, user.id);
      });
         passport.deserializeUser(async(id, done)=>{
             console.log('deserialize usuario: ', id)
        await usuarios.findById(id, (err, user) => {
            done(err, user)
        })
    })
    //   passport.deserializeUser(function(id, done) {
    //     usuarios.findById(id, function(err, user) {
    //         console.log('desereialize usuario: ', user)
    //       done(err, user);
    //     });
    //   });
      
    passport.use(new localStrategy({
        usernameField: 'usuario',
        passwordField: 'senha'
    }, (usuario, senha, done)=>{
        usuarios.verificarUsuario(usuario).then((user)=>{
            if(!user){
                return done(null, false, {message: 'Conta inexistente.'})
            }
            bcrypt.compare(senha, user.senha, (erro, batem) => {
                if(batem){
                    console.log('senha batem: ', batem)
                    return done(null, user)
                }else{
                    console.log('não batem: ', batem)
                    return done(null, false, {message: "Senha não encontrada. "})
                }
            })
        })
    }))
    // passport.serializeUser((user, done)=>{
    //     done(null, user.id)
    // })

    // passport.deserializeUser(async(id, done)=>{
    //     await usuarios.findById(id, (err, user) => {
    //         done(err, user)
    //     })
    // })
}