//получаем доступ к элементу board.
const board = document.querySelector('#board')
const colors = ['turquoise', 'magenta', 'purple', 'plum', 'pink', 'violet']

const SQUARES_NUMBER = 460  //генерируем количество квадратов.
// SQUARES_NUMBER - const.
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') //создается динамически html елемент.
    square.classList.add('square')

    square.addEventListener('mouseover', () =>    //Слушатель событий действия мышкой.
        setColor(square))

    square.addEventListener('mouseleave', () =>   //Слушатель событий для удаления цвета.
    removeColor(square))   


    board.append(square)

}
//создаем функцию для отображения цвета.
function setColor(element) {
    const color = getRandomColor() 
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //Добавляем эффектной (двойной повтор увеличивает ээфект).
}
//убираем цвет, тень.
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 0px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}