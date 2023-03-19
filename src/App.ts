import express from 'express'
import routes from './routes'

//Classe contendo as configurações da API
class App{
    //Criando propriedade publica, do tipo express.Application
    public express: express.Application //tipagem em typescript é feita com dois pontos. Nome_Variavel: int

    public constructor(){
        /*Atribuindo para a propriedade express uma instancia de express()
        Essa propriedade tem acesso aos 'métodos' da instancia do express */
        this.express = express();
        this.middleware();
        this.routes();
    }

    //
    private middleware(): void{// o dois pontos na frente do nome do método, define o retorno do método
        /*Estamos utilizando o metodo use do express
        para especificar que as requisições e respostas serão no formato de JSON */
        this.express.use(express.json());
    }

    private routes(): void{
        this.express.use(routes)
    }
}
//Exportando a classe criada já instanciando e chamando o atributo express
export default new App().express