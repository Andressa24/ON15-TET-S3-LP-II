let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

function realizarCompra(comprasDaCliente) {
    let valorTotal = 0
    let descontoTotalAplicado = 0
    let valorFinalDoProduto = 0
    let quantidadeDeProdutos = comprasDaCliente.length
    
    for(let item of comprasDaCliente) {
        valorTotal += item.valor // += 
        if (item.valor >= 200) {
            valorFinalDoProduto += (item.valor * 0.5) // 50% de desconto
            descontoTotalAplicado += (item.valor * 0.5) // o que restou
        } else if (item.valor >= 100) {
            valorFinalDoProduto += (item.valor * 0.8)
            descontoTotalAplicado += (item.valor * 0.2)
        }   else if (item.valor >= 80) {
            valorFinalDoProduto += (item.valor * 0.9)
            descontoTotalAplicado += (item.valor * 0.1)
        }   else if (item.valor >= 50) {
            valorFinalDoProduto += (item.valor * 0.95)
            desontoTotalAplicado += (item.valor * 0.05)
        }   else {
            valorFinalDoProduto += item.valor
        }
    }
}
    
    
    
    let notaFiscal = {
        "Valor Total": valorTotal,
        "Desconto Total Aplicado": descontoTotalAplicado,
        "Valor Final do Produto": valorFinalDoProduto,
        // "Data da Compra": // EXTRA



        
    }

    if(quantidadeDeProdutos > 10 || valorFinalDoProduto > 800) {
        console.log({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de desconto de $50,00 para sua próxima compra!'
        })
    } else {
        console.log(notaFiscal)
    }

    
realizarCompra(clienteLilit)

    // console.log(200 - (200 * 0.2))
    // console.log()