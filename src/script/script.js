let optionOneSelected = null;

function selectProductOne(option) {
    if (optionOneSelected !== null) {
        optionOneSelected.classList.remove("select");
    }

    optionOneSelected = option;
    optionOneSelected.classList.add("select");

    checkOptionsSelected();
}

let optionTwoSelected = null;

function selectProductTwo(option) {
    if (optionTwoSelected !== null) {
        optionTwoSelected.classList.remove("select");
    }

    optionTwoSelected = option;
    optionTwoSelected.classList.add("select");

    checkOptionsSelected();
}

let optionThreeSelected = null;

function selectProductThree(option) {
    if (optionThreeSelected !== null) {
        optionThreeSelected.classList.remove("select");
    }

    optionThreeSelected = option;
    optionThreeSelected.classList.add("select");

    checkOptionsSelected();
}

function checkOptionsSelected() {
    if (
        optionOneSelected !== null &&
        optionTwoSelected !== null &&
        optionThreeSelected !== null &&
        optionOneSelected.classList.contains("select") &&
        optionTwoSelected.classList.contains("select") &&
        optionThreeSelected.classList.contains("select")
    ) {
        let button = document.getElementsByClassName("closeOrder");
        button[0].classList.add("buttonSelect");
    }
}

function closeOrder(button) {
    const closeOrder = document.getElementsByClassName("hide");
    closeOrder[0].classList.remove("hide");

    let priceOneText = document.getElementsByClassName("select")[0].lastElementChild;
    let priceTwoText = document.getElementsByClassName("select")[1].lastElementChild;
    let priceThreeText = document.getElementsByClassName("select")[2].lastElementChild;

    let price1 = priceOne.innerHTML
    let price2 = priceTwo.innerHTML
    let price3 = priceThree.innerHTML

    var amount = price1 + price2 + price3;

    let amountHTML = document.getElementsByClassName("productSelected")[3].lastElementChild;
    amountHTML.innerHTML = parseFloat(amount.innerHTML.toFixed(2).replace(',', '.'));
}

function cancel(button) {
    const cancelButton = document.getElementsByClassName("confirmation");
    cancelButton[0].classList.add("hide");
}