let button = document.getElementsByTagName('button');

button.addEventListener('click',function(){
    if (button.classList.contains('select')==true) {
        button.removeAttribute('class','select');
    } else {
        button.setAttribute('class','select');
    }
})