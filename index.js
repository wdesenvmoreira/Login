const app = require('./src')
const port =5412

app.set('port', process.env.PORT ||3000 );


app.listen(port, () => {
    console.log(`Iniciado servidor na porta: ${port} appserver`);
})