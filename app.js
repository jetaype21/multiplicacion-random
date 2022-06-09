const setNumUno = document.querySelector("#numUno");
const setNumDos = document.querySelector("#numDos");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const scoreHtml = document.querySelector("#score");

//const numUno = Math.floor(Math.random() * (16 - 1)) + 1;
//const numDos = Math.floor(Math.random() * (16 - 1)) + 1;
function ramdomInt() {
    return {
        numUno: Math.floor(Math.random() * (16 - 1)) + 1,
        numDos: Math.floor(Math.random() * (16 - 1)) + 1,
    };
}

let rptaVirtual;

function renderNum(){
    let h = ramdomInt()
    setNumUno.textContent = h.numUno;
    setNumDos.textContent = h.numDos;
    rptaVirtual = h.numUno * h.numDos;
}

let score = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const rptaUser = Number(input.value);

    if(rptaUser === rptaVirtual) {
        score++;
        form.reset()
    } else {
        console.log('Ingrese un  numero correcto');
        form.reset()
    }

    scoreHtml.textContent = score
    renderNum()
});

document.addEventListener("DOMContentLoaded", (e) => {
    renderNum()
});
