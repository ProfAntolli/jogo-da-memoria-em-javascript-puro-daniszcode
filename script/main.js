const cards = {
  backCard: {
    id: 0,
    url: "/assets/img/back.png",
    state: true,
  },
  cardOfMione: {
    id: 1,
    url: "/assets/img/mion.jpg",
    state: false,
  },
  cardOfThreeTwo: {
    id: 2,
    url: "/assets/img/mion.jpg",
    state: false,
  },
  cardOfThree: {
    id: 3,
    url: "/assets/img/three.jpg",
    state: false,
  },
  cardOfThreeTwo: {
    id: 4,
    url: "/assets/img/three.jpg",
    state: false,
  },
};

const cardSection = document.querySelector(".card-section");

const createCards = () => {
  const cardOfThreeOne = document.createElement("img");
  const cardOfThreeTwo = document.createElement("img");
  const cardOfMiOne = document.createElement("img");
  const cardOfMioneTwo = document.createElement("img");
  const backCard = document.createElement("img");

  cardOfThreeOne.setAttribute("id", `${cards.cardOfThree.id}`);
  cardOfThreeOne.setAttribute("src", `${cards.cardOfThree.url}`);
  cardOfThreeOne.classList.add("couple");
  cardSection.appendChild(cardOfThreeOne);

  cardOfThreeTwo.setAttribute("src", `${cards.cardOfThree.url}`);
  cardOfThreeTwo.classList.add("couple");
  cardSection.appendChild(cardOfThreeTwo);

  cardOfMiOne.setAttribute("src", `${cards.cardOfMione.url}`);
  cardOfMiOne.classList.add("couple");
  cardSection.appendChild(cardOfMiOne);

  cardOfMioneTwo.setAttribute("src", `${cards.cardOfMione.url}`);
  cardOfMioneTwo.classList.add("couple");
  cardSection.appendChild(cardOfMioneTwo);

  backCard.setAttribute("src", `${cards.backCard.url}`);
  backCard.classList.add("single");
  // cardSection.appendChild(backCard);

  const image = document.querySelectorAll(".couple");

  for (const element of Object.entries(cards)) {
    console.log(
      "elemento: ",
      element,
      "estado: ",
      element[1].state,
      "imagem: ",
      element[1].url
    );

    console.log("verifyState >>>>", element[1].state);
    console.log("verifyState >>>>", element[1].url);

    image.forEach((item) => {
      item.addEventListener("click", function () {
        console.log("clicou", element[1].id);

        // if (element[1].state === false) {
        //   return (
        //     element[1].state === true, (element[1].url = "/assets/img/back.png")
        //   );
        // }
        // return;
        // for (const element of Object.entries(cards)) {
        //   console.log("creatcard ", element[1].state);
        // if (element[1].state === true) {
        //   element[1].state = false;
        //   //   console.log("entra aqui?");
        //   }
        // }
      });
    });
  }
};

createCards();
