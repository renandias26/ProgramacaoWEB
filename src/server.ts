import app from './App'

/*Na propriedade dev do package.json, 
estamos espeificando que esse será
o primeiro arquivo a ser executada ao chamar npm run dev*/
function main(){
    try{
        /*Usamos o metodo listen do express, para criar um servidor na porta 3000, com o 'domínio' localhost 
        executando uma arrow function assíncrona*/
        app.listen(3000, 'localhost',async () => {
            console.log('starting server at port 3000')
        })
    }catch(err){
        console.log('starting server Error',err)
    }
}

main();