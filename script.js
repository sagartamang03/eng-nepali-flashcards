const data = {
  pronouns: {
  subject: [
    ["I", "Ma", "म"],
    ["You (informal)", "Timi", "तिमी"],
    ["You (formal)", "Tapai", "तपाईं"],
    ["He", "U / Uni", "ऊ / उनी"],
    ["She", "U / Uni", "ऊ / उनी"],
    ["It", "Yo / Tyo", "यो / त्यो"],
    ["We", "Hami", "हामी"],
    ["They", "Uniharu / Tiniharu", "उनीहरू / तिनीहरू"]
  ],
  object: [
    ["to Me", "Malai", "मलाई"],
    ["to You (informal)", "Timilai", "तिमीलाई"],
    ["to You (formal)", "Tapaailai", "तपाईंलाई"],
    ["to Him", "Uslai / Unilai", "उसलाई / उनलाई"],
    ["to Her", "Uslai / Unilai", "उसलाई / उनलाई"],
    ["to It", "Yaslai / Tyaslai", "यसलाई / त्यसलाई"],
    ["to Us", "Haamilai", "हामीलाई"],
    ["to Them", "Uniharulai / Tiniharulai", "उनीहरूलाई / तिनीहरूलाई"]
  ],
  possessive: [
    ["My", "Mero / Mera / Meri", "मेरो / मेरा / मेरी"],
    ["Your (informal)", "Timiro / Timra / Timri", "तिमीरो / तिम्रा / तिम्री"],
    ["Your (formal)", "Tapaaiko / Tapaai'ka / Tapaai'ki", "तपाईंको / तपाईंका / तपाईंकी"],
    ["His", "Uskō / Uska / Uski", "उसको / उसका / उसकी"],
    ["Her", "Uskō / Uska / Uski", "उसको / उसका / उसकी"],
    ["Its", "Yesko / Tyasko", "यसको / त्यसको"],
    ["Our", "Haamro / Haamra / Haamri", "हाम्रो / हाम्रा / हाम्री"],
    ["Their", "Uniharuko / Tiniharuko", "उनीहरूको / तिनीहरूको"]
  ],
  reflexive: [
    ["Own (singular masculine)", "Aafno", "आफ्नो"],
    ["Own (singular feminine)", "Aafni", "आफ्नी"],
    ["Own (plural masculine or mixed)", "Aafna", "आफ्ना"],
    ["Own (plural feminine)", "Aafniharu", "आफ्नीहरू"],
    ["By oneself / Automatically", "Aafnai / Aafai", "आफ्नै / आफै"]
  ],
  unspecified: [
    ["Someone", "Kunai vyakti / Kōhī", "कुनै व्यक्ति / कोही"],
    ["Something", "Kehi / Kunai kura", "केही / कुनै कुरा"],
    ["Anyone", "Junsukai vyakti / Kōhī pani", "जुनसुकै व्यक्ति / कोही पनि"],
    ["Anything", "Kehi pani / Kunai pani kura", "केही पनि / कुनै पनि कुरा"]
  ]
},
  greetingsIntroductions: [
    ["Hello / Bye", "Namaste", "नमस्ते"],
    ["How are you?", "Tapaai kasto hunuhunchha?", "तपाईं कस्तो हुनुहुन्छ?"],
    ["I am fine", "Ma sanchai chhu", "म सन्चै छु"],
    ["Thank you", "Dhanyabaad", "धन्यवाद"],
    ["See you soon", "Chittai bhetaulaa", "छिट्टै भेटौंला"],
    ["See you again", "Feri bhetaulaa", "फेरि भेटौंला"],
    ["What is your name?", "Tapaaiko naam ke ho?", "तपाईंको नाम के हो?"],
    ["My name is...", "Mero naam ... ho", "मेरो नाम ... हो"],
    ["Where do you live?", "tapaai kahaa basnuhunchha?", "तपाईं कहाँ बस्नुहुन्छ?"],
    ["I live in...", "Ma ... maa baschhu", "म ... मा बस्छु"],
    ["What work do you do?", "Tapaai ke kaam garnuhunchha?", "तपाईं के काम गर्नुहुन्छ?"],
    ["I am ...", "Ma ... ho", "म ... हुँ"],
    ["This is my friend", "Yo mero saathi ho", "यो मेरो साथी हो"],
    ["This is ...", "Yo ... ho", "यो ... हो"]
  ],
  routine: [
    ["I wake up at 6", "Ma chha baje uthchhu", "म छ बजे उठ्छु"],
    ["I brush my teeth", "Ma mero daat majhchhu", "म मेरो दाँत माझ्छु"],
    ["I eat food", "Ma khaanaa khaanchhu", "म खाना खान्छु"],
    ["I go to work", "Ma kaam maa jaanchhu", "म काममा जान्छु"],
    ["I study in the evening", "Ma beluka padhchhu", "म बेलुका पढ्छु"],
    ["I make food", "Ma khana banaauchhu", "म खाना बनाउँछु"],
    ["I bathe", "Ma nuhanchhu", "म नुहाउँछु"],
    ["I sleep at 10", "Ma 10 baje sutchhu", "म दस बजे सुत्छु"],
    ["I relax", "Ma aaram garchhu", "म घरमा आराम गर्छु"],
    ["I read books", "Ma kitaabharu padchhu", "म किताबहरू पढ्छु"]
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
    ["I want to go to...", "Ma ... jaana chaahanchhu", "म ... जान चाहन्छु"],
    ["Is it far?", "Yo taadha chha?", "यो टाढा छ?"],
    ["Please stop here", "Kripaya yahaa roknu hos", "कृपया यहाँ रोक्नुहोस्"],
    ["How long will it take?", "Kati samaya lagchha?", "कति समय लाग्छ?"],
    ["I am lost", "Ma haraye", "म हराएँ"],
    ["Can you help me?", "Tapaai malai madat garna saknuhunchha?", "तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?"],
    ["I didn’t understand", "Maile bujhina", "मैले बुझिन"],
    ["I understood", "Maile bujhe", "मैले बुझें"]
  ],
  shopping: [
    ["How much is this?", "Yesko kati parchha?", "यसको कति पर्छ?"],
    ["It's too expensive", "Yo dherai mahango chha", "यो धेरै महँगो छ"],
    ["Lower the price", "Mulya ghataunus", "मूल्य घटाउनुहोस्"],
    ["I will take it", "Ma yo linchhu", "म यो लिन्छु"],
    ["I'm just looking", "Ma herdaimaatra chhu", "म हेर्दैमात्र छु"],
    ["Do you have another color?", "Ke tapaaisanga arko rang chha?", "के तपाईंसँग अर्को रंग छ?"],
    ["Where can I pay?", "Ma kaha tirna sakchhu?", "म कहाँ तिर्न सक्छु?"]
  ],
  numbers: [
    ["1", "Ek", "एक"],
    ["2", "Dui", "दुई"],
    ["3", "Tin", "तीन"],
    ["4", "Chaar", "चार"],
    ["5", "Paanch", "पाँच"],
    ["6", "Chha", "छ"],
    ["7", "Saat", "सात"],
    ["8", "Aath", "आठ"],
    ["9", "Nau", "नौ"],
    ["10", "Das", "दस"],
    ["11", "Eghāra", "एघार"],
    ["12", "Bārah", "बाह्र"],
    ["20", "Bīs", "बीस"],
    ["30", "Tīs", "तीस"],
    ["40", "Chālīs", "चालीस"],
    ["50", "Pachās", "पचास"],
    ["60", "Sāṭhī", "साठी"],
    ["70", "Sattari", "सत्तरी"],
    ["80", "Asī", "असी"],
    ["90", "Nabbē", "नब्बे"],
    ["100", "Saye / Ek saye", "सय / एक सय"],
    ["200", "Dui saye", "दुई सय"],
    ["300", "Tin saye", "तीन सय"],
    ["400", "Chaar saye", "चार सय"]
  ],
  family: [
    // --- Original Vocabulary ---
    ["Family", "Pariwaar", "परिवार"],
    ["Father", "Buva", "बुवा"],
    ["Mother", "Aama", "आमा"],
    ["Brother (elder/younger)", "Daai / Bhaai", "दाइ / भाइ"],
    ["Sister (elder/younger)", "Didi / Bahini", "दिदी / बहिनी"],
    ["Husband", "Shrimaan", "श्रीमान्"],
    ["Wife", "Shrimati", "श्रीमती"],
    ["Son", "Chhora", "छोरा"],
    ["Daughter", "Chhori", "छोरी"],
    // --- New Phrases ---
    ["This is my father.", "Yo mero buva hunuhunchha.", "यो मेरो बुवा हुनुहुन्छ।"],
    ["This is my mother.", "Yo mero aama hunuhunchha.", "यो मेरो आमा हुनुहुन्छ।"],
    ["I have one brother.", "Mero ekjana bhaai chha.", "मेरो एकजना भाइ छ।"],
    ["I have two sisters.", "Mero dui jana didi/bahini chhan.", "मेरो दुई जना दिदी/बहिनी छन्।"],
    ["Do you have siblings?", "Tapainko daaju-bhaai, didi-bahini chhan?", "तपाईंको दाजु-भाइ, दिदी-बहिनी छन्?"],
    ["I live with my family.", "Ma mero pariwaar sanga baschhu.", "म मेरो परिवारसँग बस्छु।"],
    ["My family is small.", "Mero pariwaar saano chha.", "मेरो परिवार सानो छ।"],
    ["What is your father's name?", "Tapainko buva ko naam ke ho?", "तपाईंको बुवाको नाम के हो?"],
    ["My mother's name is...", "Mero aama ko naam ... ho.", "मेरी आमाको नाम ... हो।"]
  ],

  health: [
    ["I feel sick", "Malai sancho chhaina", "मलाई सन्चो छैन"],
    ["I need a doctor", "Malai doctor chahiyo", "मलाई डाक्टर चाहियो"],
    ["Where is the hospital?", "Aspatal kaha chha?", "अस्पताल कहाँ छ?"],
    ["Help!", "Madat garnus!", "मदत गर्नुस!"],
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
  ],
  weather: [
    ["How's the weather?", "Aaja ko mausam kasto chha?", "आजको मौसम कस्तो छ?"],
    ["It is sunny", "Gham laageko chha", "घाम लागेको छ"],
    ["It is raining", "Paani pariraheko chha", "पानी परिरहेको छ"],
    ["It is cold", "Jado chha", "जाडो छ"],
    ["It is hot", "Garmi chha", "गर्मी छ"],
    ["It is cloudy", "Baadal laageko chha", "बादल लागेको छ"]
  ],

  hobbies: [
    ["What are your hobbies?", "Tapaaiko shauk ke ke ho?", "तपाईंको शौक के के हो?"],
    ["I like reading", "Malai padhna man parchha", "मलाई पढ्न मन पर्छ"],
    ["I like music", "Malai sangeet man parchha", "मलाई संगीत मन पर्छ"],
    ["I enjoy traveling", "Malai ghumna man parchha", "मलाई घुम्न मन पर्छ"],
    ["I play football", "Ma football khelchhu", "म फुटबल खेल्छु"]
  ],

  emotions: [
    ["How are you feeling?", "Tapai lai kasto lagiraheko chha?", "तपाईंलाई कस्तो लागिरहेको छ?"],
    ["I am happy", "Ma khushi chhu", "म खुसी छु"],
    ["I am sad", "Ma dukhi chhu", "म दुखी छु"],
    ["I am tired", "Ma thakeko chhu", "म थाकेको छु"],
    ["I am excited", "Ma utshahit chhu", "म उत्साहित छु"]
  ],

wantSentences: [
  // Affirmative Sentences
  ["I want tea.", "Malai chiya chaahinchha.", "मलाई चिया चाहिन्छ।"],
  ["She wants to dance.", "Uni naachna chaahanchhin.", "उनी नाच्न चाहन्छिन्"],
  ["They want to go home.", "Uniharu ghar jaana chaahanchhan.", "उनीहरू घर जान चाहन्छन्।"],

  // Negative Sentences
  ["I don't want food.", "Malai khaana chahindaina.", "मलाई खाना चाहिँदैन।"],
  ["He doesn't want to sleep.", "U sutna chaahdaina.", "ऊ सुत्न चाहँदैन।"],
  ["They don't want to study.", "Uniharu padhna chaahadainan.", "उनीहरू पढ्न चाहँदैनन्।"],

  // Yes/No Questions
  ["Do you want coffee?", "Tapaailai coffee chaahinchha?", "तपाईलाई coffee चाहिन्छ?"],
  ["Does she want to come?", "Ke uni aauna chaahanchhin?", "के उनी आउन चाहन्छिन्?"],
  ["Do they want water?", "Ke uniharulaai paani chaahinchha?", "के उनीहरूलाई पानी चाहिन्छ?"],

  // Wh- Questions
  ["What do you want?", "Tapaailai ke chaahinchha?", "तपाईलाई के चाहिन्छ?"],
  ["Why do you want to go?", "Tapaai kina jaana chaahanuhunchha?", "तपाई किन जान चाहनुहुन्छ?"],
  ["Who do you want to meet?", "Tapaai kaslai bhetna chaahanu hunchha?", "तपाई कसलाई भेट्न चाहनुहुन्छ?"]
],

haveSentences: [
  // Affirmative
  ["I have a book.", "Ma sanga ek kitaab chha.", "मसँग एक किताब छ।"],
  ["She has a pen.", "Uni sanga ek kalam chha.", "उनीसँग एक कलम छ।"],
  ["They have a house.", "Uniharuko ghar chha.", "उनहरूको घर छ।"],

  // Negative
  ["I don't have a car.", "Ma sanga gaadi chhaina.", "मसँग गाडी छैन।"],
  ["He doesn't have time.", "U sanga samaya chhaina.", "उसँग समय छैन।"],
  ["They don't have money.", "Uniharu sanga paisa chhaina.", "उनीहरूसँग पैसा छैन।"],

  // Yes/No Questions
  ["Do you have a phone?", "Tapaai sanga phone chha?", "तपाईसँग फोन छ?"],
  ["Does she have a job?", "Ke uni sanga sanga kaam chha?", "के उनीसँग काम छ?"],
  ["Do they have tickets?", "Ke uniharusanga ticket chha?", "के उनीहरूसँग टिकट छ?"],

  // Wh- Questions
  ["What do you have?", "Tapaai sanga ke chha?", "तपाईसँग के छ?"],
  ["Who has the key?", "Ko sanga chaabi chha?", "चाबी कोसँग छ?"],
  ["Why do you have this?", "Tapaai sanga yo kina chha?", "तपाईसँग यो किन छ?"]
],


  likeSentences: [
    ["I like tea.", "Malai chiya manparchha.", "मलाई चिया मनपर्छ।"],
    ["She likes to read books.", "Uunilai kitaab padhna manparchha.", "उनलाई किताब पढ्न मनपर्छ।"],
    ["They don't like movies.", "Uनीहरूलाई film manpardaina.", "उनीहरूलाई फिल्म मनपर्दैन।"],
    ["Do you like spicy food?", "Ke tapaailai piro khana manparchha?", "के तपाईंलाई पिरो खाना मनपर्छ?"],
    ["What do you like?", "Tapaailai ke manparchha.", "तपाईंलाई के मनपर्छ?"]
  ], // <-- COMMA HERE

  needSentences: [
    // I noticed a "" in your code, which is not valid JavaScript. I have removed it.
    ["I need water.", "Malai paani chahinchha.", "मलाई पानी चाहिन्छ।"],
    ["She needs help.", "Uunilai sahayog chahinchha.", "उनलाई सहयोग चाहिन्छ।"],
    ["They need a taxi.", "Uनीहरूलाई taxi chahinchha.", "उनीहरूलाई ट्याक्सी चाहिन्छ।"],
    ["I don't need anything.", "Malai kehi chahidaaina.", "मलाई केही चाहिँदैन।"],
    ["Do you need anything?", "Tapaailai kehi chahinchha?", "तपाईंलाई केही चाहिन्छ?"],
    ["What do you need?", "Tapaailai ke chahinchha?", "तपाईंलाई के चाहिन्छ?"]
  ], // <-- COMMA HERE

  canSentences: [
    ["I can speak Nepali.", "Ma Nepali bolna sakchhu.", "म नेपाली बोल्न सक्छु।"],
    ["She can swim.", "Uuni paudina sakchin.", "उनी पौडिन सक्छिन्।"],
    ["They can't come today.", "Uनीहरू aaja auna sakdainan.", "उनीहरू आज आउन सक्दैनन्।"],
    ["Can you help me?", "Ke tapai malai madat garna saknuhunchha?", "के तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?"],
    ["Where can I pay?", "Ma kaha tirna sakchhu?", "म कहाँ तिर्न सक्छु?"],
    ["What can you do?", "Tapai ke garna saknuhunchha?", "तपाईं के गर्न सक्नुहुन्छ?"]
  ], // <-- COMMA HERE

  shouldHaveTo: [
    ["You should rest.", "Tapaile aaram garnuparchha.", "तपाईंले आराम गर्नुपर्छ।"],
    ["I have to go.", "Ma jaanu parchha.", "म जानु पर्छ।"],
    ["She needs to study.", "Uunle padhnu parchha.", "उनले पढ्नु पर्छ।"],
    ["We have to work.", "Haamile kaam garnu parchha.", "हामीले काम गर्नु पर्छ।"],
    ["You should not worry.", "Tapaile chinta garnu hudaina.", "तपाईंले चिन्ता गर्नु हुँदैन।"],
    ["What should I do?", "Maile ke garnu parchha?", "मैले के गर्नु पर्छ?"]
  ], // <-- COMMA HERE

  Commands: [
    ["Come here.", "Yahaa aaunus.", "यहाँ आउनुस्।"],
    ["Go there.", "Tyahaa jaanus.", "त्यहाँ जानुस्।"],
    ["Listen carefully.", "Dhyaan diyera sunnus.", "ध्यान दिएर सुन्नुस्।"],
    ["Please stop here.", "Kripaya yahaa roknu hos.", "कृपया यहाँ रोक्नुहोस्।"],
    ["Speak slowly.", "Bistaarai bolnus.", "बिस्तारै बोल्नुस्।"],
    ["Give me that.", "Malai tyo dinus.", "मलाई त्यो दिनुस्।"],
    ["Don't do that.", "Tyo nagarnus.", "त्यो नगर्नुस्।"]
  ],

"verbs": {
  "movement": [
    ["To go", "Jāne", "जानु"],
    ["To come", "Aaune", "आउनु"],
    ["To walk", "Hidnu", "हिँड्नु"],
    ["To run", "Dauranu", "दौडनु"],
    ["To live", "Basnu", "बस्नु"]
  ],
  "senses": [
    ["To see", "Herne", "हेर्नु"],
    ["To hear", "Sunnu", "सुन्नु"],
    ["To eat", "Khaanu", "खानु"],
    ["To drink", "Pinu", "पिउनु"],
    ["To smell", "Sungnu", "सुँग्नु"]
  ],
  "communication": [
    ["To speak", "Bholnu", "भोल्नु"],
    ["To write", "Lekhnuhos", "लेख्नुहोस्"],
    ["To read", "Padhna", "पढ्नु"],
    ["To listen", "Sunnu", "सुन्नु"],
    ["To tell", "Bhana", "भन"]
  ],
  "physicalActions": [
    ["To make/do", "Garnu", "गर्नु"],
    ["To take", "Linu", "लिनु"],
    ["To give", "Dinu", "दिनु"],
    ["To open", "Kholnu", "खोल्नु"],
    ["To close", "Band garnu", "बन्द गर्नु"]
  ],
  "dailyActivities": [
    ["To sleep", "Sutnu", "सुत्नु"],
    ["To wake up", "Uthnu", "उठ्नु"],
    ["To bathe", "Nahāunu", "नुहाउनु"],
    ["To cook", "Pakasnu", "पाकाउनु"],
    ["To study", "Padnu", "पढ्नु"]
  ]
},

    Pronouns: [
  ["I am happy", "ma khusi chhu", "म खुसी छु"],
  ["I am a student", "ma bidyarthi ho", "म विद्यार्थी हो"],

  ["You are (semi-formal) happy", "timi khusi chhau", "तिमी खुसी छौ"],
  ["You are (semi-formal) a student", "timi bidyarthi hau", "तिमी विद्यार्थी हौ"],

  ["You are (formal) happy", "tapai khusi hunuhunchha", "तपाईं खुसी हुनुहुन्छ"],
  ["You are (formal) a student", "tapai bidyarthi hunuhunchha", "तपाईं विद्यार्थी हुनुहुन्छ"],

  ["He/She is (informal) happy", "uha khusi chha", "उ खुसी छ"],
  ["He/She is (informal) a student", "uha bidyarthi ho", "उ विद्यार्थी हो"],

  ["He/She is (formal) happy", "wahaa khusi hunuhunchha", "उहाँ खुसी हुनुहुन्छ"],
  ["He/She is (formal) a student", "wahaa bidyarthi hunuhunchha", "उहाँ विद्यार्थी हुनुहुन्छ"],

  ["We are happy", "haami khusi chhaun", "हामी खुसी छौं"],
  ["We are students", "haami bidyarthi hau", "हामी विद्यार्थी हौं"],

  ["You all are (semi-formal) happy", "timi haru khusi chhau", "तिमीहरू खुसी छौ"],
  ["You all are (semi-formal) students", "timi haru bidyarthi hau", "तिमीहरू विद्यार्थी हौ"],

  ["You all are (formal) happy", "tapai haru khusi hunuhunchha", "तपाईंहरू खुसी हुनुहुन्छ"],
  ["You all are (formal) students", "tapai haru bidyarthi hunuhunchha", "तपाईंहरू विद्यार्थी हुनुहुन्छ"],

  ["They are (informal) happy", "uni haru khusi chhan", "उनीहरू खुसी छन्"],
  ["They are (informal) students", "uni haru bidyarthi hun", "उनीहरू विद्यार्थी हुन्"],

  ["They are (formal) happy", "wahaa haru khusi hunuhunchha", "उहाँहरू खुसी हुनुहुन्छ"],
  ["They are (formal) students", "wahaa haru bidyarthi hunuhunchha", "उहाँहरू विद्यार्थी हुनुहुन्छ"],
],

"nouns": {
  "Household Items": [
    ["House", "Ghar", "घर"],
    ["Chair", "Kursi", "कुर्सी"],
    ["Table", "Mez", "मेज"],
    ["Door", "Dhwāra / Darwāja", "ढोका / दरवाजा"],
    ["Window", "Jhyālo", "झ्याल"],
    ["Bed", "Palang", "पलङ"],
    ["Fan", "Pankho", "पंखा"],
    ["Light", "Batti", "बत्ती"]
  ],
  "School Supplies": [
    ["Book", "Kitāb", "किताब"],
    ["Pen", "Kalam", "कलम"],
    ["Pencil", "Pencil", "पेंसिल"],
    ["Notebook", "Copy", "कपी"],
    ["Eraser", "Rubber", "रबर"],
    ["Bag", "Bāg / Basta", "ब्याग / बस्ता"],
    ["Board", "Board", "बोर्ड"],
    ["Marker", "Marker", "मार्कर"]
  ],
  "Essentials": [
    ["Water", "Pāni", "पानी"],
    ["Food", "Khānā", "खाना"],
    ["Milk", "Doodh", "दूध"],
    ["Bread", "Double Roti", "डबल रोटी"],
    ["Salt", "Namak", "नून"],
    ["Sugar", "Chini", "चिनी"],
    ["Oil", "Tel", "तेल"],
    ["Rice", "Bhat / Chāwal", "भात / चामल"]
  ],
  "People": [
    ["Teacher", "Adhyāpak", "अध्यापक"],
    ["Student", "Chhātra", "छात्र"],
    ["Mother", "Aama", "आमा"],
    ["Father", "Bābā", "बाबा"],
    ["Brother", "Dai", "दाइ"],
    ["Sister", "Didi", "दिदी"],
    ["Friend", "Mitra", "मित्र"],
    ["Child", "Bālachha", "बालक"]
  ]
},

 "adjectives": {
  "size": [
    ["Big", "Thulo", "ठूलो"],
    ["Small", "Sano", "सानो"],
    ["Tall", "Lamo", "लामो"],
    ["Short", "Sano", "सानो"],
    ["Huge", "Dairo Thulo", "धेरै ठूलो"]
  ],
  "appearance": [
    ["Beautiful", "Ramro", "राम्रो"],
    ["Ugly", "Kharāb", "खराब"],
    ["Clean", "Saphā", "सफा"],
    ["Dirty", "Fāṅgliyo", "फाङ्ग्लियो"],
    ["Smart", "Bujhdār", "बुझदार"]
  ],
  "temperature": [
    ["Hot", "Tato", "तातो"],
    ["Cold", "Chiso", "चिसो"],
    ["Warm", "Naram", "नरम"],
    ["Cool", "Thando", "ठंडो"],
    ["Freezing", "Jamdai", "जम्दै"]
  ],
  "emotions": [
    ["Happy", "Khusi", "खुसी"],
    ["Sad", "Dukhi", "दुखी"],
    ["Angry", "Risālo", "रिसालो"],
    ["Excited", "Utsahit", "उत्साहित"],
    ["Scared", "Darāyeko", "डराएको"]
  ],
  "speed": [
    ["Fast", "Chito", "छिटो"],
    ["Slow", "Bistārāi", "बिस्तारै"],
    ["Quick", "Chito", "छिटो"],
    ["Speedy", "Tiwro", "तीव्र"],
    ["Sluggish", "Sust", "सुस्त"]
  ]
}
,

"adverbs": {
  "manner": [
    ["Quickly", "Chito", "छिटो"],
    ["Slowly", "Bistārāi", "बिस्तारै"],
    ["Carefully", "Savarī", "सावधानी"],
    ["Loudly", "Jorle", "जोरले"],
    ["Silently", "Chupchap", "चुपचाप"]
  ],
  "frequency": [
    ["Always", "Sadhai", "सधैं"],
    ["Never", "Kabhī pani hoina", "कहिले पनि होइन"],
    ["Often", "Prayaḥ", "प्रायः"],
    ["Sometimes", "Kabhī-kabhī", "कहिले कहिले"],
    ["Rarely", "Dherai dherai hoina", "धेरै धेरै होइन"]
  ],
  "time": [
    ["Today", "Aaja", "आज"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Tomorrow", "Bholi", "भोली"],
    ["Now", "Ahile", "अहिले"],
    ["Later", "Pachi", "पछि"]
  ]
}
,

present_simple_tense: [
  // I
  ["I eat rice", "ma bhat khanchhu", "म भात खान्छु"],
  ["I go home", "ma ghar janchhu", "म घर जान्छु"],

  // You (semi-formal)
  ["You eat rice (semi-formal)", "timi bhat khauchhau", "तिमी भात खाउँछौ"],
  ["You go home (semi-formal)", "timi ghar janchhau", "तिमी घर जान्छौ"],

  // You (formal)
  ["You eat rice (formal)", "tapai bhat khanuhunchha", "तपाईं भात खानुहुन्छ"],
  ["You go home (formal)", "tapai ghar januhunchha", "तपाईं घर जानुहुन्छ"],

  // He/She (informal)
  ["He eats rice", "uha bhat khanchha", "उ भात खान्छ"],
  ["He goes home", "uha ghar janchha", "उ घर जान्छ"],

  // He/She (formal)
  ["He eats rice (formal)", "wahaa bhat khanuhunchha", "उहाँ भात खानुहुन्छ"],
  ["He goes home (formal)", "wahaa ghar januhunchha", "उहाँ घर जानुहुन्छ"],

  // We
  ["We eat rice", "haami bhat khanchhaun", "हामी भात खान्छौं"],
  ["We go home", "haami ghar janchhaun", "हामी घर जान्छौं"],

  // You all (semi-formal)
  ["You all eat rice (semi-formal)", "timi haru bhat khauchhau", "तिमीहरू भात खाउँछौ"],
  ["You all go home (semi-formal)", "timi haru ghar janchhau", "तिमीहरू घर जान्छौ"],

  // You all (formal)
  ["You all eat rice (formal)", "tapai haru bhat khanuhunchha", "तपाईंहरू भात खानुहुन्छ"],
  ["You all go home (formal)", "tapai haru ghar januhunchha", "तपाईंहरू घर जानुहुन्छ"],

  // They (informal)
  ["They eat rice", "uni haru bhat khanchhan", "उनीहरू भात खान्छन्"],
  ["They go home", "uni haru ghar janchhan", "उनीहरू घर जान्छन्"],

  // They (formal)
  ["They eat rice (formal)", "wahaa haru bhat khanuhunchha", "उहाँहरू भात खानुहुन्छ"],
  ["They go home (formal)", "wahaa haru ghar januhunchha", "उहाँहरू घर जानुहुन्छ"]
],

present_continuous_tense: [
  // I
  ["I am eating rice", "ma bhat khāndaichhu", "म भात खाँदैछु"],
  ["I am going home", "ma ghar jāndaichhu", "म घर जाँदैछु"],

  // You (semi-formal)
  ["You are eating rice (semi-formal)", "timi bhat khāndaichhau", "तिमी भात खाँदैछौ"],
  ["You are going home (semi-formal)", "timi ghar jāndaichhau", "तिमी घर जाँदैछौ"],

  // You (formal)
  ["You are eating rice (formal)", "tapai bhat khāndaihunuhunchha", "तपाईं भात खाँदै हुनुहुन्छ"],
  ["You are going home (formal)", "tapai ghar jāndaihunuhunchha", "तपाईं घर जाँदै हुनुहुन्छ"],

  // He/She (informal)
  ["He is eating rice", "uha bhat khāndaichha", "उ भात खाँदैछ"],
  ["He is going home", "uha ghar jāndaichha", "उ घर जाँदैछ"],

  // He/She (formal)
  ["He is eating rice (formal)", "wahaa bhat khāndaihunuhunchha", "उहाँ भात खाँदै हुनुहुन्छ"],
  ["He is going home (formal)", "wahaa ghar jāndaihunuhunchha", "उहाँ घर जाँदै हुनुहुन्छ"],

  // We
  ["We are eating rice", "haami bhat khāndaichhaun", "हामी भात खाँदैछौं"],
  ["We are going home", "haami ghar jāndaichhaun", "हामी घर जाँदैछौं"],

  // You all (semi-formal)
  ["You all are eating rice (semi-formal)", "timi haru bhat khāndaichhau", "तिमीहरू भात खाँदैछौ"],
  ["You all are going home (semi-formal)", "timi haru ghar jāndaichhau", "तिमीहरू घर जाँदैछौ"],

  // You all (formal)
  ["You all are eating rice (formal)", "tapai haru bhat khāndaihunuhunchha", "तपाईंहरू भात खाँदै हुनुहुन्छ"],
  ["You all are going home (formal)", "tapai haru ghar jāndaihunuhunchha", "तपाईंहरू घर जाँदै हुनुहुन्छ"],

  // They (informal)
  ["They are eating rice", "uni haru bhat khāndaichhan", "उनीहरू भात खाँदैछन्"],
  ["They are going home", "uni haru ghar jāndaichhan", "उनीहरू घर जाँदैछन्"],

  // They (formal)
  ["They are eating rice (formal)", "wahaa haru bhat khāndaihunuhunchha", "उहाँहरू भात खाँदै हुनुहुन्छ"],
  ["They are going home (formal)", "wahaa haru ghar jāndaihunuhunchha", "उहाँहरू घर जाँदै हुनुहुन्छ"]
],
"relationshipWords": [
  ["Mother", "Aama", "आमा"],
  ["Father", "Baa", "बाबा"],
  ["Brother", "Dai", "दाई"],
  ["Sister", "Didi", "दिदी"],
  ["Friend", "Mitra", "मित्र"],
  ["Husband", "Pati", "पति"],
  ["Wife", "Patni", "पत्नी"],
  ["Son", "Chhora", "छोरा"],
  ["Daughter", "Chhori", "छोरी"]
],

"Time": {
  "daysOfWeek": [
    ["Sunday", "Aaitabar", "आइतबार"],
    ["Monday", "Sombar", "सोमबार"],
    ["Tuesday", "Mangalbar", "मंगलबार"],
    ["Wednesday", "Budhabar", "बुधबार"],
    ["Thursday", "Bihibar", "बिहिबार"],
    ["Friday", "Shukrabar", "शुक्रबार"],
    ["Saturday", "Sanibar", "शनिबार"]
  ],
  "timeUnits": [
    ["Hour", "Ghaṇṭa", "घण्टा"],
    ["Minute", "Minute", "मिनेट"],
    ["Second", "Second", "सेकेण्ड"],
    ["Morning", "Bihan", "बिहान"],
    ["Afternoon", "Dopahar", "दोपहर"],
    ["Evening", "Sandhya", "साँझ"],
    ["Night", "Raat", "रात"]
  ]
}
,
"prepositions": {
  "place": [
    ["On", "Mā", "मा"],
    ["Under", "Tāla", "तल्ला"],
    ["In", "Bhitra", "भित्र"],
    ["Out", "Bahira", "बाहिर"],
    ["Beside", "Tira", "तिर"]
  ],
  "position": [
    ["Between", "Bīch", "बीच"],
    ["Near", "Nijikaṭ", "नजिकट"],
    ["Over", "Mūpār", "मुनि"],
    ["Behind", "Pīchhū", "पछाडि"],
    ["In front of", "Sāmnā", "सामना"]
  ]
}
,
"conjunctions": {
  "coordination": [
    ["And", "Ra", "र"],
    ["But", "Tara", "तर"],
    ["Or", "Wa", "वा"],
    ["Nor", "Na ta", "न त"],
    ["Yet", "Tara pani", "तर पनि"]
  ],
  "subordination": [
    ["Because", "Kinabhane", "किनभने"],
    ["If", "Yadi", "यदि"],
    ["Although", "Yadi pani", "यद्यपि"],
    ["Since", "Jaba dekhi", "जबदेखि"],
    ["While", "Jaba samma", "जबसम्म"]
  ]
}
,

 "question": {
  "Wh-Question Words": [
    ["What", "Ke", "के"],
    ["Where", "Kahã", "कहाँ"],
    ["When", "Kahile", "कहिले"],
    ["Who", "Ko", "को"],
    ["Why", "Kin", "किन"],
    ["How", "Kasari", "कसरी"],
    ["Which", "Kun", "कुन"]
  ],
  "Yes / No Question Words": [
    ["Are you", "Ke timi", "के तिमी"],
    ["Is he", "Ke u", "के ऊ"],
    ["Do you", "Ke tapaaĩ", "के तपाईं"]
  ]
}
,
 IndependentVowels: {
    content: [
    ["अ", "", "a"],
    ["आ", "", "aa"],
    ["इ", "", "i"],
    ["ई", "", "ee"],
    ["उ", "", "u"],
    ["ऊ", "", "oo"],
    ["ऋ", "", "ri"],
    ["ए", "", "e"],
    ["ऐ", "", "ai"],
    ["ओ", "", "o"],
    ["औ", "", "au"],
    ["अं", "", "an"],
    ["अः", "", "ah"]
  ],
    examples: []
  },

  DependentVowels: {
    content: [
    ["ा", "", "aa"],
    ["ि", "", "i"],
    ["ी", "", "ee"],
    ["ु", "", "u"],
    ["ू", "", "oo"],
    ["ृ", "", "ri"],
    ["े", "", "e"],
    ["ै", "", "ai"],
    ["ो", "", "o"],
    ["ौ", "", "au"],
    ["ं", "", "an"],
    ["ः", "", "ah"]
  ],
    examples: []
  },

  Consonants: {
    content:[
    ["क", "", "ka"], ["ख", "", "kha"], ["ग", "", "ga"], ["घ", "", "gha"], ["ङ", "", "nga"],
    ["च", "", "cha"], ["छ", "", "chha"], ["ज", "", "ja"], ["झ", "", "jha"], ["ञ", "", "nya"],
    ["ट", "", "ṭa"], ["ठ", "", "ṭha"], ["ड", "", "ḍa"], ["ढ", "", "ḍha"], ["ण", "", "ṇa"],
    ["त", "", "ta"], ["थ", "", "tha"], ["द", "", "da"], ["ध", "", "dha"], ["न", "", "na"],
    ["प", "", "pa"], ["फ", "", "pha"], ["ब", "", "ba"], ["भ", "", "bha"], ["म", "", "ma"],
    ["य", "", "ya"], ["र", "", "ra"], ["ल", "", "la"], ["व", "", "va"],
    ["श", "", "sha"], ["ष", "", "ṣa"], ["स", "", "sa"], ["ह", "", "ha"],
    ["क्ष", "", "kṣa"], ["त्र", "", "tra"], ["ज्ञ", "", "gya"]
  ],
    examples: []
  },

  ConjunctCharacters: {
    content: [
    ["क्त", "", "kta"],
    ["त्र", "", "tra"],
    ["ज्ञ", "", "gya"],
    ["श्र", "", "shra"],
    ["क्ष", "", "kṣa"],
    ["ज्ञ", "", "gya"],
    ["त्र", "", "tra"],
    ["श्र", "", "śra"],
    ["द्य", "", "dya"],
    ["स्थ", "", "stha"]
  ],
    examples: []
  },

  ChandrabinduAndDot: {
    content: [
    ["ँ", "", "˜"],
    ["ं", "", "an"],
    ["ः", "", "ah"],
    ["़", "", "."],
    ["ऽ", "", "’"]
  ],
    examples: []
  },

  Numbers: {
    content: [
    ["०", "", "shoonya"],
    ["१", "", "ek"],
    ["२", "", "do"],
    ["३", "", "teen"],
    ["४", "", "chaar"],
    ["५", "", "paanch"],
    ["६", "", "chhah"],
    ["७", "", "saat"],
    ["८", "", "aath"],
    ["९", "", "nau"]
  ],
    examples: []
  }
}
;
let currentTopic = null;
let currentSubtopic = null;

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  flashcardContainer.innerHTML = "";
  topicSelection.classList.add("hidden");
  backButton.classList.remove("hidden");
  backButton.innerText = "← Back to Topics";

  if (typeof data[topic] === "object" && !Array.isArray(data[topic])) {
    showSubtopics(topic);
    return;
  }

  renderFlashcards(data[topic]);
}

