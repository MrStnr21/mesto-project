const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const popupOpened = document.querySelector('.popup');
const popupClosed = document.querySelector('.popup');


buttonEdit.addEventListener('click', function (popupOpen) {
   if (popupOpened) {popupOpened.classList.add('popup_opened')}
})

buttonClose.addEventListener('click', function (popupClose) {
    if (popupClosed) {popupOpened.classList.remove('popup_opened')}
})

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const formUserInfoElement = document.querySelector('.popup__container');
const userNameInput = document.querySelector('#name');
const UserWorkInput = document.querySelector('#work');

function formSubmitHandler (event) {
    event.preventDefault();

    const nameInput = userNameInput.value;
    const workInput = UserWorkInput.value;
    
    const profileName = document.querySelector('.profile__name');
    const profileWork = document.querySelector('.profile__work');
    
    profileName.textContent = userNameInput.value;
    profileWork.textContent = UserWorkInput.value;
    
    popupOpened.classList.remove('popup_opened');
}

formUserInfoElement.addEventListener('submit', formSubmitHandler);

const cardsList = document.querySelector('.cards__items')
const cardTemplate = document.querySelector('#card-template').content;

initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.cards__image').src = element.link;
    cardElement.querySelector('.cards__place-text').textContent = element.name;

    cardsList.append(cardElement);
})