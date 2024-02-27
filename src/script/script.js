function selectProduct() {
    let option = document.querySelectorAll('.option');
    
    let valuesOption = Object.values(option);
    
    console.log(valuesOption)

    if (option[0].classList.contains('select')) {
        option[0].classList.remove('select');
    } else {
        option[0].classList.add('select');
    }
}