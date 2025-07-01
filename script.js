const data = {
  greetings: [
    ["Hello", "Namaste"],
    ["Good morning", "Shubha prabhat"],
    ["Good evening", "Shubha saanjh"],
    ["How are you?", "Tapaai kasto hunuhunchha?"],
    ["I'm fine", "Ma sanchai chhu"],
    ["Nice to meet you", "Tapaailaai bhetera khushi lagyo"],
    ["Goodbye", "Albida / Namaste"],
    ["See you soon", "Chittaai bhetaulaa"],
    ["See you again", "Feri bhetaulaa"], // Corrected missing bracket
    ["Take care", "Dhyān rakhnu hos"],
    ["Thank you", "Dhanyabaad"]
  ],
  introductions: [
    ["What is your name?", "Tapaaiko naam ke ho?"],
    ["My name is...", "Mero naam ... ho"],
    ["Where are you from?", "Tapain kahaa baata hunuhunchha?"],
    ["I am from...", "Ma ... baataa ho"],
    ["How old are you?", "Tapain kati barsa hunu bhayo?"],
    ["I am ... years old", "Ma ... barsa bhae"],
    ["I am a student", "Ma ek chhatr(a) ho"],
    ["what work do you do?", "tapaai ke kaam garnuhunchha?"],
    ["I am ...", "Ma ... ho"],
    ["This is my friend", "Yo mero saathi ho"],
    ["I live in...", "Ma ... maa baschhu"]
  ],
  routine: [
    ["I wake up at 6", "Ma 6 baje uthchhu"],
    ["I brush my teeth", "Ma daat majhchhu"],
    ["I eat breakfast", "Ma bihanko khaja khanchhu"],
    ["I go to work", "Ma kaam maa janchhu"],
    ["I study in the evening", "Ma saanjha maa padhchhu"],
    ["I cook food", "Ma khana pakaunchhu"],
    ["I bathe", "Ma nuhanchhu"],
    ["I sleep at 10", "Ma 10 baje sutchhu"],
    ["I relax at home", "Ma ghar maa aaram garchhu"],
    ["I read books", "Ma kitaab padchhu"]
  ],
  food: [
    ["I'm hungry", "Malai bhok laagyo"],
    ["I'm thirsty", "Malai tirkhaa laagyo"],
    ["I want water", "Malai paani chahinchha"],
    ["Do you have tea?", "Tapaai sanga chiya chha?"],
    ["This is delicious", "Yo mitho chha"],
    ["I like spicy food", "Malai piro khana manparchha"],
    ["Vegetarian", "Shaakahari"],
    ["Meat", "Maasu"],
    ["Breakfast", "Bihanko khaja"],
    ["Dinner", "Raatko khana"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kaha chha?"],
    ["How much is the ticket?", "Ticket kati ko ho?"],
    ["I need a taxi", "Malai taxi chahinchha"],
    ["I want to go to...", "Ma ... jaanchhu"],
    ["Is it far?", "Yo taadha chha?"],
    ["Please stop here", "Kripaya yahaa roknu hos"],
    ["How long will it take?", "Kati samaya lagchha?"],
    ["I am lost", "Ma haraye"],
    ["Can you help me?", "Tapaai malai madat garna saknuhunchha?"],
    ["I didn’t understand", "Maile bujhina"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "none"; // Hide topic buttons
  backButton.style.display = "block"; // Show back button

  data[topic].forEach(([eng, nep]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <strong>${eng}</strong>
        </div>
        <div class="card-back">
          <span>${nep}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
    flashcardContainer.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = ""; // Clear flashcards
  topicSelection.style.display = "flex"; // Show topic buttons
  backButton.style.display = "none"; // Hide back button
}
