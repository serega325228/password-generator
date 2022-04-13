const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['1', '2', "3", '4', '5', '6', '7', '8', '9', '0']
const symbols = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~']

const generationBtn = document.querySelector('#generationBtn')

const numbersInput = document.querySelector('#numbersInput') 
const lettersInput = document.querySelector('#lettersInput')
const symbolsInput = document.querySelector('#symbolsInput')

const length = document.querySelector('.length')
const lengthValue = document.querySelector('.lengthValue')
const password = document.querySelector('.password')

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const passwordGeneration = passwordLength => {
	let allSymbols;
	if (numbersInput.checked && lettersInput.checked && symbolsInput.checked) {
		allSymbols = [...letters, ...numbers, ...symbols]
	} else if (symbolsInput.checked && numbersInput.checked) {
		allSymbols = [...symbols, ...numbers]
	} else if (lettersInput.checked && numbersInput.checked) {
		allSymbols = [...letters, ...numbers]
	} else if (symbolsInput.checked && lettersInput.checked) {
		allSymbols = [...symbols, ...letters]
	} else if (numbersInput.checked) {
		allSymbols = [...numbers]
	} else if (lettersInput.checked) {
		allSymbols = [...letters]
	} else if (symbolsInput.checked) {
		allSymbols = [...symbols]
	} else {
		allSymbols = ['Ага, умник нашелся. ']
	}

	let passwordGen = '';
	for (let i = 0; i < passwordLength; i++) {
		passwordGen += allSymbols[random(0, allSymbols.length)]
	}
	password.textContent = passwordGen
}

lengthValue.textContent = length.value

length.addEventListener('change', () => {
	lengthValue.textContent = length.value
})

generationBtn.addEventListener('click', () => {
	passwordGeneration(length.value)
})