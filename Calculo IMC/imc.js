//todos os elementos tem que buscar na id

const calcular = document.getElementById('calcular');


function imc (){
    const nome/*Variável */ = document.getElementById('nome').value;/*ID na pagina html */
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !== '' && altura != '' && peso != ''){//value para respeitar o comando ele recebe quem escrever no input
        const valorIMC = (peso / (altura * altura)).toFixed(1);//calculo do IMC- Tofixed faz com que fique quantas casas decimais quer

        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25) {
            classificacao = 'com peso ideal. Parabens!';
        }else if(valorIMC < 30){
            classificacao = 'Levemente acima do peso!';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;
    }
    else{
       resultado.textContent = 'Preencha todos os campos!'//textContent faz aparecer a mensagem
    }

}

calcular.addEventListener('click', imc);//imc será uma variavél para calcular