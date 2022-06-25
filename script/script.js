//объявление переменны для работы с попапами(open/close/edit/add)

const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonAddPlace = document.querySelector(".profile__button-add");
const popupUserInfo = document.querySelector(".popup-user-info");
const popupPlaceAdd = document.querySelector(".popup-place-add");
const buttonCloseUserInfo = document.querySelector('[name="close-user-info"]');
const buttonClosePlacePopup = document.querySelector(
  '[name="close-place-add"]'
);

//функции открытия/закрытия попапов

buttonAddPlace.addEventListener("click", function (popupOpenedClosed) {
  popupPlaceAdd.classList.add("popup_opened");
});

buttonClosePlacePopup.addEventListener("click", function (popupOpenedClosed) {
  popupPlaceAdd.classList.remove("popup_opened");
});

buttonEditProfile.addEventListener("click", function (popupOpenedClosed) {
  popupUserInfo.classList.add("popup_opened");
});

buttonCloseUserInfo.addEventListener("click", function (popupOpenedClosed) {
  popupUserInfo.classList.remove("popup_opened");
});

//объявление переменных для формы "Редактировать профиль"

const formUserInfoElement = document.querySelector('[name="user-info"]');
const userNameInput = document.querySelector("#name");
const UserWorkInput = document.querySelector("#work");

//функция редактирования профиля

function formSubmitHandler(event) {
  event.preventDefault();

  const nameInput = userNameInput.value;
  const workInput = UserWorkInput.value;

  const profileName = document.querySelector(".profile__name");
  const profileWork = document.querySelector(".profile__work");

  profileName.textContent = userNameInput.value;
  profileWork.textContent = UserWorkInput.value;

  popupUserInfo.classList.remove("popup_opened");
}

formUserInfoElement.addEventListener("submit", formSubmitHandler);

//объявление переменных для 6 карточек

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardsList = document.querySelector(".cards__items");
const cardTemplate = document.querySelector("#card-template").content;

//функция добавления 6 карточек на страницу

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".cards__image").src = element.link;
  cardElement.querySelector(".cards__place-text").textContent = element.name;

  cardsList.append(cardElement);
});

//объявление перменных для добавления пользовательской карточкм на страницу

const cardsContainer = document.querySelector(".cards__items");
const submitButtonPlace = document.querySelector('[name="place-add"]');

//функция добавления пользовательской карточки на страницу

function addCard(evt) {
  evt.preventDefault();

  const imgPlace = document.querySelector('[name="place-link"]');
  const namePlace = document.querySelector('[name="place-name"]');

  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    `<li class="cards__item">
  <img src="${imgPlace.value}" alt="картинка" class="cards__image" />
  <div class="cards__place-container">
    <h2 class="cards__place-text">${namePlace.value}</h2>
    <button type="button" name="like" class="cards__button-like"></button>
  </div>
</li>`
  );

  popupPlaceAdd.classList.remove("popup_opened");
}

submitButtonPlace.addEventListener("submit", addCard);


