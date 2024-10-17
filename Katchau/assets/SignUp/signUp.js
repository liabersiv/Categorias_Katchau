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
const close = document.getElementById('close');
const emailIcon = document.getElementById('emailIcon');

email.addEventListener('input', () => {

    if (email.value.length != 0) {
        emailIcon.style.display = 'none';
        close.style.display = 'flex';
    } else {
        emailIcon.style.display = 'flex';
        close.style.display = 'none';
    };
});

close.addEventListener('click', () => {

    email.value = '';

    if (email.value.length == 0) {
        emailIcon.style.display = 'flex';
        close.style.display = 'none';
    };

});

$(document).ready(function () {

    $('#email').on('input', function () {

        const usuario = $(this).val().replace(/@g /, '').trim();

        if (usuario.includes('@g')) {
            $(this).val(usuario.replace(/@g.*$/, '@gmail.com'));
        } else if (usuario.includes('@y')) {
            $(this).val(usuario.replace(/@y.*$/, '@yahoo.com'));
        };

    });
});


const popUp = document.getElementById('popUpTermos');
const textAdded = document.getElementById('textAdded');

const popUpEvent = () => {

    const popReduced = () => {
        popUp.style.width = '40px';
        popUp.style.display = 'flex';
        popUp.style.opacity = '1';
    };

    popReduced();


    setTimeout(() => {
        popUp.style.width = '355px';
        popUp.style.transition = '0.5s';
        popUp.style.boxShadow = '5px 5px 8px #0a0a0a';
        textAdded.style.display = 'flex';
        textAdded.style.fontSize = '18px';
        textAdded.style.alignItems = 'center';
    }, 300);

    setTimeout(() => {
        popReduced();
    }, 2500);

    setTimeout(() => {
        popUp.style.opacity = '0';
        popUp.style.transition = '0.5s';
    }, 3200);

};

const continuar = document.getElementById('continuar');
const termos = document.getElementById('termosDeUso');

if (termos.checked) {
    continuar.disabled = true;
} else {
    continuar.disabled = false;
}

continuar.addEventListener('click', () => {
    if (termos.checked == true) {
        window.location.href = 'cadastro-sucesso.html';
    } else {
        popUpEvent();
    }
});