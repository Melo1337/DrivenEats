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

let dish, drink, dessert, finalPrice;

function closeOrder(button) {

    if (
        optionOneSelected.classList.contains("select") &&
        optionTwoSelected.classList.contains("select") &&
        optionThreeSelected.classList.contains("select")
    ) {
        const closeOrder = document.getElementsByClassName("hide");
        closeOrder[0].classList.remove("hide");
    }

    function fullPrice() {
        let priceOneText = document.getElementsByClassName("select")[0].lastElementChild.innerHTML.substring(3).replace(',', '.');
        let priceTwoText = document.getElementsByClassName("select")[1].lastElementChild.innerHTML.substring(3).replace(',', '.');
        let priceThreeText = document.getElementsByClassName("select")[2].lastElementChild.innerHTML.substring(3).replace(',', '.');

        let [PriceOne, PriceTwo, PriceThree] = [parseFloat(priceOneText), parseFloat(priceTwoText), parseFloat(priceThreeText)];

        let amount = PriceOne + PriceTwo + PriceThree

        let amountHTML = document.getElementsByClassName("productSelected")[3].lastElementChild;
        amountHTML.innerHTML = amount.toFixed(2).replace('.', ',');
        finalPrice = amountHTML.innerHTML

    }
    fullPrice()

    function chanceValues() {

        function productOne() {
            // NOME DO ALIMENTO
            dish = document.getElementsByClassName("select")[0].children[1].innerHTML;
            let dishOrder = document.getElementsByClassName("productSelected")[0].children[0];
            dishOrder.textContent = dish
            // preco do alimento
            let priceDish = document.getElementsByClassName("select")[0].children[3].innerHTML;
            let priceDishOrder = document.getElementsByClassName("productSelected")[0].children[1];
            priceDishOrder.textContent = priceDish
        }
        productOne()

        // SECOUND ITEM
        function productTwo() {
            // NOME DO ALIMENTO
            drink = document.getElementsByClassName("select")[1].children[1].innerHTML;
            let drinkOrder = document.getElementsByClassName("productSelected")[1].children[0];
            drinkOrder.textContent = drink;

            let priceDink = document.getElementsByClassName("select")[1].children[3].innerHTML;
            let priceDrinkOrder = document.getElementsByClassName("productSelected")[1].children[1];
            priceDrinkOrder.textContent = priceDink;
        }
        productTwo()

        function productThree() {
            // NOME DO ALIMENTO
            dessert = document.getElementsByClassName("select")[2].children[1].innerHTML;
            let dessertOrder = document.getElementsByClassName("productSelected")[2].children[0];
            dessertOrder.textContent = dessert;

            let priceDessert = document.getElementsByClassName("select")[2].children[3].innerHTML;
            let priceDessertOrder = document.getElementsByClassName("productSelected")[2].children[1];
            priceDessertOrder.textContent = priceDessert;
        }

        productThree()

    }

    chanceValues()

}

function request(button) {
    const buttonRequest = document.getElementsByClassName("request")

    let textRequest = `Olá, gostaria de fazer o pedido: - Prato: ${dish} - Bebida: ${drink} - Sobremesa: ${dessert} Total: R$ ${finalPrice}`

    encodeURI(textRequest)

    window.location.href = `https://api.whatsapp.com/send?phone=5532984192494&text=${textRequest}`;
}

function cancel(button) {
    const cancelButton = document.getElementsByClassName("confirmation");
    cancelButton[0].classList.add("hide");
}