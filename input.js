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

let currentStep = 1;
const totalSteps = 3; // Общее количество шагов
const bar = document.getElementById('bar');
const numberEvent = document.getElementById('number_Event');
const completedText = document.getElementById('Complated');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

// Массив для хранения введённых данных
const eventData = [
    {
        name: '', date: '', time: ''
    },
    {
        name: '', date: '', time: ''
    },
    {
        name: '', date: '', time: ''
    }
];

// Функция для обновления прогресс-бара
function updateProgress() {
    // Рассчитываем процент заполненности
    const progressPercent = (currentStep / totalSteps) * 100;
    bar.style.width = progressPercent + '%';
    completedText.innerText = 'Completed ' + Math.round(progressPercent) + '%';
    numberEvent.innerText = currentStep;
}

// Функция для отображения текущего шага
function showStep(step) {
    // Загрузка данных из массива, если они есть
    document.getElementById('NAme').value = eventData[step - 1].name;
    document.getElementById('Date').value = eventData[step - 1].date;
    document.getElementById('Time').value = eventData[step - 1].time;

    // Управление видимостью кнопок
    backButton.classList.toggle('hidden', step === 1); // Скрыть кнопку "Назад" на первом шаге
    nextButton.innerText = step === totalSteps ? 'Finish' : 'Next >'; // Изменяем текст кнопки на последнем шаге

    updateProgress();
}

// Функция для сохранения данных из полей
function saveData() {
    eventData[currentStep - 1].name = document.getElementById('NAme').value;
    eventData[currentStep - 1].date = document.getElementById('Date').value;
    eventData[currentStep - 1].time = document.getElementById('Time').value;
}

// Обработчик события для кнопки "Next"
nextButton.addEventListener('click', () => {
    saveData(); // Сохраняем данные текущего шага

    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    } else {
        // Здесь можно добавить код для отправки данных на сервер или выполнения других действий
        console.log('All data submitted: ' + JSON.stringify(eventData));
    }
});

// Обработчик события для кнопки "Back"
backButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
});

// Инициализация
showStep(currentStep);


//
// function Name() {
//     return document.getElementById("NAme").addEventListener("input", function () {
//         updateProgress();
//     });
// }
//
// // Функция для отслеживания поля DATE
// function Date() {
//     return document.getElementById("Date").addEventListener("input", function () {
//         updateProgress();
//     });
// }
//
// function Time() {
//     return document.getElementById("Time").addEventListener("input", function () {
//         updateProgress();
//     })
// }
//
// // Универсальная функция для обновления прогресса
// function updateProgress() {
//     const progressbar = document.getElementById("bar");
//     const progressText = document.getElementById("Complated");
//     const number_Event = document.getElementById("number_Event");
//
//     const nameValue = document.getElementById("NAme").value.trim();
//     const dateValue = document.getElementById("Date").value.trim();
//     const timeValue = document.getElementById("Time").value.trim();
//
//     // Проверяем состояние полей и обновляем прогресс
//     if (timeValue && dateValue && nameValue) {
//         progressbar.style.width = '100%';
//         number_Event.textContent = '3';
//         progressText.textContent = 'Completed 100%';
//     } else if (nameValue && dateValue) {
//         progressbar.style.width = '66%';
//         number_Event.textContent = '2';
//         progressText.textContent = 'Completed 66%';
//     } else if (nameValue) {
//         progressbar.style.width = '33%';
//         number_Event.textContent = '1';
//         progressText.textContent = 'Completed 33%';
//     } else {
//         progressbar.style.width = '0%';
//         number_Event.textContent = '0';
//         progressText.textContent = 'Completed 0%';
//     }
// }
//
// // Функция для поэтапного сброса прогресса
// function stepwiseResetProgress() {
//     const nameField = document.getElementById("NAme");
//     const dateField = document.getElementById("Date");
//     const timeField = document.getElementById("Time");
//
//     // Проверяем, какое поле заполнено, и сбрасываем по очереди
//     if (timeField.value.trim() !== '') {
//         // Если заполнено поле Time, сбрасываем его
//         timeField.value = '';  // Очищаем поле Time
//         updateProgress(33);    // Обновляем прогресс до 33%
//     } else if (dateField.value.trim() !== '') {
//         // Если поле Time уже пустое, проверяем Date
//         dateField.value = '';  // Очищаем поле Date
//         updateProgress(66);    // Обновляем прогресс до 66%
//     } else if (nameField.value.trim() !== '') {
//         // Если поля Time и Date уже пустые, проверяем Name
//         nameField.value = '';  // Очищаем поле Name
//         updateProgress(100);   // Обновляем прогресс до 100%
//     }
// }
//
//
// // Инициализация кнопки "Back"
// const btnBack = document.getElementById("back");
// btnBack.addEventListener('click', stepwiseResetProgress);  // Поэтапный сброс
//
// // Вызов функций для отслеживания изменений в полях
// Time();
// Name();
// Date();


