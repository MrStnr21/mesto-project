// объявление переменны для работы с попапами(open/close/edit/add)

const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonAddPlace = document.querySelector(".profile__button-add");
const popupUserInfo = document.querySelector(".popup__user-info");
const popupPlaceAdd = document.querySelector(".popup__place-add");
const popupFullSizeImage = document.querySelector(".popup__fullsize-image");
const buttonCloseFullSizeImage = document.querySelector(
  '[name="close-fullsize-image"]'
);
const buttonCloseUserInfo = document.querySelector('[name="close-user-info"]');
const buttonClosePlacePopup = document.querySelector(
  '[name="close-place-add"]'
);

// функции открытия/закрытия попапов

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

// открытие/закрытие попапов

buttonEditProfile.addEventListener("click", function () {
  openPopup(popupUserInfo);
});

buttonAddPlace.addEventListener("click", function () {
  openPopup(popupPlaceAdd);
});

buttonCloseUserInfo.addEventListener("click", function () {
  closePopup(popupUserInfo);
});

buttonClosePlacePopup.addEventListener("click", function () {
  closePopup(popupPlaceAdd);
});

buttonCloseFullSizeImage.addEventListener("click", function () {
  closePopup(popupFullSizeImage);
});

// объявление переменных для формы "Редактировать профиль"

const formUserInfoElement = document.querySelector('[name="user-info"]');
const userNameInput = document.querySelector("#name");
const userWorkInput = document.querySelector("#work");
const nameInput = userNameInput.value;
const workInput = userWorkInput.value;
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
userNameInput.value = profileName.textContent;
userWorkInput.value = profileWork.textContent;

// функция редактирования профиля

function editUserInfo(event) {
  event.preventDefault();

  profileName.textContent = userNameInput.value;
  profileWork.textContent = userWorkInput.value;

  closePopup(popupUserInfo);
}

formUserInfoElement.addEventListener("submit", editUserInfo);

// объявление переменных для работы с шаблоном карточек

const cardsList = document.querySelector(".cards__items");
const cardTemplate = document.querySelector("#card-template").content.querySelector('.cards__item');

// объявление переменных для открытия попапа с картинкой

const fullSizeImage = document.querySelector(".popup__image");
const captionImage = document.querySelector(".popup__caption");


// объявление перменных для добавления пользовательской карточки на страницу

const placeAddForm = document.querySelector('[name="place-add"]');
const placeNameInput = document.querySelector('[name="place-name"]');
const placeImageInput = document.querySelector('[name="place-link"]');

// функция добавления карточек на страницу

function createCard (link, name) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".cards__image").src = link;
  cardElement.querySelector(".cards__place-text").textContent = name;
  cardElement.querySelector(".cards__image").alt = name;

  cardElement
  .querySelector(".cards__button-like")
  .addEventListener("click", function (evt) {
    evt.target.classList.toggle("cards__button-like_active");
  }); // функция лайка карточек

cardElement
  .querySelector(".cards__button-delete")
  .addEventListener("click", function (evt) {
    const card = evt.target.closest(".cards__item");
    card.remove();
  }); // функция удаления карточек

cardElement
  .querySelector(".cards__image")
  .addEventListener("click", function (evt) {
    fullSizeImage.src = link;
    captionImage.textContent = name;
    popupFullSizeImage.classList.add("popup_opened");
  }); // функция открытия попапа с картинкой

  cardsList.append(cardElement);
}

// добавление 6 карточек на страницу 

initialCards.forEach(function (element) {
  createCard (element.link, element.name);
});

// функция добавления пользовательской карточки на страницу

function addUserCard (element) {
  element.preventDefault();
  createCard(placeImageInput.value, placeNameInput.value)
  closePopup(popupPlaceAdd);
  placeImageInput.value = '';
  placeNameInput.value = '';
};

placeAddForm.addEventListener("submit", addUserCard);
