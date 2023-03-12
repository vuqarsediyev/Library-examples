const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchChoices: false,
    searchEnabled: false,
    placeholder: true,
    placeholderValue: 'Материал',
    itemSelectText: ''
});

//Map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.755409, 37.611769],
        controls: [],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([55.755409, 37.611769], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin-for-map.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
};

//Custom scrollbar

new SimpleBar(document.querySelector('.custom-scrollbar'));

//Validate

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7  (999) 999-99-99");

im.mask(selector);

new JustValidate('#form', {
    rules: {
        name: {
            required: true,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            },
        },
        mail: {
            required: true,
            email: true,

        },
    },
    messages: {
        name: 'Вы не ввели имя',
        tel: 'Вы не ввели телефон',
        mail: 'Вы не ввели e-mail'
    }, 
});