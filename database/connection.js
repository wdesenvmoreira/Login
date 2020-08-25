const knex = require('knex')
const path = require('path')

module.exports = connection = knex({
		client: 'sqlite3',
		connection: {
		filename: path.resolve(__dirname,'datawd.sqlite3')
	}
})
