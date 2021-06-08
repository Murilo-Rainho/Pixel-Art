const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const eraser = document.querySelector('#clear-board');
const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const colorSelected = [`${randomColors()}`, `${randomColors()}`, `${randomColors()}`];
let n1 = 5;

// Cria as divs da paleta de cores para selecionar a cor para pintar
function createPaletteDivs () {
	for (let index = 0; index < 4; index++) {
		if (index == 0) {
			let div = document.createElement('div');
			div.classList.add('color');
			div.classList.add('selected')
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = 'black';
		} else {
			let div = document.createElement('div');
			div.className = 'color';
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = colorSelected[index - 1];
		}

	}
}

createPaletteDivs();

// cria as divs da main que serão pintadas
function createMainDivs () {
  if (n1 < 5) {
    for (let index = 0; index < 5; index++) {
      let td = document.createElement('div');
      td.className = 'td';
      pixelBoard.appendChild(td);
      for (let index = 0; index < 5; index++) {
        let div = document.createElement('div');
        div.className = 'pixel';
        td.appendChild(div);
      }
    }
  } else if (n1 > 50) {
    for (let index = 0; index < 50; index++) {
      let td = document.createElement('div');
      td.className = 'td';
      pixelBoard.appendChild(td);
      for (let index = 0; index < 50; index++) {
        let div = document.createElement('div');
        div.className = 'pixel';
        td.appendChild(div);
      }
    }
  } else {
    for (let index = 0; index < n1; index++) {
      let td = document.createElement('div');
      td.className = 'td';
      pixelBoard.appendChild(td);
      for (let index = 0; index < n1; index++) {
        let div = document.createElement('div');
        div.className = 'pixel';
        td.appendChild(div);
      }
    }
  }
}

createMainDivs ();

// Adiciona o evento de selecionar a cor ao clicar numa cor da paleta de cores
const colorDiv = document.querySelectorAll('.color');

colorDiv[0].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[0].classList.add('selected');
})

colorDiv[1].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[1].classList.add('selected');
})

colorDiv[2].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[2].classList.add('selected');
})

colorDiv[3].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[3].classList.add('selected');
})

// Adiciona o evento de pintar os quadrados do board
function paintingBoard () {
  if (n1 < 5) {
    for (let index = 0; index < 25; index++){
      let toPaint = document.querySelectorAll('.pixel')[index];
      toPaint.addEventListener('click', () => {
        let selected = document.querySelector('.selected');
        toPaint.style.backgroundColor = selected.style.backgroundColor
      })
    }
  } else if (n1 > 50) {
    for (let index = 0; index < 2500; index++){
      let toPaint = document.querySelectorAll('.pixel')[index];
      toPaint.addEventListener('click', () => {
        let selected = document.querySelector('.selected');
        toPaint.style.backgroundColor = selected.style.backgroundColor
      })
    }
  } else {
    for (let index = 0; index < n1 * n1; index++){
      let toPaint = document.querySelectorAll('.pixel')[index];
      toPaint.addEventListener('click', () => {
        let selected = document.querySelector('.selected');
        toPaint.style.backgroundColor = selected.style.backgroundColor
      })
    }
  }
}

paintingBoard();

// 'Apaga' a cor das divs da main que foram pintadas, retornando para a cor de background original (white)
eraser.addEventListener('click', () => {
	let squares = document.querySelectorAll('.pixel');
	for (let index of squares) {
		index.style.backgroundColor = 'white';
	}
})

// Altera o tamanho do quadro para ser pintado através do botão vqv
generateBoard.addEventListener('click', () => {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else {
    n1 = boardSize.value;
    boardSize.value = '';
    pixelBoard.innerText = '';
    createMainDivs();
    paintingBoard();
  }
})

// Altera o tamanho do quadro para ser pintado através do enter
boardSize.addEventListener('keypress', (event) => {
	if (event.keyCode == 13) {
    if (boardSize.value === '') {
      alert('Board inválido!');
    } else {
      n1 = boardSize.value;
      boardSize.value = '';
      pixelBoard.innerText = '';
      createMainDivs();
      paintingBoard();
    }
	}
})

// Gera cores hexadecimais aleatórias
function randomColors () {
	let abc = 'ABCDEF';
	let letter1 = abc[Math.floor(Math.random() * 6)];
	let numbers1 = Math.floor(Math.random() * 10);
	let letter2 = abc[Math.floor(Math.random() * 6)];
	let numbers2 = Math.floor(Math.random() * 10);
	let letter3 = abc[Math.floor(Math.random() * 6)];
	let numbers3 = Math.floor(Math.random() * 10);
	let color = `#${letter1}${numbers1}${letter2}${numbers2}${letter3}${numbers3}`;
	return color;
}
