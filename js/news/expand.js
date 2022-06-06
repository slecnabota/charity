let button = document.getElementById('button');
let elm = document.getElementById('informer');

button.onclick = function (){
    var className = elm.className;
    if( className.indexOf(' expanded') == -1 ){
        className += ' expanded';
        button.innerHTML= 'Скрыть <img src=../img/news/arrow.svg>';
    }
    else {
        className = className.replace(' expanded', '');
        button.innerHTML= 'Показать остальные новости  <img src=../img/news/arrow.svg>';
    }
    informer.className = className;
    return false;
};
