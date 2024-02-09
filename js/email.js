document.addEventListener('DOMContentLoaded', function() {

    // LOADER LOGIC
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            redirectToThanks()
        }
        else if (xhr.status === 500) {
            handleError()
        }
        resetForm()

        // document.getElementById("numberForm").style.display="none"
    };
    xhr.onerror = function() {
        handleError()
    };
    xhr.addEventListener("loadstart", function() {
        document.getElementById("loader").classList.add('loading');
        document.getElementById("loader-content").classList.add('loading-content');
    });
    xhr.addEventListener("loadend", function() {
        document.getElementById("loader").classList.remove('loading');
        document.getElementById("loader-content").classList.remove('loading-content');
    });

    // EMAIL LOGIC
    var currentForm = null;

    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents default form submit

            currentForm = event.target;
            sendEmail()
        });
    })

    function sendEmail() {
        let nameInput = currentForm.querySelectorAll('input[name="name"]')[0];
        let withName = nameInput !== undefined;
        let phoneInput = currentForm.querySelectorAll('input[name="phone"]')[0];

        if (withName && nameInput.value.length === 0) {
            alert('Пожалуйста, введите ваше имя!');
            return;
        }

        if (!checkPhoneNumberInputSize(phoneInput.value)) {
            alert('Неверный телефонный номер! Недостаточное количество цифр!');
            return;
        }

        let formData = {"phoneNumber": phoneInput.value};

        if (withName) {
            formData.name = nameInput.value;
        }

        xhr.open('POST', getMailerUrl());
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(formData));
    }

    function resetForm() {
        let nameInput = currentForm.querySelectorAll('input[name="name"]')[0];
        let withName = nameInput !== undefined;
        let phoneInput = currentForm.querySelectorAll('input[name="phone"]')[0];

        if (withName) {
            nameInput.value = null
        }

        phoneInput.value = null

        if (currentForm.classList.contains('modalContent')) {
            currentForm.querySelectorAll('#closeModal')[0].click()
        }
    }

    function handleError() {
        console.error('Error:', xhr.response);
        alert('Произошла какая-то ошибка. Мы обязательно ее решим! ' +
            'Просим вас связаться с нами по почте - ms7057555277@yandex.ru');
    }

    function redirectToThanks() {
        let aLink = document.createElement('a');
        aLink.href = "./thanks.html"
        aLink.click()
    }

    function checkPhoneNumberInputSize(phoneNumber) {
        return phoneNumber.length === 18;
    }

    function getMailerUrl() {
        return (location.hostname === "localhost" || location.hostname === "127.0.0.1") ?
            "http://localhost:63342/new_target/mailer.php" :
            "https://estetika.agency/mailer.php";
    }
});