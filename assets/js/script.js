function trocar() {
    if(document.querySelector('body').classList.contains('preto')){
        document.querySelector('body').classList.remove('preto');
        document.querySelector('body').classList.add('branco');
        document.querySelector('p').classList.add('branco p');
        document.querySelector('h2').classList.add('branco h2');
        document.querySelector('h1').classList.add('branco h1');
        document.querySelector('.banda--img').classList.add('branco .banda--img');
        document.querySelector('.integrante img').classList.add('branco .integrante img');
    } else{
        document.querySelector('body').classList.remove('branco');
        document.querySelector('body').classList.add('preto');
    }
}