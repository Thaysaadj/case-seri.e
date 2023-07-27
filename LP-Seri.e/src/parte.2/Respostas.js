const { Car } = require("phosphor-react");

// 1
const numbersDivisiveisPor7 = [];

for (let i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    numbersDivisiveisPor7.push(i);
  }
}

console.log(numbersDivisiveisPor7);

// 2

function repetirVezes (texto, vezes){
  if(typeof texto != 'string' || typeof vezes != 'number' ){
    console.log("Os paramêtros texto não é do tipo string ou o paramêtro vezes não é um número")
    return
  }

  const result = Array.from({length: vezes}, ()=> texto).join(', ')
  return result
}

const repeteTexto = repetirVezes("Passei" , 10)
console.log(repeteTexto)

// 3

const getPai = document.querySelector(".pai")
const insertFilho = document.querySelector(".filho")
getPai.appendChild(insertFilho)

// 4
const divContainer = document.querySelector('div')
divContainer.classList.add("classContainer")

const segundoP = document.querySelector(".classContainer p:nth-child(2)")
segundoP.textContent = 'Texto Alterado'

const getP = document.querySelectorAll('.classContainer p')
const ultimoP = getP[getP.length -1]
ultimoP.classList.add('last')


// 5
function contaIdade (idade){

  { idade >= 18 ?
    console.log("maior de idade")
    :
    console.log("menor de idade")
  }
}
contaIdade(18)

// 6

var obj = {
  nomeObj: 'Mouse',
  pesoObj: '150g'
}

function alterarObj (obj, oldName) {
  let arrayObj = [obj]

  for(let i = 0; i < arrayObj.length; i++){
    if(arrayObj[i].nomeObj === oldName){
      arrayObj[i].nomeObj = 'Teclado'
      arrayObj[i].pesoObj = '500g'
    }
  }

  return arrayObj
}
console.log(alterarObj(obj, "Mouse"))

// 7
const texto = 'Eu quero trabalhar na Seri.e Design'

const textoDeTrasPraFrenteComExclamacao = texto.split(' ').reverse().join('!')
const ultimaPalavraDoTexto = texto.split(' ').pop()
const quantidadeDeCaracteres = texto.length
const tipoDeAlgumaVariavel = typeof quantidadeDeCaracteres

console.log( "texto de trás para frente substituindo os espaços em branco por pontos de exclamação", textoDeTrasPraFrenteComExclamacao)
console.log("A última palavra do texto", ultimaPalavraDoTexto)
console.log(" A quantidade de caracteres do texto;", quantidadeDeCaracteres)
console.log("O tipo de alguma variável criada acima.", tipoDeAlgumaVariavel)

// 8

function AdicionaIdDiv() {
  const divs = document.querySelectorAll('div')

  divs.forEach((div, index)=>{
    div.setAttribute('data-id', index + 1)
  })
}

AdicionaIdDiv()

// 9
const categoriaDiv = document.querySelector('.categoria')
const suBCategoriaUl =  categoriaDiv.querySelector('.subcontainer ul')

categoriaDiv.addEventListener('click', function(){
  const subCategoriaVisivel = suBCategoriaUl.style.display === 'block'

  suBCategoriaUl.style.display = subCategoriaVisivel ? 'none' : 'block'

  categoriaDiv.classList.toggle('active')
  const subcontainerAndContent = categoriaDiv.querySelector('.subcontainer')
  subcontainerAndContent.classList.add('active')
})



 
