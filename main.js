// Cardholder Name
let nameCard = document.querySelector(".card_details-name");
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector(".form__cardholder--error");

//Card Number

let numberCard = document.querySelector('.frontcard__number');
let numberInput = document.querySelector('#cardnumber');
let numberErrorDiv = document.querySelector('.form__cardnumber--error');

// MM

let monthCard = document.querySelector(".card__month");
let monthInput = document.querySelector('#cardmonth');
let monthErrorDiv = document.querySelector('.form__input--mm--error');


// YY

let yearCard = document.querySelector('.card_year')
let yearInput = document.querySelector('#cardyear');
let yearErrorDiv = document.querySelector('.form__input--yy--error')

 //CVC

 let cvcCard = document.querySelector('.backcard__cvc')
 let cvcInput = document.querySelector('#cardcvc')
 let cvcErrorDiv = document.querySelector ('.form__input--cc--error')

 //Thanks section

 let thanksSection = document.querySelector('.thanks-section');

 //forumulario div

 let formDiv = document.querySelector('.form');

//Ingreso dinamico del nombre
nameInput.addEventListener("input", ()=>{
    if(nameInput.value == ''){
        nameCard.innerHTML = 'JANE APPLESEED'
    } else {
        nameCard.innerHTML = nameInput.value;
    }
});

//Ingreso dinamico del numero

numberInput.addEventListener('input', event=>{

    let inputValue = event.target.value;

    //actualizando graficamente la tarjeta
    numberCard.innerText = numberInput.value

    //Validando que haya una letra
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only');
    }else {
    // agregando espacios cada 4 digitos, borrando espacios ingresados por el usuario y borrando el espacio final
        numberInput.value = inputValue.replace(/\s/g, "").replace(/([0-9]{4})/g, '$1 ').trim();
        hideError(numberInput, numberErrorDiv)
    }


    //mostrando los ceros por defecto cuando no se ha ingresado nada    
    if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000';

    }

});

//ingreso dinamico del mes

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
})


//Ingreso dinamico del año

yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
})

//ingreso dinamico del cvc 
cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
})

//Boton confirm

let confirmBtn = document.querySelector('.form__submit')
confirmBtn.addEventListener('click', event=>{
    
    event.preventDefault();
    console.log(parseInt(monthInput.value))
    
    //validar name
    verifyisFilled(nameInput, nameErrorDiv);
    //validar number
    verifyisFilled(numberInput, numberErrorDiv);

    // Validar mes
    verifyisFilled(monthInput, monthErrorDiv)

    //validar año
    verifyisFilled(yearInput, yearErrorDiv);
    //validar cvc
    verifyisFilled(cvcInput, cvcErrorDiv);
})


//funciones
function showError(divInput, divError, msgError){
    divError.innerText = msgError
    divInput.style.borderColor = 'hsl(0, 100%, 66%)'
}

function hideError(divInput, divError){
    divError.innerText = "";
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
}

function verifyisFilled(divInput, divError){

    if(divInput.value.length > 0){
        showError(divInput, divError, "", false);
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    } else {
        showError(divInput, divError, "cant't be blank")
    }

}





