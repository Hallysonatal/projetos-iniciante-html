function modificarqtd(item, acao){

    const qtd = document.getElementById('qtd_' + item)
    const valor = document.getElementById('valor_' + item)
    const total = document.getElementById('total_' + item)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('Atenção! A quantidade já esta no valor mínimo.')
    } else{
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--

    const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
    total.innerHTML = formatarValor(valorTotal)
    soma()
    }
}

function soma(){
    
    let soma = 0
    

    for(let i = 1; i < 5; i++){
        soma += Number(somenteNumeros(document.getElementById('total_' + i).innerHTML))
    }

    document.getElementById('subtotal').innerHTML = formatarValor(soma)
    
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return n.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL', // Real Brasileiro
        minimumFractionDigits: 0, // Garantir pelo menos 2 casas decimais
        maximumFractionDigits: 2  // Limitar a no máximo 2 casas decimais)
})

}

