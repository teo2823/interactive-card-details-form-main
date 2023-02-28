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

// Secciones Formulario y Thanks
let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.thanks-section');

//Boton confirm
let confirmBtn = document.querySelector('.form__submit')

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;


confirmBtn.addEventListener('click', event=>{
    
    event.preventDefault();
    console.log(parseInt(monthInput.value))
    
    //validar name
    verifyisFilled(nameInput, nameErrorDiv);
    //validar number
    if(verifyisFilled(numberInput, numberErrorDiv) == true){
        if(numberInput.value.length == 19){
            showError(numberInput, numberErrorDiv, ' ', false);
        } else {
            showError(numberInput, numberErrorDiv, 'Wrong number');
        }
    }

    // Validar mes
    verifyisFilled(monthInput, monthErrorDiv)

    //validar año
    if(verifyisFilled(yearInput, yearErrorDiv)){
        if(parseInt(yearInput.value)> 22 && parseInt(yearInput.value)<= 27){
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        }else{
            showError(yearInput, yearErrorDiv, 'Wrong Year');
            yearValidation = false;
        }
    }
    
    
    //validar cvc
    if(verifyisFilled(cvcInput, cvcErrorDiv)){
        if(cvcInput.value.length == 3 ){
            showError(cvcInput, cvcErrorDiv, '', false);
            cvcValidation = true;
        }else{
            showError(cvcInput, cvcErrorDiv, 'Wrong CVC');
            cvcValidation = false;
        }
    }

    if(nameValidation == true && numberValidation == true && monthValidation == true  && yearValidation == true  && cvcValidation == true){
        formSection.style.display = 'none';
        thanksSection.style.display = 'block';
    }
})


//funciones
function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    }else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
}

function verifyisFilled(divInput, divError){

    if(divInput.value.length > 0){
        showError(divInput, divError, "", false);

    } else {
        showError(divInput, divError, "cant't be blank")
    }

}

function validateLetters(input, divError){
    // Validando que haya una letra,
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, numbers only');
    }else{
        showError(input, divError, '', false);
    }
}





