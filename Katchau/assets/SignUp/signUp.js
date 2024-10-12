const cadeado = document.getElementById('cadeado');
const senha = document.getElementById('password');
const eyesOn = document.getElementById('eyesOn');
const eyesOff = document.getElementById('eyesOff');

senha.addEventListener('input', () => {
    if(senha.value.length > 0){
    cadeado.style.display = 'none';
    eyesOn.style.display = 'flex';
    } else { 
        cadeado.style.display = 'flex';
        eyesOn.style.display = 'none';
        eyesOff.style.display = 'none';
    }
})

eyesOn.addEventListener('click', () => {
    senha.type = 'text';
    eyesOff.style.display = 'flex';
    eyesOn.style.display = 'none';
});

eyesOff.addEventListener('click', () => {
    senha.type = 'password';
    eyesOn.style.display = 'flex';
    eyesOff.style.display = 'none';
})

