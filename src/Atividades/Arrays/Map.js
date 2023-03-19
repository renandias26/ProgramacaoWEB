const nums = [2, 4, 6, 8]

const double = number => number * 2

// console.log(nums.map(double))

const names = ['Ana', 'Bia', 'Lia', 'Rafa']

const LastWord = names.map(text => text[text.length - 1])

const FirstWord = names.map(text => text[0])

// console.log(chars)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.99},
]

const teste1 = carrinho.map(item => item.nome)
// console.log(teste1)

const teste2 = carrinho.map(item=> {return{nome: item.nome, valor: item.preco*item.qtde}})
const teste3 = carrinho.map(function(item){
    return {
        nome: item.nome,
        valor: item.preco*item.qtde
    }
})
console.log(teste2)
console.log(teste3)
