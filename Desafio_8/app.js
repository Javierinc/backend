const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: Socket} = require('socket.io');
const {MessagesContainer} = require('./messagesContainer.js');
const {ProductsContainer} = require('./productsContainer.js');
const {sqlClient} = require('./sql_client.js');
require('dotenv').config();
const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);
const {engine} = require('express-handlebars');
const productContainer = new ProductsContainer(sqlClient,'products');
const chats = new MessagesContainer(sqlClient,'chats');


io.on('connection', async (socket) =>{
    const products = await productContainer.getAll();
    socket.emit('products', products);
    socket.on('update', async(product) => {
        await productContainer.save(product);
        const products = await productContainer.getAll();
        io.sockets.emit('products', products);
    })
})

io.on('connection', async (socket)=>{
    const messages = await chats.getAll();
    socket.emit('chat-update', messages);
    socket.on('new-chat', async(message)=>{
        message.date = new Date().toLocaleString();
        await chats.save(message);
        const messages = await chats.getAll();
        io.sockets.emit('chat-update', messages);
    })
})


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main"
}));

app.set('view engine', '.hbs');

const PORT = process.env.PORT ||3000;

const connected = httpServer.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${connected.address().port}`)
})
