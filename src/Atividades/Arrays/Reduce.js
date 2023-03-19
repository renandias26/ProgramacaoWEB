const array = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99, valor_estoque: 79.9 },
    { nome: 'Impressora', quantidade: 0, preco: 649.5, valor_estoque: 0 },
    { nome: 'Caderno', quantidade: 4, preco: 27.1, valor_estoque: 108.4 },
    { nome: 'Lapis', quantidade: 3, preco: 5.8, valor_estoque: 17.4 },
    {
      nome: 'Tesoura',
      quantidade: 1,
      preco: 19.99,
      valor_estoque: 19.99
    }
  ]

const total = array.reduce((initialValue, item)=>{
    return initialValue + item.valor_estoque
}, 0)

//   console.log(array)
  console.log(total)
