const express = require('express');
const {productsRouter} = require('./routes/products.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/',productsRouter)
app.use('/store',express.static('views'))

function connect(port = 0){
    return new Promise((resolve, reject)=>{
        const serverConnected = app.listen(port, err => {
            if(err) reject(err)
            else resolve(serverConnected)
        })
    })
}


module.exports = {connect}



