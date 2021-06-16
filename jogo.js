//busca a altura e largura da página
var altura = 0
var largura = 0
var vidas = 1
var tempo = 100
var criaMoscaTempo = 1500

var nivel =  window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criaMoscaTempo = 1500
} else if (nivel === 'dificil') {
	criaMoscaTempo = 1000
} else if (nivel === 'chucknorris') {
	criaMoscaTempo = 750
}

function ajusteDeTamanho() {
	 altura = window.innerHeight
	 largura = window.innerWidth
	 console.log(largura, altura)
}

ajusteDeTamanho()
	//contagem de tempo de duração de cada partida
	var cronometro = setInterval(function(){
		tempo -= 1
		if(tempo < 0){
			clearInterval(cronometro)
			clearInterval(criaMosca)
			window.location.href = 'vitoria.html'
		} else {
		document.getElementById('cronometro').innerHTML = tempo
		}
	}, 1000)
	
//criação da lógica para randomizar a aparição das moscas
function posicaoRandom(){
	//remoção automatica caso não existe uma mosca
	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()
		if (vidas > 3) {
			
			window.location.href = 'fim_de_jogo.html'
		} else {

			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Impossibilita que haja posições negativas
	posicaoX = posicaoX < 0 ? 0: posicaoX
	posicaoY = posicaoY < 0 ? 0: posicaoY

	console.log(posicaoX, posicaoY)

	//criação do elemento html
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca)
}

//implementação da lógica que deixa o tamanho da mosca de forma randomica e aleatoria 
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)

	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}
}


function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	console.log(classe)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}