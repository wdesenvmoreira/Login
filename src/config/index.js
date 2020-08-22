const session = require('express-session')

module.exports ={
  session: {
    
      secret: 'palavrasecreta',
      resave: false,
      saveUninitialized: false,
     // cookie: { secure: false }
    },
  allowCrossDomain : function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  }

} 


