console.log('Javascript carregado');

function validaCPF(cpf){
    console.log(cpf.length);
    if(cpf.length != 11){

        return false;
    }
    else{

        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);
        var soma = 0;

        for(var i = 10;i>1;i--){

            soma += numeros.charAt(10-i)*i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11-(soma%11); //tipo um if - interessante - operador ternário
        //var resultado = (soma * 10)%11;
        console.log(resultado);
        //validação primeiro digito
        if (resultado!=digitos.charAt(0)){

            return false;
        }

        soma = 0;
        numeros = cpf.substring(0,10);

        for(var k = 11;k>1;k--){

            soma+=numeros.charAt(11-k)*k;
        }

        resultado = soma % 11 < 2 ? 0 : 11-(soma%11);
        //resultado = (soma * 10)%11;
        console.log(resultado);
        if (resultado != digitos.charAt(1)){

            return false;
        }

        return true;
    }

}

function validation(){
    //console.log('iniciando validacao');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    var cpf = document.getElementById('cpf_digitado').value;
    // console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao){

        document.getElementById('success').style.display = 'block';
    }

    else{

        document.getElementById('error').style.display = 'block';
    }
}

