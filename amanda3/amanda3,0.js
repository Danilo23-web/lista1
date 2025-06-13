let contador = 100;

const contadorDiv = document.getElementById('contador');
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');

btnAumentar.addEventListener('click', () => {
  contador += 10;
  contadorDiv.textContent = contador;
});

btnDiminuir.addEventListener('click', () => {
  contador -= 10;
  contadorDiv.textContent = contador;
});
