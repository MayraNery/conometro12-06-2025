//declaraçoes de variaveis
let segundos = 0;
let intervalo = null;
//elementos do DOM para manipulação
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

//botao star
starBtn.addEventListener("click", iniciarCronometro)

//botao pause
pauseBtn.addEventListener("click", pausarCronometro)

//botao de resetar
resetBtn.addEventListener("click", resetCronometro)

//funçao de start no cranametro
function iniciarCronometro(){
    if (intervalo) return;// evita que tenha muitos intervalos

    //guardar em intervalo o passr de 1seg ou 1000ms
    intervalo = setInterval(() => {
      segundos++;
      atualizaDisplay();
    },1000);
}

//funçao de pause
function pausarCronometro(){
    clearInterval(intervalo);
    intervalo = null
}

//funçao de resetar
function resetCronometro(){
    pausarCronometro(){
        segundos = 0;
        atualizaDisplay();
    }
}
 
//funçao e formatar o tempo
function formatarTempo(segundosTotais){
   const minutos = Math.floor(segundosTotais / 60);
   const segundos = segundosTotais % 60;
   return '${String(minutos).padStart(2, '0')}:${String(segunos)}
}

//funçao que envia o tempo para a pagina
function atualizaDisplay(){
    display.textContent = formatarTempo(segundos);
}