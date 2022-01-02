const body = document.querySelector('body');
const header = document.createElement('div');
header.textContent = 'Etch-a-Sketch';
header.classList.add('header');
body.append(header);
const bigContainer = document.createElement('div');
bigContainer.classList.add('big-container');
body.append(bigContainer);
const container = document.createElement('div');

//button container
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
bigContainer.append(buttonContainer);

container.classList.add('grid-container');
bigContainer.append(container);




const changeButton = document.createElement('button');
const clearButton = document.createElement('button');
clearButton.textContent="Clear";
changeButton.textContent = 'Change Grid Size';
const colorButton = document.createElement('input');
colorButton.setAttribute('type', 'color');
colorButton.textContent = "Change Color";

const DEFAULT_COLOR = '#000000';


buttonContainer.append(clearButton);
buttonContainer.append(colorButton);
buttonContainer.append(changeButton);

let color = DEFAULT_COLOR;


let rowsEnter = document.createElement('input');
rowsEnter.setAttribute('placeholder', 'rows')

let rowsValue = 16;

const sizeButton = document.createElement('button');
sizeButton.textContent = "Enter";

container.style.gridTemplateRows = `repeat(${rowsValue}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${rowsValue}, 1fr)`;
colorButton.addEventListener('input', changeColor);
function changeColor() {
  color = colorButton.value;
  console.log(colorButton.value);
  
}
  
  
  for (let i=1; i<=(rowsValue*rowsValue); i++){
    const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.textContent = ' ';
  square.addEventListener('mouseenter', changeClass);
  }
/*for (let i=1; i<=256; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.textContent = '';
  square.addEventListener('mouseenter', changeClass);
  
}*/

function deleteGrid () {
  while(Boolean(container.firstChild)===true){
    container.removeChild(container.lastChild);
  }
}

function resetGrid(value) {
  value = rowsValue;
  deleteGrid();
  container.style.gridTemplateRows = `repeat(${rowsValue}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${rowsValue}, 1fr)`;
   
  
  for (let i=1; i<=(rowsValue*rowsValue); i++){
    const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.textContent = ' ';
  square.addEventListener('mouseenter', changeClass);
  }

  rowsEnter.remove();
  sizeButton.remove();
  buttonContainer.append(changeButton);

}

function changeGrid () {
  buttonContainer.append(rowsEnter);
  changeButton.remove();
  buttonContainer.append(sizeButton);
  
}

function makeGrid(x) {
  deleteGrid();
  x=rowsValue;
  rowsValue = parseInt(rowsEnter.value);
  
  console.log(rowsValue);
  
  

  container.style.gridTemplateRows = `repeat(${rowsValue}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${rowsValue}, 1fr)`;
   
  
  for (let i=1; i<=(rowsValue*rowsValue); i++){
    const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.textContent = ' ';
  
  square.addEventListener('mouseenter', changeClass);
  
  }

  rowsEnter.remove();
  sizeButton.remove();
  buttonContainer.append(changeButton);


  }


clearButton.addEventListener('click', resetGrid)
changeButton.addEventListener('click', changeGrid);
sizeButton.addEventListener('click', makeGrid);





function changeClass (e) {
  
  e.target.style.backgroundColor = `${color}`;
}






