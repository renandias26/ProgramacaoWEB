/*Importando a classe router do express */
import { Router } from "express";
import HealthCheckController from "./controller/HealthCheckController";
import ProductsController from "./controller/ProductsController";
import UserController from "./controller/UserController";

const routes = Router()

//criar metodo novo, usar reduce para somar os valores do stock do itens para saber o valor total do stock

/*Usamos o metodo GET, passando como parametro o nome da rota, e o que deve ser executada ao ser chamada */
routes.get('/health-check', HealthCheckController.check)

routes.get('/user', UserController.list)

routes.get('/stock-value', ProductsController.stockValue)

routes.get('/products-stock', ProductsController.stock)

routes.get('/products', ProductsController.list)

routes.post('/products', ProductsController.create)


export default routes