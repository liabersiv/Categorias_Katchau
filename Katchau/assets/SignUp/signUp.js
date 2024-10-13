const cadeado = document.getElementById('cadeado');
const senha = document.getElementById('password');
const eyesOn = document.getElementById('eyesOn');
const eyesOff = document.getElementById('eyesOff');

senha.addEventListener('input', () => {
    if (senha.value.length > 0) {
        cadeado.style.display = 'none';
        eyesOn.style.display = 'flex';
    } else {
        cadeado.style.display = 'flex';
        eyesOn.style.display = 'none';
        eyesOff.style.display = 'none';
    }
});

eyesOn.addEventListener('click', () => {
    senha.type = 'text';
    eyesOff.style.display = 'flex';
    eyesOn.style.display = 'none';
});

eyesOff.addEventListener('click', () => {
    senha.type = 'password';
    eyesOn.style.display = 'flex';
    eyesOff.style.display = 'none';
});

const cpf = document.getElementById('cpf');
$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
});

const cep = document.getElementById('cep');
$(document).ready(function () {
    $('#cep').mask('00000-000');
});

const adress = document.getElementById('adress');
$(document).ready(function () {

    function rua(nomeDaRua) {
        return 'Rua ' + nomeDaRua;
    };

    $('#adress').on('input', function () {
        const nomeDaRua = $(this).val().replace(/Rua /, '');
        $(this).val(rua(nomeDaRua));

        if (nomeDaRua.length === 0) {
            $(this).val('');
        };

    });
});

const phone = document.getElementById('phone');
$(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
});

const email = document.getElementById('email');
$(document).ready(function () {

    function gmail(usuario) {
        return usuario + '@gmail.com';
    }

    $('#email').on('input', function () {

        const usuario = $(this).val().replace(/@g /, '').trim();

        if (usuario.includes('@g')) {
            $(this).val(usuario.replace(/@g.*$/, '@gmail.com'));
        } else if (usuario.includes('@y')) {
            $(this).val(usuario + 'ahoo.com');
        } 
        
        if(usuario.length < 3){
            $(this).val();
        }

    });
});