const data = {
  greetings: [
    ["Hello", "Namaste"],
    ["Good morning", "Shubha prabhat"],
    ["Good evening", "Shubha saanjh"],
    ["How are you?", "Tapainlai kasto cha?"],
    ["I'm fine", "Ma thik chhu"],
    ["Nice to meet you", "Tapainlai bhetda khushi lagyo"],
    ["Goodbye", "Bidaa"],
    ["See you soon", "Chittaai bhetaunla"],
    ["Take care", "Dhyān rakhnu hos"],
    ["Thank you", "Dhanyabaad"]
  ],
  introductions: [
    ["What is your name?", "Tapainko naam ke ho?"],
    ["My name is...", "Mero naam ... ho"],
    ["Where are you from?", "Tapain kahaabaata aunu bhaeko ho?"],
    ["I am from...", "Ma ... baata aayeko ho"],
    ["How old are you?", "Tapain kati barsa ko hunu bho?"],
    ["I am a student", "Ma ek chhatr(a) ho"],
    ["I work as a...", "Ma ... ko roopmaa kaam garchu"],
    ["Nice to meet you", "Tapainlai bhetda khushi lagyo"],
    ["This is my friend", "Yo mero saathi ho"],
    ["I live in...", "Ma ... maa baschhu"]
  ],
  routine: [
    ["I wake up at 6", "Ma 6 baje uthchhu"],
    ["I brush my teeth", "Ma daat majhchhu"],
    ["I eat breakfast", "Ma bihanko khaja khanchhu"],
    ["I go to work", "Ma kaammaa janchhu"],
    ["I study in the evening", "Ma saanjhmaa padhchhu"],
    ["I cook food", "Ma khana pakaunchhu"],
    ["I take a shower", "Ma nuhanchhu"],
    ["I go to bed at 10", "Ma 10 baje sutchhu"],
    ["I relax at home", "Ma gharmaa aaram garchhu"],
    ["I read books", "Ma kitaab padchhu"]
  ],
  food: [
    ["I'm hungry", "Malai bhok laagyo"],
    ["I'm thirsty", "Malai tirkhaa laagyo"],
    ["I want water", "Malai paani chahinchha"],
    ["Do you have tea?", "Tapain sanga chiya chha?"],
    ["This is delicious", "Yo mitho chha"],
    ["I like spicy food", "Malai piro khana manparchha"],
    ["Vegetarian", "Shaakahari"],
    ["Meat", "Maasu"],
    ["Breakfast", "Bihanko khaja"],
    ["Dinner", "Raatko khana"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kaha chha?"],
    ["How much is the ticket?", "Ticket kati ho?"],
    ["I need a taxi", "Malai taxi chahinchha"],
    ["I want to go to...", "Ma ... jaanchhu"],
    ["Is it far?", "Yo taadha chha?"],
    ["Please stop here", "Kripaya yahaa roknu hos"],
    ["How long will it take?", "Kati samaya lagchha?"],
    ["I am lost", "Ma haraye"],
    ["Can you help me?", "Tapain malai madat garna saknuhunchha?"],
    ["I don’t understand", "Ma bujhina"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  flashcardContainer.innerHTML = "";

  data[topic].forEach(([eng, nep]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${eng}</strong><span>${nep}</span>`;
    flashcardContainer.appendChild(card);
  });
}
