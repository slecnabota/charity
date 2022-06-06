let button = document.getElementById('button');
let elm = document.getElementById('informer');

button.onclick = function (){
    var className = elm.className;
    if( className.indexOf(' expanded') == -1 ){
        className += ' expanded';
        button.innerHTML= 'Скрыть <img src=img/main/hide.svg>';
        
    }
    else {
        className = className.replace(' expanded', '');
        button.innerHTML= 'Подробнее <img src=img/main/arrow.svg>';
    }
    informer.className = className;
    document.querySelector('.about__company').classList.toggle('morebg');
    return false;
};