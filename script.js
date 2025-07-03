const data = {
  greetings: [
    ["Hello", "Namaste", "नमस्ते"],
    ["Good morning", "Shubha prabhat", "शुभ प्रभात"],
    ["Good evening", "Shubha saanjh", "शुभ साँझ"],
    ["How are you?", "Tapaai kasto hunuhunchha?", "तपाईं कस्तो हुनुहुन्छ?"],
    ["I'm fine", "Ma sanchai chhu", "म सन्चै छु"],
    ["Nice to meet you", "Tapaailaai bhetera khushi lagyo", "तपाईंलाई भेटेर खुशी लाग्यो"],
    ["Goodbye", "Albida / Namaste", "अल्विदा / नमस्ते"],
    ["See you soon", "Chittai bhetaulaa", "छिट्टै भेटौंला"],
    ["See you again", "Feri bhetaulaa", "फेरि भेटौंला"],
    ["Take care", "Dhyān rakhnu hos", "ध्यान राख्नुहोस्"],
    ["Thank you", "Dhanyabaad", "धन्यवाद"]
  ],
  introductions: [
    ["What is your name?", "Tapaaiko naam ke ho?", "तपाईंको नाम के हो?"],
    ["My name is...", "Mero naam ... ho", "मेरो नाम ... हो"],
    ["Where are you from?", "Tapain kahaa baata hunuhunchha?", "तपाईं कहाँबाट हुनुहुन्छ?"],
    ["I am from...", "Ma ... baata ho", "म ... बाट हो"],
    ["How old are you?", "Tapain kati barsa hunu bhayo?", "तपाईं कति वर्ष हुनुभयो?"],
    ["I am ... years old", "Ma ... barsa bhae", "म ... वर्ष भएँ"],
    ["I am a student", "Ma ek chhatra ho", "म एक छात्र हुँ"],
    ["What work do you do?", "Tapaai ke kaam garnuhunchha?", "तपाईं के काम गर्नुहुन्छ?"],
    ["I am ...", "Ma ... ho", "म ... हुँ"],
    ["This is my friend", "Yo mero saathi ho", "यो मेरो साथी हो"],
    ["I live in...", "Ma ... maa baschhu", "म ... मा बस्छु"]
  ],
  routine: [
    ["I wake up at 6", "Ma 6 baje uthchhu", "म ६ बजे उठ्छु"],
    ["I brush my teeth", "Ma daat majhchhu", "म दाँत माझ्छु"],
    ["I eat breakfast", "Ma bihanko khaja khanchhu", "म बिहानको खाजा खान्छु"],
    ["I go to work", "Ma kaam maa janchhu", "म काममा जान्छु"],
    ["I study in the evening", "Ma saanjha maa padhchhu", "म साँझमा पढ्छु"],
    ["I cook food", "Ma khana pakaunchhu", "म खाना पकाउँछु"],
    ["I bathe", "Ma nuhanchhu", "म नुहाउँछु"],
    ["I sleep at 10", "Ma 10 baje sutchhu", "म १० बजे सुत्छु"],
    ["I relax at home", "Ma ghar maa aaram garchhu", "म घरमा आराम गर्छु"],
    ["I read books", "Ma kitaab padchhu", "म किताब पढ्छु"]
  ],
  food: [
    ["I'm hungry", "Malai bhok laagyo", "मलाई भोक लाग्यो"],
    ["I'm thirsty", "Malai tirkhaa laagyo", "मलाई तिर्खा लाग्यो"],
    ["I want water", "Malai paani chahinchha", "मलाई पानी चाहिन्छ"],
    ["Do you have tea?", "Tapaai sanga chiya chha?", "तपाईं संग चिया छ?"],
    ["This is delicious", "Yo mitho chha", "यो मिठो छ"],
    ["I like spicy food", "Malai piro khana manparchha", "मलाई पिरो खाना मनपर्छ"],
    ["Vegetarian", "Shaakahari", "शाकाहारी"],
    ["Meat", "Maasu", "मासु"],
    ["Breakfast", "Bihanko khaja", "बिहानको खाजा"],
    ["Dinner", "Raatko khana", "रातको खाना"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kaha chha?", "बस स्टेशन कहाँ छ?"],
    ["How much is the ticket?", "Ticket kati ko ho?", "टिकट कतिको हो?"],
    ["I need a taxi", "Malai taxi chahinchha", "मलाई ट्याक्सी चाहिन्छ"],
    ["I want to go to...", "Ma ... jaanchhu", "म ... जान्छु"],
    ["Is it far?", "Yo taadha chha?", "यो टाढा छ?"],
    ["Please stop here", "Kripaya yahaa roknu hos", "कृपया यहाँ रोक्नुहोस्"],
    ["How long will it take?", "Kati samaya lagchha?", "कति समय लाग्छ?"],
    ["I am lost", "Ma haraye", "म हराएँ"],
    ["Can you help me?", "Tapaai malai madat garna saknuhunchha?", "तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?"],
    ["I didn’t understand", "Maile bujhina", "मैले बुझिन"]
  ],
  shopping: [
    ["How much is this?", "Yesko kati parchha?", "यसको कति पर्छ?"],
    ["It's too expensive", "Yo dherai mahango bhayo", "यो धेरै महँगो भयो"],
    ["Lower the price", "Mulya ghataunus", "मूल्य घटाउनुहोस्"],
    ["I will take it", "Ma yo linchhu", "म यो लिन्छु"],
    ["I'm just looking", "Ma herdaimaatra chhu", "म हेर्दैमात्र छु"],
    ["Do you have another color?", "Arko rang maa chha?", "अर्को रङमा छ?"],
    ["Where can I pay?", "Ma kaha tirna sakchhu?", "म कहाँ तिर्न सक्छु?"]
  ],
  numbers: [
    ["One", "Ek", "एक"],
    ["Two", "Dui", "दुई"],
    ["Three", "Tin", "तीन"],
    ["Four", "Chaar", "चार"],
    ["Five", "Paanch", "पाँच"],
    ["Six", "Chha", "छ"],
    ["Seven", "Saat", "सात"],
    ["Eight", "Aath", "आठ"],
    ["Nine", "Nau", "नौ"],
    ["Ten", "Das", "दस"],
    ["One Hundred", "Ek Saye", "एक सय"]
  ],
  family: [
    // --- Original Vocabulary ---
    ["Family", "Pariwaar", "परिवार"],
    ["Father", "Buba", "बुबा"],
    ["Mother", "Aama", "आमा"],
    ["Brother (elder/younger)", "Daai / Bhaai", "दाइ / भाइ"],
    ["Sister (elder/younger)", "Didi / Bahini", "दिदी / बहिनी"],
    ["Husband", "Shrimaan", "श्रीमान्"],
    ["Wife", "Shrimati", "श्रीमती"],
    ["Son", "Chhora", "छोरा"],
    ["Daughter", "Chhori", "छोरी"],
    // --- New Phrases ---
    ["This is my father.", "Yo mero buba hunuhunchha.", "यो मेरो बुबा हुनुहुन्छ।"],
    ["This is my mother.", "Yo mero aama hunuhunchha.", "यो मेरो आमा हुनुहुन्छ।"],
    ["I have one brother.", "Mero euta bhaai chha.", "मेरो एउटा भाइ छ।"],
    ["I have two sisters.", "Mero dui jana didi/bahini chhan.", "मेरो दुई जना दिदी/बहिनी छन्।"],
    ["Do you have siblings?", "Tapainko daaju-bhaai, didi-bahini hunuhunchha?", "तपाईंको दाजु-भाइ, दिदी-बहिनी हुनुहुन्छ?"],
    ["I live with my family.", "Ma mero pariwaar sanga baschhu.", "म मेरो परिवारसँग बस्छु।"],
    ["My family is small.", "Mero pariwaar sano chha.", "मेरो परिवार सानो छ।"],
    ["What is your father's name?", "Tapainko buba ko naam ke ho?", "तपाईंको बुबाको नाम के हो?"],
    ["My mother's name is...", "Mero aama ko naam ... ho.", "मेरी आमाको नाम ... हो।"]
  ],

  health: [
    ["I feel sick", "Malai sancho chhaina", "मलाई सन्चो छैन"],
    ["I need a doctor", "Malai doctor chahiyo", "मलाई डाक्टर चाहियो"],
    ["Where is the hospital?", "Aspatal kaha chha?", "अस्पताल कहाँ छ?"],
    ["Help!", "Guhaar!", "गुहार!"],
    ["Call the police", "Prahari lai bolaunus", "प्रहरीलाई बोलाउनुस्"],
    ["It hurts here", "Yaha dukchha", "यहाँ दुख्छ"],
    ["I have a headache", "Mero tauko dukhyo", "मेरो टाउको दुख्यो"]
  ],
  daysAndTime: [
    ["What time is it?", "Ahile kati bajyo?", "अहिले कति बज्यो?"],
    ["What day is it today?", "Aaja ke baar ho?", "आज के बार हो?"],
    ["Sunday", "Aaitabaar", "आइतबार"],
    ["Monday", "Sombaar", "सोमबार"],
    ["Tuesday", "Mangalbaar", "मंगलबार"],
    ["Wednesday", "Budhabaar", "बुधबार"],
    ["Thursday", "Bihibaar", "बिहिबार"],
    ["Friday", "Shukrabaar", "शुक्रबार"],
    ["Saturday", "Shanibaar", "शनिबार"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Today", "Aaja", "आज"],
    ["Tomorrow", "Bholi", "भोलि"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "none";
  backButton.style.display = "block";

  data[topic].forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <strong>${eng}</strong>
        </div>
        <div class="card-back">
          <span class="devanagari-script">${devanagari}</span>
          <span class="romanized-script">${roman}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      // We target the inner card for the flip animation
      card.classList.toggle("flipped");
    });
    flashcardContainer.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "flex";
  backButton.style.display = "none";
}
