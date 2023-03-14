//elemento fechar
//var btFechar = document.getElementById('btFechar')
var btFechar = document.querySelector('.popup .fechar')
var oferta = document.getElementById('oferta')

//evento clique no elemento fechar
btFechar.addEventListener('click', () => {
    //alteração de css em tempo real
   oferta.style.display = 'none'
   

})  



/* var num = 12
var raiz = Math.sqrt(num)

console.log(raiz)
console.log(Math.round(raiz))

// Aredondar casas decimais usa **tofixed** em variavel
console.log(Number(raiz.toFixed(2)) + 4) */