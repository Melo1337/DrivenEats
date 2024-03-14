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

    function fullPrice() {
        let priceOneText = document.getElementsByClassName("select")[0].lastElementChild.innerHTML.substring(3).replace(',', '.');
        let priceTwoText = document.getElementsByClassName("select")[1].lastElementChild.innerHTML.substring(3).replace(',', '.');
        let priceThreeText = document.getElementsByClassName("select")[2].lastElementChild.innerHTML.substring(3).replace(',', '.');

        let PriceOne = parseFloat(priceOneText)
        let PriceTwo = parseFloat(priceTwoText)
        let PriceThree = parseFloat(priceThreeText)

        let amount = PriceOne + PriceTwo + PriceThree

        let amountHTML = document.getElementsByClassName("productSelected")[3].lastElementChild;
        amountHTML.innerHTML = amount.toFixed(2).replace('.', ',');
    }
    fullPrice()

    function optionsSeleted() {
        let option1 = document.querySelector(".select :nth-child(2)").innerHTML;
        let productSelected = document.querySelector(".productSelected :first-child")
        productSelected.textContent = option1
        
        let priceOption1 = document.querySelector(".select :nth-child(4)").innerHTML;
        let productPrice2 = document.querySelector(".productSelected :first-child")

        console.log(document.getElementsByClassName("select"))
    }
    optionsSeleted()
}

function cancel(button) {
    const cancelButton = document.getElementsByClassName("confirmation");
    cancelButton[0].classList.add("hide");
}