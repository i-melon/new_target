// const carusel = document.querySelector('.infinity')
// const slider = document.querySelector('.slider1');
// const slides = document.querySelectorAll('.infItem');


// Получаем элементы слайдера и слайдов
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

// Дублируем слайды, чтобы создать бесконечный эффект
const clonedSlides = [...slides].map((slide) => slide.cloneNode(true));
clonedSlides.forEach((clonedSlide) => slider.appendChild(clonedSlide));

// Автоматический переход на следующий слайд каждые 5 секунд (или ваш интервал)
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    setTimeout(() => {
      slider.style.transition = '';
    }, 0);
  }
  const translateXValue = `-${currentIndex * 100}%`;
  slider.style.transform = `translateX(${translateXValue})`;
}

setInterval(nextSlide, 5000); // Измените интервал, если нужно









// let currentIndex = 0;
// const slideInterval = 1000;// Интервал между сменой слайдов (в миллисекундах)
// round = 0
// function nextSlide() {
//     if (round = 0){round = 0}
//     if (round ==0){round=1360}
//     slider.style.transitionTimingFunction = 'linear';
//     slider.style.left = -round + 'px'
// }

// setInterval(nextSlide, slideInterval);
    


counter = 0;
const slider2 = document.querySelector('.contentLine2')
document.querySelector('#next2').addEventListener('click', function(){
    counter++
    if (counter>3){counter=0}
    slider2.style.transition = 'all ease 1s'
    slider2.style.left = -400*counter + 'px'
});
document.querySelector('#prev2').addEventListener('click', function(){
    counter--
    if (counter<0){counter=3}
    slider2.style.left = -400*counter + 'px'
});



const sliderContainer3 = document.querySelector('.sliderPic');
const slider3 = document.querySelector('.slider3');
const slides3 = document.querySelectorAll('.slider3Item');

let currentIndex3 = 0;

function nextSlide3() {
  currentIndex3++;
  if (currentIndex3 >= slides3.length) {
    currentIndex3 = 0;
  }
  const translateXValue = `-${currentIndex3 * 100}%`;
  slider3.style.transform = `translateX(${translateXValue})`;
}

// Устанавливаем интервал смены слайдов
const interval3 = setInterval(nextSlide3, 3000); // Меняйте интервал, чтобы настроить скорость слайдера

// Приостанавливаем автоматический слайдер, если пользователь наводит курсор на слайдер
sliderContainer3.addEventListener('mouseenter', () => {
  clearInterval(interval3);
});

// Возобновляем автоматический слайдер, когда пользователь уводит курсор с слайдера
sliderContainer3.addEventListener('mouseleave', () => {
  interval3 = setInterval(nextSlide3, 3000); // Меняйте интервал, если необходимо
});



counter6 = 0;
const slider6 = document.querySelector('.sliderLine6')
document.querySelector('#next6').addEventListener('click', function(){
    counter6++
    if (counter6>3){counter6=0}
    slider6.style.left = -485*counter6 + 'px'
});
document.querySelector('#prev6').addEventListener('click', function(){
    counter6--
    if (counter6<0){counter6=3}
    slider6.style.left = -485*counter6 + 'px'
});

counter7 = 0;
const slider7 = document.querySelector('.sliderLine7')
document.querySelector('#next7').addEventListener('click', function(){
    counter7++
    if (counter7>3){counter7=0}
    slider7.style.left = -380*counter7 + 'px'
});
document.querySelector('#prev7').addEventListener('click', function(){
    counter7--
    if (counter7<0){counter7=3}
    slider7.style.left = -380*counter7 + 'px'
});



var dialog = document.querySelector('.dialog');
document.querySelector('#orange').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#secondMainButton').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#secondMainButtonM').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#blueButton').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('.button4').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#sixthMainButtonM').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#callme').addEventListener('click', function(){
    dialog.style.display = 'flex';
});

function closeDialog() {
    dialog.style.display = 'none'
    document.getElementById('zayavka-phone-number').value = '+77'
}


document.querySelector('#exitButton').addEventListener('click', function(){
    dialog.style.display = 'none';
});



counterM = 0;
const slider2M = document.querySelector('.contentLine2M')
// document.querySelector('#next2M').addEventListener('click', function(){
//     counterM++
//     if (counterM>3){counterM=0}
//     slider2M.style.transition = 'all ease 1s'
//     slider2M.style.left = -400*counterM + 'px'
// });
// document.querySelector('#prev2M').addEventListener('click', function(){
//     counterM--
//     if (counterM<0){counterM=3}
//     slider2M.style.left = -400*counterM + 'px'
// });

counter6M = 0;
const slider6M = document.querySelector('.sliderLine6M')
// document.querySelector('#next6M').addEventListener('click', function(){
//     counter6M++
//     if (counter6M>3){counter6M=0}
//     slider6M.style.left = -372*counter6M + 'px'
// });
// document.querySelector('#prev6M').addEventListener('click', function(){
//     counter6M--
//     if (counter6M<0){counter6M=3}
//     slider6M.style.left = -372*counter6M + 'px'
// });

function phoneNumberMask(event) {
    var theEvent = event || window.event;
    let input = event.target
    let inputValue = input.value

    if (inputValue.startsWith('+7')) {
        if (inputValue.length === 2) {
            input.value = null
        }
        else if (inputValue.length === 12) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    else if (inputValue.length === 1) {
        input.value = "+7" + inputValue
    }
}

function numberValidate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

async function sendEmail() {
    let phoneNumber = document.getElementById('zayavka-phone-number').value;

    if (phoneNumber.length === 12) {
        if (phoneNumber.startsWith('+77')) {
            const data = {phoneNumber};

            const url = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ?
                "http://localhost:3000/send-email" :
                "https://estetika.agency/send-email"

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            
                if (response.ok) {
                    alert('Спасибо за вашу заявку!')
                    console.log('Email sent successfully');
                    closeDialog()
                } 
                else {
                    console.log('Email sending failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла какая-то ошибка. Мы уже ее решаем!');
            }
        }
        else {
            alert('Номер должен начинаться с +77!');
        }
    }
    else {
        alert('Неверный телефонный номер!')
    }

}
