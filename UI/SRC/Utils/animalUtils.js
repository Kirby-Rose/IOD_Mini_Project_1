function addCard() {
  const template = document
    .getElementById("animalCardsTemplate")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = "My Card Title";
  template.querySelector(".card-text").innerText = "lorem ipsum ble bla";

  document.querySelector("#animalCards").appendChild(template);
}
addCard();
