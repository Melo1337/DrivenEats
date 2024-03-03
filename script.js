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
        let button = document.getElementsByTagName("button");
        button[0].classList.add("buttonSelect");
    }
}

function closeOrder(button) {
    
}