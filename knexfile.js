const path = require('path')

module.exports = {


    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'datawd.sqlite3')
    },
    migrations:{
      directory: path.resolve(__dirname, 'database', 'migrations')

    },
    seeds:{
      directory: path.resolve(__dirname, 'database', 'seeds')

    },
    useNullAsDefault:true,

};