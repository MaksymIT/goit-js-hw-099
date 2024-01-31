const formCheck = document.querySelector(".feedback-form");
formCheck.addEventListener("input", onFormInput);
const STORAGE_KEY = "feedback-form-state";
const emailInput = formCheck.querySelector('input[type="email"]');
const messageTextarea = formCheck.querySelector('textarea');

// Під час завантаження сторінки перевіряємо стан сховища
window.addEventListener('load', function () {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        emailInput.value = email;
        messageTextarea.value = message;
    }
});

// Під час сабміту форми очищаємо сховище і поля форми, виводимо дані у консоль
formCheck.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageTextarea.value
    };

    console.log(formData);

    // Очищаємо сховище та поля форми
    localStorage.removeItem(STORAGE_KEY);
    formCheck.reset();
});

// Відслідковуємо зміни в полях форми та зберігаємо дані у локальне сховище
function onFormInput(event) {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};