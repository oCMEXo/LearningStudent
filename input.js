const INPUT = document.getElementById("Date");
const TIME = document.getElementById("Time");
const NAME = document.getElementById("NAme");


function updateColor() {
    if (INPUT.value || TIME.value || NAME.value) {
        INPUT.style.color = 'black';
        TIME.style.color = 'black';
        NAME.style.color = 'black';
    } else {
        INPUT.style.color = 'gray';
        TIME.style.color = 'gray';
        NAME.style.color = 'gray';
    }
}

NAME.addEventListener('change', updateColor);


document.getElementById("NAme").addEventListener("input", function (event) {
    const progressbar = document.getElementById("bar");
    const progressText = document.getElementById("Complated");
    const number_Event = document.getElementById("number_Event");
    const inputFile = this

    if (inputFile.value.trim() !== '') {
        progressbar.style.width = '30%'; // Обновляем ширину прогресс-бара
        number_Event.textContent = '2';
        progressText.textContent = 'Completed 33%'; // Обновляем текст прогресса
    } else {
        progressbar.style.width = '30%';
        number_Event.textContent = '2';
        progressText.textContent = 'Completed 33%';
    }

});
document.getElementById("NAme",).addEventListener("input", function (event) {
    const progressbar = document.getElementById("bar");
    const progressText = document.getElementById("Complated");
    const number_Event = document.getElementById("number_Event");
    const inputFile = this

    if (inputFile.value.trim() !== '') {
        progressbar.style.width = '30%'; // Обновляем ширину прогресс-бара
        number_Event.textContent = '2';
        progressText.textContent = 'Completed 33%'; // Обновляем текст прогресса
    } else {
        progressbar.style.width = '30%';
        number_Event.textContent = '2';
        progressText.textContent = 'Completed 33%';
    }

});

document.getElementById("Date",).addEventListener("input", function (event) {
    const progressbar = document.getElementById("bar");
    const progressText = document.getElementById("Complated");
    const number_Event = document.getElementById("number_Event");
    const inputFile = this

    if (inputFile.value.trim() !== '') {
        progressbar.style.width = '60%'; // Обновляем ширину прогресс-бара
        number_Event.textContent = '3';
        progressText.textContent = 'Completed 66%'; // Обновляем текст прогресса
    } else {
        progressbar.style.width = '60%';
        number_Event.textContent = '3';
        progressText.textContent = 'Completed 66%';
    }

});

document.getElementById("Time",).addEventListener("input", function (event) {
    const progressbar = document.getElementById("bar");
    const progressText = document.getElementById("Complated");
    const number_Event = document.getElementById("number_Event");
    const inputFile = this

    if (inputFile.value.trim() !== '') {
        progressbar.style.width = '100%'; // Обновляем ширину прогресс-бара
        number_Event.textContent = '3';
        progressText.textContent = 'Completed 100%'; // Обновляем текст прогресса
    } else {
        progressbar.style.width = '100%';
        number_Event.textContent = '3';
        progressText.textContent = 'Completed 100%';
    }

});