function showSubtopics(topic) {
  const container = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  container.innerHTML = "";
  topicSelection.classList.add("hidden");
  backButton.classList.remove("hidden");
  backButton.innerText = "← Back to Topics";

  const subtopics = Object.keys(data[topic]);
  subtopics.forEach(sub => {
    const button = document.createElement("button");
    button.className = "subtopic-button";
    button.innerText = sub.charAt(0).toUpperCase() + sub.slice(1);
    button.onclick = () => showSubtopicFlashcards(topic, sub);
    container.appendChild(button);
  });
}

function showSubtopicFlashcards(topic, subtopic) {
  const container = document.getElementById("flashcards");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = subtopic;

  container.innerHTML = "";
  backButton.innerText = "← Back to Devanagari Script";

  renderFlashcards(data[topic][subtopic]);
}

function renderFlashcards(flashcardData) {
  const container = document.getElementById("flashcards");
  flashcardData.forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          ${currentTopic === "devanagariScript" ? `<span class="devanagari-script large">${devanagari}</span>` : `<strong>${eng}</strong>`}
        </div>
        <div class="card-back">
          ${currentTopic === "devanagariScript" ? `<strong>${eng}</strong>` : `<span class="devanagari-script">${devanagari}</span>`}
          <span class="romanized-script">${roman}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    container.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  if (currentTopic && currentSubtopic) {
    showSubtopics(currentTopic);
    currentSubtopic = null;
  } else {
    currentTopic = null;
    topicSelection.classList.remove("hidden");
    backButton.classList.add("hidden");
    flashcardContainer.innerHTML = "";
  }
}
