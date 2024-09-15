//
// // форма отправления данных на финальную страницу
// const form = document.getElementById('form');
// const FormFields  = form.element();
//
// const submitBtn = document.querySelector('[type="submit"]');
//
// submitBtn.addEventListener('click', clearAll)
//
//
// for(let i = 0; i < FormFields; i++){
//     FormFields[i].addEventListener('change', chahgeHalder)
// }
//
//
// function clearAll() {
//     localStorage.clear();
// }
//
// function chahgeHalder() {
//     if( this.type !== 'checkbox'){
//         console.log( this.name, this.value)
//     }else {
//         console.log( this.name, this.checked)
//     }
// }
//
// function formatPhoneNumber(event) {
//     let x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//     event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// }
//
// // Получение элементов по ID
// const number = document.getElementById('phone');
// const number2 = document.getElementById('phoneS');
// const number3 = document.getElementById('phoneThree');
// const number4 = document.getElementById('phoneSThree');
//
// // Привязка функции-обработчика к событиям input обоих элементов
// number.addEventListener('input', formatPhoneNumber);
// number2.addEventListener('input', formatPhoneNumber);
// number3.addEventListener('input', formatPhoneNumber);
// number4.addEventListener('input', formatPhoneNumber);
//
//
//
// document.getElementById('currency').addEventListener('input', function (event) {
//     let value = event.target.value.replace(/[^0-9.]/g, ''); // Удаление всех символов, кроме цифр и точки
//     if (value) {
//         value = parseFloat(value).toFixed(2); // Преобразование в число с двумя десятичными знаками
//         event.target.value = '$' + value; // Добавление символа доллара
//     } else {
//         event.target.value = '$';
//     }
// });
//
// // Добавление начального значения $ при фокусе на поле ввода, если оно пустое
// document.getElementById('currency').addEventListener('focus', function (event) {
//     if (event.target.value === '') {
//         event.target.value = '$';
//     }
// });
//
// // Удаление начального значения $ при потере фокуса, если введено только $
// document.getElementById('currency').addEventListener('blur', function (event) {
//     if (event.target.value === '$') {
//         event.target.value = '';
//     }
// });
//
//
// document.getElementById('add-button').addEventListener('click', function() {
//     // Клонирование поля
//     const formContainer = document.getElementById('form-container');
//     const field = document.querySelector('.field');
//     const clonedField = field.cloneNode(true);
//
//     // Очистка значений в новом клонированном поле
//     clonedField.querySelectorAll('input').forEach(input => {
//         if (input.type !== 'checkbox') {
//             input.value = '';
//         } else {
//             input.checked = false;
//         }
//     });
//
//     // Добавление клонированного поля в контейнер
//     formContainer.appendChild(clonedField);
// });
//
// document.getElementById('submit-button').addEventListener('click', function() {
//     const fields = document.querySelectorAll('.field');
//     const output = document.getElementById('output');
//
//     // Очистка предыдущих данных
//     output.innerHTML = '';
//
//     // Сбор и вывод значений
//     fields.forEach((field, index) => {
//         const values = Array.from(field.querySelectorAll('input')).map(input => {
//             if (input.type === 'PAP') {
//                 return input.checked ? 'Checked' : 'Unchecked';
//             }
//             return input.value.trim();
//         });
//
//         const div = document.createElement('div');
//         div.textContent = `Field ${index + 1}: ${values.join(', ')}`;
//         output.appendChild(div);
//     });
// });
//
//
// $(document).ready(function (){
//     //открытие модал окна
//     $('#addPhysicianBtn').click(function () {
//         $('#addPhysicianModal').show();
//     });
//
//     //закрытие модал окна
//     $('.close').click(function() {
//         $('#addPhysicianModal').hide();
//     });
//
//     //добавление новой строки в таблицу
//     $('#addPhysicianForm').submit(function(e) {
//         e.preventDefault();
//
//         let name = $('#name').val();
//         let phone = $('#phone').val();
//         let budget = $('#budget').val();
//         let contact = $('#contact').val();
//         let pap = $('#pap').is(':checked') ? '✔' : '';
//         let fax = $('#fax').is(':checked') ? '✔' : '';
//         let imaging = $('#imaging').val();
//         let preferred = $('#preferred').val();
//
//         $('#table #tbody').append(`
//                // <tr>
//                //          <td><input type="checkbox"></td>
//                //          <td data-label="Contact Name">${name}</td>
//                //          <td data-label="Contact Phone">${phone}</td>
//                //          <td data-label="Budget">$${budget}</td>
//                //          <td data-label="Contact">${contact}</td>
//                //          <td data-label="PAP">${pap}</td>
//                //          <td data-label="FAX">${fax}</td>
//                //          <td data-label="Imaging">${imaging}</td>
//                //          <td data-label="Preferred">${preferred}</td>
//                      </tr>
//         `);
//
//         // Очистка формы и закрытие модального окна
//         $('#addPhysicianForm')[0].reset();
//         $('#addPhysicianModal').hide();
//     });
//
//     // Подсветка редактируемой ячейки
//     $('#table').on('click', 'td', function() {
//         $(this).addClass('editing').attr('contenteditable', 'true').focus();
//     });
//
// })

$(document).ready(function() {
    // Открытие модального окна
    $('#addPhysicianBtn').click(function() {
        $('#addPhysicianModal').show();
    });

    // Закрытие модального окна
    $('.close').click(function() {
        $('#addPhysicianModal').hide();
    });

    // Добавление новой строки в таблицу
    $('#addPhysicianForm').submit(function(e) {
        e.preventDefault();

        let name = $('#name').val();
        let phone = $('#phone').val();
        let budget = $('#budget').val();
        let contact = $('#contact').val();
        let pap = $('#pap').is(':checked') ? '✔' : '';
        let fax = $('#fax').is(':checked') ? '✔' : '';
        let imaging = $('#imaging').val();
        let preferred = $('#preferred').val();

        $('#table tbody').append(`
                    <tr>
                        <td><input type="checkbox"></td>
                        <td data-label="Contact Name">${name}</td>
                        <td data-label="Contact Phone">${phone}</td>
                        <td data-label="Budget">$${budget}</td>
                        <td data-label="Contact">${contact}</td>
                        <td data-label="PAP">${pap}</td>
                        <td data-label="FAX">${fax}</td>
                        <td data-label="Imaging">${imaging}</td>
                        <td data-label="Preferred">${preferred}</td>
                    </tr>
                `);

        // Очистка формы и закрытие модального окна
        $('#addPhysicianForm')[0].reset();
        $('#addPhysicianModal').hide();
    });

    // Подсветка редактируемой ячейки
    $('#table').on('click', 'td', function() {
        $(this).addClass('editing').attr('contenteditable', 'true').focus();
    });

    $('#table').on('blur', 'td', function() {
        $(this).removeClass('editing').removeAttr('contenteditable');
    });
});