import {writeFile, readFile} from 'fs/promises'

class ProductService{
    async createProductList(data){
        try{
            await writeFile('products.json', JSON.stringify(data, null, 2))

        }catch(error){
            throw new Error(error)
        }
    }

    async listProducts(){
        const readProduct = await readFile('products.json', "utf-8")

        return JSON.parse(readProduct)
    }

    async processedProducts(){
        const listProducts = await this.listProducts()

        const processedProducts = listProducts.map(item => {
            let stock = 
            {
                nome: item.nome,
                quantidade: item.qtde,
                preco: item.preco,
                valor_estoque: item.qtde*item.preco
            }

            return stock
        })

        return processedProducts
    }

    async TotalSotckValue(){
        const stockProducts = await this.processedProducts()

        const TotalValue = stockProducts.reduce((stockValue, item) =>{
            return stockValue + item.valor_estoque
        }, 0)
        
        return TotalValue
    }
}

export default new ProductService()