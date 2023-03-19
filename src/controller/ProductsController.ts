import { Request, Response } from "express"
import ProductsServices from "../services/ProductsServices"

class ProductController{
    async create(req:Request, res:Response){
        await ProductsServices.createProductList(req.body)
        return res.status(201).send()
    }

    async list(req: Request, res: Response){
        const productlist = await ProductsServices.listProducts()

        return res.status(200).send(productlist)
    }

    async stock(req:Request, res:Response){
        const stockProducts = await ProductsServices.processedProducts()

        return res.status(200).send(stockProducts)
    }

    async stockValue(req: Request, res: Response){
        const Value = await ProductsServices.TotalSotckValue()

        const mensagem = `Valor total do estoque: ${Value}`
        return res.status(200).send(mensagem)
    }
}

export default new ProductController()