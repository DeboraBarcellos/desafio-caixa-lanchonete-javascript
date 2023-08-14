class CaixaDaLanchonete {

  calcularValorDaCompra(formaDePagamento, itens) {

    const cardapio = {
      cafe: 3.00,
      chantily: 1.50,
      suco: 6.20,
      sanduiche: 6.50,
      queijo: 2.00,
      salgado: 7.25,
      combo1: 9.50,
      combo2: 7.50
    };

    let total = 0;
    let PedidoSanduiche = false;
    let PedidoCafe = false;

    if (!itens || itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    for (let item of itens) {
      const [codigo, quantidade] = item.split(",");
      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }
      if (!cardapio[codigo]) {
        return "Item inválido!";
      }
      if (codigo === 'cafe') {
        PedidoCafe = true;
      }
      if (codigo === 'sanduiche') {
        PedidoSanduiche = true;
      }
      total += cardapio[codigo] * quantidade;
    }

    if (!PedidoCafe && itens.some(item => item.includes('chantily'))) {
      return "Item extra não pode ser pedido sem o principal";
    }

    if (!PedidoSanduiche && itens.some(item => item.includes('queijo'))) {
      return "Item extra não pode ser pedido sem o principal";
    }
   
    
    switch (formaDePagamento) {
      case "dinheiro":
        total -= total * 0.05;
       break;

      case "credito":
        total += total * 0.03;
        break;

      case "debito":
        break;
          
                
      default:
          return "Forma de pagamento inválida!";
          
          
    }

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

export { CaixaDaLanchonete };