const gridContainer = document.getElementById('gridContainer')
let squareColor = '#2efffe'

// create a grid of size * size divs that is always 1000px
const createGrid = (size) => {
  // Remove all previous divs
  gridContainer.replaceChildren()

  // Calculate the size of each grid item based on the number of items and the container size
  const gridItemSize = (700 / size);


  // create and add new divs
  for(let i = 0; i < (size * size); i++) {
    let gridItem = document.createElement('div')
    gridItem.style.width = `${gridItemSize}px`;
    gridItem.style.height = `${gridItemSize}px`;
    gridContainer.append(gridItem)
  }
  // add grid style
  gridContainer.style.gridTemplateColumns = `repeat(${size}, ${gridItemSize}px`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, ${gridItemSize}px`;
  
  addListener();
  colorFillGrid();
}



// add an event listener for each of the suqares in #gridContainer
function addListener(color = squareColor){
  const gridSquares = document.querySelectorAll('#gridContainer > div')
  gridSquares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = color
  })
});
}

// Input slider changes size of the greed
const rangeSlider = document.getElementById('rangeSlider')
const sliderDisplay = document.querySelector('.sliderDisplay')
rangeSlider.addEventListener('change', (e) => {
  createGrid(rangeSlider.value);
  sliderDisplay.innerText = `${rangeSlider.value} x ${rangeSlider.value}`

})

// Color picker
const colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('change', (e) => {
  const gridItems = document.querySelectorAll('#gridContainer > *')
  gridItems.forEach((div) => {
    div.addEventListener('mouseover', ()=>{
      div.style.backgroundColor = `${colorPicker.value}`
    })
  })
})

// Eraser
const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () => {
  addListener('white')
})

// Multicolor
const multicolor = document.querySelector('.multicolor')
multicolor.addEventListener('click', () => {
  // random integer generator
  const randomInt = () => {return Math.floor(Math.random() * 256)}

  const gridSquares = document.querySelectorAll('#gridContainer > div')
  gridSquares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  })
});

})

// Color Fill
function colorFillGrid(){
  const colorFill = document.querySelector('.colorFill')
  const gridItems = document.querySelectorAll('#gridContainer > *')
  colorFill.addEventListener('click', () => {
    gridItems.forEach((div) => {
      div.style.backgroundColor = `${colorPicker.value}`
    })
  })
}

// Clear
const clear = document.querySelector('.clear')
const gridItems = document.querySelectorAll('#gridContainer > *')
clear.addEventListener('click', () => {
  createGrid(rangeSlider.value)
  colorFillGrid()
  squareColor = colorPicker.value
})

// Select pen
const pen = document.querySelector('.pen')
pen.addEventListener('click', ()=> {
  const gridItems = document.querySelectorAll('#gridContainer > *')
  gridItems.forEach((div) => {
    div.addEventListener('mouseover', ()=>{
      div.style.backgroundColor = `${colorPicker.value}`
    })
  })
})

createGrid(rangeSlider.value)
colorFillGrid()