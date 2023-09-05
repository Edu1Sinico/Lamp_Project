// Variáveis de imagem
var ligado = "img/light-bulb-on.png";
var desligado = "img/light-bulb-off.png";
var quebrado = "img/light-bulb-broken.png";

var off = "img/light switch_off.png";
var on = "img/light switch_on.png";

// Váriaveis aleatórias
var cont = 0;
var tempNum = 0;
var contQuebrar = 0;
var isBroken = true;

// declaração de variáveis para os ids
var btn_reset = document.getElementById("reset");
var btn_replace = document.getElementById("btn_replace");
var lamp_img = document.getElementById("alvo-lampada");
var light_switch = document.getElementById("light_switch");
var switch_click = document.getElementById("switch_click");
var broken_glass_sound = document.getElementById("broken_glass_sound");
var impact_glass = document.getElementById("impact_glass");
var broken_glass_animation = document.getElementById("broken_glass");

// Função de piscar a lâmpada quando a página for carregada
window.onload = function () {

}

// Função de reset da lâmpada
function reset() {
    cont = 0;
    btn_reset.style.display = 'none';
}

// Função de ligar
function ligar() {
    if (isBroken) {
        cont++;
        if (cont >= 30) {
            // Método de queimar
            lamp_img.src = "img/light-bulb-off.png";
            btn_reset.style.display = 'block';
            if (tempNum == 0) {
                light_switch.src = off;
                tempNum = 1;
                switch_click.play();
            }
            else {
                light_switch.src = on;
                tempNum = 0;
                switch_click.play();
            }
        }
        else {

            if (tempNum == 0) {
                lamp_img.src = desligado;
                light_switch.src = off;
                tempNum = 1;
                switch_click.play();
            }
            else {
                lamp_img.src = ligado;
                light_switch.src = on;
                tempNum = 0;
                switch_click.play();
            }
        }
    }
}

//Função de quebrar
function quebrar() {
    if (contQuebrar < 10) {
        // Conta quantas vezes você pode clicar na lâmpada até quebrar
        contQuebrar++;
        impact_glass.play();
        lamp_img.style.transform = 'rotate(-10deg) scale(0.9)';
        // função de time out
        setTimeout(function () {
            lamp_img.style.transform = 'rotate(0deg) scale(1)';
            if (contQuebrar == 10) {
                lamp_img.src = quebrado;
                broken_glass_animation.style.display = 'block';
                btn_replace.style.display = 'block';
                broken_glass_sound.play();
                isBroken = false;
                
                return;
            }
        }, 100);
    }
}

// Função de troca
function trocar() {
    lamp_img.src = desligado;
    btn_replace.style.display = 'none';
    broken_glass_animation.style.display = 'none';
    contQuebrar = 0;
    cont = 0;
    btn_reset.style.display = 'none';
    isBroken = true;
}
