let optionOneSelected = null

function selectProductOne(option) {
    if (optionOneSelected !== null) {
        optionOneSelected.classList.remove("select");
    }

    optionOneSelected = option
    optionOneSelected.classList.add("select")
}

let optionTwoSelected = null


function selectProductTwo(option) {
    if (optionTwoSelected !== null) {
        optionTwoSelected.classList.remove("select");
    }

    optionTwoSelected = option
    optionTwoSelected.classList.add("select")
}

let optionThreeSelected = null

function selectProductThree(option) {
    if (optionThreeSelected !== null) {
        optionThreeSelected.classList.remove("select");
    }

    optionThreeSelected = option
    optionThreeSelected.classList.add("select")
}

if (optionOneSelected.classList.contains("select") && optionTwoSelected.classList.contains("select") && optionThreeSelected.classList.contains("select")) {
    let button = document.getElementsByTagName("button")
    button[0].classList.add("select")
}

