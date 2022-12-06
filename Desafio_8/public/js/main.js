const socket = io();
const addProducts = document.querySelector('#formulario')
const addChats = document.querySelector('#chat-form');

addProducts.addEventListener('submit', e => {
    e.preventDefault();

    const product = {
        name: addProducts[0].value,
        price: addProducts[1].value,
        thumbnail: addProducts[2].value
    }

    socket.emit('update', product);

    addProducts.reset();
})

socket.on('products', handleProducts);

addChats.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = {
        sender: addChats[0].value,
        content: addChats[1].value
    }
    socket.emit('new-chat', message);
    addChats.reset();
})

socket.on('chat-update', handleChats)

async function handleProducts(products){
    const remoto = await fetch('templates/tables.hbs')
    const templates = await remoto.text();
    const functionTemplate = Handlebars.compile(templates);
    const html = functionTemplate({products})
    document.querySelector('#table-products').innerHTML = html
}


async function handleChats(messages){
    const remoto = await fetch('templates/chat.hbs');
    const templates = await remoto.text();
    const functionTemplate = Handlebars.compile(templates);
    const html = functionTemplate({messages});
    document.querySelector('#chat').innerHTML = html

}



