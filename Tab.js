

const form = document.getElementById('form');
const FormFields  = form.element();

const submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener('click', clearAll)


for(let i = 0; i < FormFields; i++){
    FormFields[i].addEventListener('change', chahgeHalder)
}


function clearAll() {
    localStorage.clear();
}

function chahgeHalder() {
    if( this.type !== 'checkbox'){
        console.log( this.name, this.value)
    }else {
        console.log( this.name, this.checked)
    }
}

function formatPhoneNumber(event) {
    let x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}

// Получение элементов по ID
const number = document.getElementById('phone');
const number2 = document.getElementById('phoneS');
const number3 = document.getElementById('phoneThree');
const number4 = document.getElementById('phoneSThree');

// Привязка функции-обработчика к событиям input обоих элементов
number.addEventListener('input', formatPhoneNumber);
number2.addEventListener('input', formatPhoneNumber);
number3.addEventListener('input', formatPhoneNumber);
number4.addEventListener('input', formatPhoneNumber);



document.getElementById('currency').addEventListener('input', function (event) {
    let value = event.target.value.replace(/[^0-9.]/g, ''); // Удаление всех символов, кроме цифр и точки
    if (value) {
        value = parseFloat(value).toFixed(2); // Преобразование в число с двумя десятичными знаками
        event.target.value = '$' + value; // Добавление символа доллара
    } else {
        event.target.value = '$';
    }
});

// Добавление начального значения $ при фокусе на поле ввода, если оно пустое
document.getElementById('currency').addEventListener('focus', function (event) {
    if (event.target.value === '') {
        event.target.value = '$';
    }
});

// Удаление начального значения $ при потере фокуса, если введено только $
document.getElementById('currency').addEventListener('blur', function (event) {
    if (event.target.value === '$') {
        event.target.value = '';
    }
});
