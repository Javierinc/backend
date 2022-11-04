const {connect} = require('./server')

const PORT = 8080;
async function main(){
    try{
        const serv = await connect(PORT);
        console.log(`Connected to the port ${serv.address().port} 👀`)
    } catch(error){
        console.log(`Ups! something went wrong 😥: ${error}`)
    }
}

main()