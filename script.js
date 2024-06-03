const oilPaintButton = document.querySelector("#oilPaint");
const monochromeButton = document.querySelector("#monochrome");
const randomButton = document.querySelector("#random");
const eraseButton = document.querySelector("#eraseButton");
const clearButton = document.querySelector("#clearButton");
const dimensionSlider = document.querySelector("#discreteSlider");

let boardDimension = 16;
let dimension = 100 / boardDimension;
const board = document.querySelector("#board");

function initialiseBoard() {
    board.innerHTML = '';
    for (let j = 0; j < boardDimension; j++) {
        const row = document.createElement("div");
        row.style.width = dimension + '%';
        row.style.height = '100%';
        for (let i = 0; i < boardDimension; i++) {
            const singleBox = document.createElement("div");
            singleBox.style.height = dimension + '%';
            singleBox.classList.add("checkBox");
            singleBox.style.opacity = 0;

            row.appendChild(singleBox);
        }
        board.appendChild(row);
    }
}

function removeAllEventListener(nodeList)
{
    nodeList.forEach(element => {
        let clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
    });
}

function oilPaintBrush()
{
    boxes = document.querySelectorAll(".checkBox");
    removeAllEventListener(boxes);
    boxes = document.querySelectorAll(".checkBox");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener('mouseenter', () => {
            if (boxes[i].style.backgroundColor != 'var(--eerie-black)')
                boxes[i].style.opacity = 0.1;
            boxes[i].style.backgroundColor = 'var(--eerie-black)';
            if (boxes[i].style.opacity < 1)
                boxes[i].style.opacity = Number(boxes[i].style.opacity) + 0.1;
        });
    }
}

function monochromeBrush()
{
    boxes = document.querySelectorAll(".checkBox");
    removeAllEventListener(boxes);
    boxes = document.querySelectorAll(".checkBox");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener('mouseenter', () => {
            boxes[i].style.backgroundColor = 'var(--eerie-black)';
            boxes[i].style.opacity = '1';
        });
    }
}

function randomBrush()
{
    boxes = document.querySelectorAll(".checkBox");
    removeAllEventListener(boxes);
    boxes = document.querySelectorAll(".checkBox");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener('mouseenter', () => {
            let R = Math.floor(Math.random() * (256 - 0));
            let G = Math.floor(Math.random() * (256 - 0));
            let B = Math.floor(Math.random() * (256 - 0));
            let color = `rgb(${R}, ${G}, ${B})`;
            boxes[i].style.backgroundColor = color;
            boxes[i].style.opacity = '1';
        });
    }
}

function eraseBrush()
{
    boxes = document.querySelectorAll(".checkBox");
    removeAllEventListener(boxes);
    boxes = document.querySelectorAll(".checkBox");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener('mouseenter', () => {
            boxes[i].style.opacity = 0;
            boxes[i].style.backgroundColor = 'var(--baby-powder)';
        });
    }
}

oilPaintButton.addEventListener('click', () => {
    oilPaintBrush();
});

monochromeButton.addEventListener('click', () => {
    monochromeBrush();
});

randomButton.addEventListener('click', () => {
    randomBrush();
});

eraseButton.addEventListener('click', () => {
    eraseBrush();
});

clearButton.addEventListener('click', () => {
    initialiseBoard();
});

let tooltip = document.querySelector("#sliderValueTooltip");

dimensionSlider.addEventListener('mouseup', () => {
    if (boardDimension != dimensionSlider.value) {
        boardDimension = dimensionSlider.value;
        dimension = 100 / boardDimension;
        initialiseBoard();
    }
});

dimensionSlider.addEventListener('change', () => {
    if (boardDimension != dimensionSlider.value) {
        boardDimension = dimensionSlider.value;
        dimension = 100 / boardDimension;
        initialiseBoard();
    }
});

dimensionSlider.addEventListener("input", function() {
    var sliderValue = this.value;    
    tooltip.textContent = `Canvas Size: ${sliderValue} x ${sliderValue}`;
});

initialiseBoard();