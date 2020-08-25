const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session)
const connectRedis = require('connect-redis')
const Redis = require('ioredis') // tem outros "redis" cuidado - esse "ioredes" tem mais algumas funções - faz cache

 const configRedis = {
    REDIS_PORT : 6379,
    REDIS_HOST : 'localhost'
  } 
const RedisStore = connectRedis(session) // cria sessao RedisStore e carrega o session dentro do connectRedis

const client = new Redis(configRedis) // instanciando uma sessão do Redis

const store = new RedisStore({ client, ttl: 30*60*60 }) // instancia uma sessap do RedisStore e passa os parâmetros sendo q ttl é o tempo q vai ficar ativo


module.exports ={
  sessionconfig: {
    
      secret: 'WbI',
      resave: false,
      saveUninitialized: false,
      name: "wbi-Session",
      rolling: true, 
      cookie: {
          store: store,
          httpOnly: true,
          secure: 'production',
          sameSite: true,
          maxAge: 6000000 // Time is in miliseconds
      }
    },

  allowCrossDomain : function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  },
 

} 


