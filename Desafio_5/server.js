const express = require('express');
const {engine} = require('express-handlebars');
const {webRouter} = require('./routes/webRouter.js');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main"
}));

app.set('view engine', '.hbs');

app.use('/', webRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor conectado en el puerto ${PORT}`)
})
