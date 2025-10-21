const data = {

  Directions: [
  ["North", "Uttar", "उत्तर"],
  ["South", "Dakshin", "दक्षिण"],
  ["East", "Purba", "पूर्व"],
  ["West", "Pashchim", "पश्चिम"],
  ["Left", "Bayã", "बायाँ"],
  ["Right", "Dayã", "दायाँ"],
  ["Straight", "Sidhā", "सिधा"],
  ["Back", "Pachhāri", "पछाडि"],
  ["Up", "Mathi", "माथि"],
  ["Down", "Tala", "तल"],
  ["Near", "Najik", "नजिक"],
  ["Far", "Tadhha", "टाढा"],
  ["Across", "Paari", "पारी"],
  ["Between", "Bichmã", "बीचमा"],
  ["Towards", "Tira", "तिर"]
],
Colors: [
  ["Red", "Rato", "रातो"],
  ["Blue", "Nilo", "नीलो"],
  ["Green", "Hariyo", "हरियो"],
  ["Yellow", "Pahelo", "पहेलो"],
  ["Black", "Kalo", "कालो"],
  ["White", "Seto", "सेतो"],
  ["Orange", "Suntalā rang", "सुन्तला रङ"],
  ["Pink", "Gulābi", "गुलाबी"],
  ["Purple", "Baigunī", "बैगुनी"],
  ["Brown", "Khairo", "खैरो"],
  ["Golden", "Sunahari", "सुनहरी"],
  ["Silver", "Chā̃dī", "चाँदी"]
],
Weather: [
  ["Sunny", "Ghaam laageko", "घाम लागेको"],
  ["Cloudy", "Baadal laageko", "बादल लागेको"],
  ["Rainy", "Paani ko mausam","पानीको मौसम"],
  ["Snowy", "hiu pareko mausam", "हिऊँ परेको मौसम"],
  ["Foggy", "Kuhiro", "कुहिरो"],
  ["Hot", "garmi", "गर्मी"],
  ["Cold", "Chiso", "चिसो"],
  ["Dry", "Sukhā", "सुखा"],
  ["Lightning", "Bijuli", "बिजुली"]
],
Fruits_vegetables: [
  ["Apple", "Syaau", "स्याउ"],
  ["Banana", "Kera", "केरा"],
  ["Mango", "Aap", "आँप"],
  ["Orange", "Suntalā", "सुन्तला"],
  ["Grapes", "Angur", "अंगुर"],
  ["Watermelon", "Kharbooja", "खरबुजा"],
  ["Potato", "Aalu", "आलु"],
  ["Tomato", "Golbheda", "गोलभेडा"],
  ["Onion", "Pyāz", "प्याज"],
  ["Carrot", "Gājar", "गाजर"],
  ["Cauliflower", "Kaulee", "काउली"],
  ["Brinjal", "Baignan", "बैगन"],
  ["Cucumber", "Kakro", "काक्रो"],
  ["Chili", "Khursānī", "खुर्सानी"],
  ["Garlic", "Lasun", "लसुन"],
  ["Ginger", "Aduwa", "अदुवा"]
],

  pronouns: {
  subject: [
    ["I", "Ma", "म"],
    ["You (informal)", "Timi", "तिमी"],
    ["You (formal)", "Tapaai", "तपाईं"],
    ["He/She (informal)", "U / Uni", "ऊ / उनी"],
        ["He/She (formal)", "Wahaa", "वहाँ"],

   
    ["this/ that", "Yo / Tyo", "यो / त्यो"],
    ["We", "Hami", "हामी"],
    ["They", "Uniharu / Tiniharu", "उनीहरू / तिनीहरू"]
  ],
  object: [
    ["to Me", "Malai", "मलाई"],
    ["to You (informal)", "Timilai", "तिमीलाई"],
    ["to You (formal)", "Tapaailai", "तपाईंलाई"],
    ["to Him/Her", "Uslaai", "उसलाई"],
    ["to Her (semi-formal)", "Unlaai", "उनलाई"],
    ["to this / that", "Yaslai / Tyaslai", "यसलाई / त्यसलाई"],
    ["to Us", "Haamilai", "हामीलाई"],
    ["to Them", "Uniharulai / Tiniharulai", "उनीहरूलाई / तिनीहरूलाई"]
  ],
  possessive: [
    ["My", "Mero / Mera / Meri", "मेरो / मेरा / मेरी"],
    ["Your (informal)", "Timro / Timra / Timri", "तिमीरो / तिम्रा / तिम्री"],
    ["Your (formal)", "Tapaaiko / Tapaaika / Tapaaiki", "तपाईंको / तपाईंका / तपाईंकी"],
    ["His/Her", "Uskō / Uska / Uski", "उसको / उसका / उसकी"],
    ["Its/ of that", "Yesko / Tyasko", "यसको / त्यसको"],
    ["Our", "Haamro / Haamra / Haamri", "हाम्रो / हाम्रा / हाम्री"],
    ["Their", "Uniharuko / Tiniharuko", "उनीहरूको / तिनीहरूको"]
  ],
  reflexive: [
    ["One's own", "Aafno", "आफ्नो"],
    ["By oneself / Automatically", "Aafai", "आफै"]
  ],
  unspecified: [
    ["Someone", "Kōhī", "कोही"],
    ["Something", "Kehi / Kunai", "केही / कुनै "],
    ["Anyone", "Kōhī pani", "कोही पनि"],
    ["Anything", "Kehi pani / Kunai pani", "केही पनि / कुनै पनि"]
  ]
},
  greetings: [
    ["Hello", "Namaste", "नमस्ते"],
    ["Good morning", "Subha bihana", "शुभ बिहान"],
    ["Good afternoon", "Subha din", "शुभ दिन"],
    ["Good evening", "Subha saanjh", "शुभ साँझ"],
    ["How are you?", "Tapaai kasto hunuhunchha?", "तपाईं कस्तो हुनुहुन्छ?"],
    ["I’m fine", "Ma sanchai chhu", "म सन्चै छु"],
    ["Nice to meet you", "Tapaailaai bhetera khusi laagyo", "तपाईंलाई भेटेर खुशी लाग्यो"]
  ],

  introductions: [
    ["What’s your name?", "Tapaai ko naam ke ho?", "तपाईंको नाम के हो?"],
    ["My name is Sagar", "Mero naam Sagar ho", "मेरो नाम सागर हो"],
    ["Where are you from?", "Tapaai kahaa bata hunuhunchha?", "तपाईं कहाँबाट हुनुहुन्छ?"],
    ["I am from Nepal", "Ma Nepal bata ho", "म नेपालबाट हो"],
    ["Nice to meet you", "Bhetera khusi laagyo", "भेटेर खुशी लाग्यो"]
  ],

  feelings: [
    ["I’m happy", "Ma khusi chhu", "म खुशी छु"],
    ["I’m sad", "Ma dukhi chhu", "म दुखी छु"],
    ["I’m tired", "Ma thakeko chhu", "म थाकेको छु"],
    ["I’m angry", "Ma risayeko chhu", "म रिसाएको छु"],
    ["I’m hungry", "Ma bhok lagyo", "मलाई भोक लागेको छ"]
  ],

  dailyRoutine: [
    ["I wake up at 7", "Ma saat baje uṭchhu", "म सात बजे उठ्छु"],
    ["I brush my teeth", "Ma daant maajchhu", "म दाँत माझ्छु"],
    ["I eat breakfast", "Ma bihaana khanchhu", "म बिहान खान्छु"],
    ["I go to work", "Ma kaam maa janchhu", "म काममा जान्छु"],
    ["I sleep at 10", "Ma das baje sutchhu", "म दस बजे सुत्छु"]
  ],

  askingQuestions: [
    ["What is this?", "Yo ke ho?", "यो के हो?"],
    ["Where is it?", "Yo kahaa chha?", "यो कहाँ छ?"],
    ["When will you come?", "Tapaai kahile aunu hunchha?", "तपाईं कहिले आउनुहुन्छ?"],
    ["Who is he?", "Uha ko ho?", "उहाँ को हो?"],
    ["How much is it?", "Yo kati ho?", "यो कति हो?"]
  ],

  opinions: [
    ["I think so", "Ma sochchhu tyastai", "म सोच्छु त्यस्तै"],
    ["I don’t think so", "Ma tyastai sochdina", "म त्यस्तै सोच्दिन"],
    ["In my opinion", "Mero bichaarmaa", "मेरो विचारमा"],
    ["That’s true", "Yo sahi ho", "यो सही हो"],
    ["You’re right", "Tapaai thik hunuhunchha", "तपाईं ठीक हुनुहुन्छ"]
  ],

  likesDislikes: [
    ["I like it", "Malai yo manparchha", "मलाई यो मन पर्छ"],
    ["I don’t like it", "Malai yo manpardaina", "मलाई यो मन पर्दैन"],
    ["I love music", "Malai sangeet manparchha", "मलाई संगीत मन पर्छ"],
    ["I hate waiting", "Malaai parkhanu manpardaina", "मलाई पर्खनु मन पर्दैन"],
    ["Do you like coffee?", "Ke tapaailaai coffee manparchha?", "के तपाईंलाई कफी मन पर्छ?"]
  ],

  askingHelp: [
    ["Can you help me?", "Ke tapaai malai madat garnu hunchha?", "के तपाईं मलाई मद्दत गर्नुहुन्छ?"],
    ["Please help me", "Kripaya malai madat garnus", "कृपया मलाई मद्दत गर्नुहोस्"],
    ["I need help", "Malai madat chhaahinchha", "मलाई मद्दत चाहिन्छ"],
    ["Don’t worry", "Chinta nagarnus", "चिन्ता नगर्नुस"],
    ["That’s okay", "Thik chha", "ठिक छ"]
  ],

  directions: [
    ["Where is the bus stop?", "Bus stop kahaa chha?", "बस स्टप कहाँ छ?"],
    ["Go straight", "Sidha jaanus", "सिधा जानुस"],
    ["Turn left", "Bayãa tira moḍnus", "बायाँ तिर मोड्नुस"],
    ["Turn right", "Dahãa tira moḍnus", "दायाँ तिर मोड्नुस"],
    ["It’s nearby", "Yo najikai chha", "यो नजिकै छ"]
  ],

  shopping: [
    ["How much is this?", "Yo kati ho?", "यो कति हो?"],
    ["It’s too expensive", "Yo dherai mahango chha", "यो धेरै महँगो छ"],
    ["Can you make it cheaper?", "Sasto dinu saknuhunchha?", "सस्तो दिन सक्नुहुन्छ?"],
    ["I’ll take this", "Ma yo lanchhu", "म यो लिन्छु"],
    ["I’m just looking", "Ma heriraheko chhu", "म हेइरहेको छु"]
  ],

  restaurant: [
    ["I’m hungry", "Ma bhok lagyo", "मलाई भोक लागेको छ"],
    ["Can I see the menu?", "Menu herna sakchhu?", "मेनु हेर्न सक्छु?"],
    ["I’d like some water", "Malai ali paani dinus", "मलाई अलि पानी दिनुस"],
    ["This is delicious", "Yo mitho chha", "यो मिठो छ"],
    ["Bill please", "Hisab dinus", "हिसाब दिनुस"]
  ],

  travel: [
    ["Where are you going?", "Tapaai kahaa jaanu hunchha?", "तपाईं कहाँ जानुहुन्छ?"],
    ["I’m going to Kathmandu", "Ma Kathmandu jaanchhu", "म काठमाडौँ जान्छु"],
    ["How far is it?", "Kati tadha chha?", "कति टाढा छ?"],
    ["Is it safe?", "Yo surakshit chha?", "यो सुरक्षित छ?"],
    ["I need a ticket", "Malai ticket chaahinchha", "मलाई टिकट चाहिन्छ"]
  ],

  health: [
    ["I’m sick", "Ma birami chhu", "म बिरामी छु"],
    ["I have a headache", "Malai tauko dukhyo", "मलाई टाउको दुख्यो"],
    ["I need a doctor", "Malai doctor chaahinchha", "मलाई डाक्टर चाहिन्छ"],
    ["Take rest", "Bishraam garnus", "विश्राम गर्नुस"],
    ["Get well soon", "Chhito nikko hunuhos", "छिटो निको हुनुस"]
  ],

  weather: [
    ["It’s hot today", "Aaja taato chha", "आज तातो छ"],
    ["It’s cold", "Jado chha", "जाडो छ"],
    ["It’s raining", "Pani parchha", "पानी पर्छ"],
    ["It’s sunny", "Ghaam chha", "घाम छ"],
    ["It’s windy", "Hawa chha", "हावा छ"]
  ],

  smallTalk: [
    ["How’s your day?", "Tapaai ko din kasto chha?", "तपाईंको दिन कस्तो छ?"],
    ["What do you do?", "Tapaai ke garnuhunchha?", "तपाईं के गर्नुहुन्छ?"],
    ["That’s interesting", "Yo ramailo chha", "यो रमाइलो छ"],
    ["Really?", "Sachi?", "साँचि?"],
    ["I see", "Thik chha, bujhe", "ठिक छ, बुझे"]
  ],

  goodbyes: [
    ["Goodbye", "Bidaa dinus", "बिदा दिनुस"],
    ["See you soon", "Bhetaula chhito", "भेटौला छिटो"],
    ["Take care", "Khyal garnus", "ख्याल गर्नुस"],
    ["Have a nice day", "Ramro din hos", "राम्रॊ दिन होस्"],
    ["Good night", "Subha raatri", "शुभ रात्री"]
  ]
,

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

"verbs": [
    ["To go", "Jāne", "जानु"],
    ["To come", "Aaune", "आउनु"],
    ["To walk", "Hidnu", "हिँड्नु"],
    ["To run", "Dauranu", "दौडनु"],
    ["To live", "Basnu", "बस्नु"],
    ["To see", "Herne", "हेर्नु"],
    ["To hear", "Sunnu", "सुन्नु"],
    ["To eat", "Khaanu", "खानु"],
    ["To drink", "Pinu", "पिउनु"],
    ["To smell", "Sungnu", "सुँग्नु"],
    ["To speak", "Bholnu", "भोल्नु"],
    ["To write", "Lekhnuhos", "लेख्नुहोस्"],
    ["To read", "Padhna", "पढ्नु"],
    ["To listen", "Sunnu", "सुन्नु"],
    ["To tell", "Bhana", "भन"],
    ["To make/do", "Garnu", "गर्नु"],
    ["To take", "Linu", "लिनु"],
    ["To give", "Dinu", "दिनु"],
    ["To open", "Kholnu", "खोल्नु"],
    ["To close", "Band garnu", "बन्द गर्नु"],
    ["To sleep", "Sutnu", "सुत्नु"],
    ["To wake up", "Uthnu", "उठ्नु"],
    ["To bathe", "Nahāunu", "नुहाउनु"],
    ["To cook", "Pakasnu", "पाकाउनु"],
    ["To study", "Padnu", "पढ्नु"]
  ],



"nouns": [
    ["House", "Ghar", "घर"],
    ["Chair", "Kursi", "कुर्सी"],
    ["Table", "Mez", "मेज"],
    ["Door", "Dhwāra / Darwāja", "ढोका / दरवाजा"],
    ["Window", "Jhyālo", "झ्याल"],
    ["Bed", "Palang", "पलङ"],
    ["Fan", "Pankho", "पंखा"],
    ["Light", "Batti", "बत्ती"],
    ["Book", "Kitāb", "किताब"],
    ["Pen", "Kalam", "कलम"],
    ["Pencil", "Pencil", "पेंसिल"],
    ["Notebook", "Copy", "कपी"],
    ["Eraser", "Rubber", "रबर"],
    ["Bag", "Bāg / Basta", "ब्याग / बस्ता"],
    ["Board", "Board", "बोर्ड"],
    ["Marker", "Marker", "मार्कर"],
    ["Water", "Pāni", "पानी"],
    ["Food", "Khānā", "खाना"],
    ["Milk", "Doodh", "दूध"],
    ["Bread", "Double Roti", "डबल रोटी"],
    ["Salt", "Namak", "नून"],
    ["Sugar", "Chini", "चिनी"],
    ["Oil", "Tel", "तेल"],
    ["Rice", "Bhat / Chāwal", "भात / चामल"],
    ["Teacher", "Adhyāpak", "अध्यापक"],
    ["Student", "Chhātra", "छात्र"],
    ["Mother", "Aama", "आमा"],
    ["Father", "Bābā", "बाबा"],
    ["Brother", "Dai", "दाइ"],
    ["Sister", "Didi", "दिदी"],
    ["Friend", "Mitra", "मित्र"],
    ["Child", "Bālachha", "बालक"]
  ],

 "adjectives":[
    ["Big", "Thulo", "ठूलो"],
    ["Small", "Sano", "सानो"],
    ["Tall", "Lamo", "लामो"],
    ["Short", "Sano", "सानो"],
    ["Huge", "Dairo Thulo", "धेरै ठूलो"],
    ["Beautiful", "Ramro", "राम्रो"],
    ["Ugly", "Kharāb", "खराब"],
    ["Clean", "Saphā", "सफा"],
    ["Dirty", "Fāṅgliyo", "फाङ्ग्लियो"],
    ["Smart", "Bujhdār", "बुझदार"],
    ["Hot", "Tato", "तातो"],
    ["Cold", "Chiso", "चिसो"],
    ["Warm", "Naram", "नरम"],
    ["Cool", "Thando", "ठंडो"],
    ["Freezing", "Jamdai", "जम्दै"],
    ["Happy", "Khusi", "खुसी"],
    ["Sad", "Dukhi", "दुखी"],
    ["Angry", "Risālo", "रिसालो"],
    ["Excited", "Utsahit", "उत्साहित"],
    ["Scared", "Darāyeko", "डराएको"],
    ["Fast", "Chito", "छिटो"],
    ["Slow", "Bistārāi", "बिस्तारै"],
    ["Quick", "Chito", "छिटो"],
    ["Speedy", "Tiwro", "तीव्र"],
    ["Sluggish", "Sust", "सुस्त"]
  ],

"adverbs":[
    ["Quickly", "Chito", "छिटो"],
    ["Slowly", "Bistārāi", "बिस्तारै"],
    ["Carefully", "dhyaan diera", "ध्यान दिएर"],
    ["Loudly", "Jorle", "जोरले"],
    ["Silently", "Chupchap", "चुपचाप"],
    ["Always", "Sadhai", "सधैं"],
    ["Never", "Kabhī pani hoina", "कहिले पनि होइन"],
    ["Often", "Prayaḥ", "प्रायः"],
    ["Sometimes", "Kabhī-kaahi", "कहिले काही"],
    ["Today", "Aaja", "आज"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Tomorrow", "Bholi", "भोली"],
    ["Now", "Ahile", "अहिले"],
    ["Later", "Pachi", "पछि"]
  ],
"relationshipWords": [
  ["Family", "Pariwaar", "परिवार"],
    ["Father", "Buva", "बुवा"],
    ["Mother", "Aama", "आमा"],
    ["Brother (elder)", "Daai / daaju", "दाइ / दाजु"],
    ["Brother (younger)", "Bhaai", "भाइ"],
    ["Sister (elder)", "Didi", "दिदी"],
    ["Sister (younger)", "Bahini", "बहिनी"],
    ["Husband", "Shrimaan", "श्रीमान्"],
    ["Wife", "Shrimati", "श्रीमती"],
    ["Son", "Chhora", "छोरा"],
    ["Daughter", "Chhori", "छोरी"],
],

"Time": [
    ["Sunday", "Aaitabar", "आइतबार"],
    ["Monday", "Sombar", "सोमबार"],
    ["Tuesday", "Mangalbar", "मंगलबार"],
    ["Wednesday", "Budhabar", "बुधबार"],
    ["Thursday", "Bihibar", "बिहिबार"],
    ["Friday", "Shukrabar", "शुक्रबार"],
    ["Saturday", "Sanibar", "शनिबार"],
    ["Hour", "Ghaṇṭa", "घण्टा"],
    ["Minute", "Minute", "मिनेट"],
    ["Second", "Second", "सेकेण्ड"],
    ["Morning", "Bihan", "बिहान"],
    ["Afternoon", "Dopahar", "दोपहर"],
    ["Evening", "Sandhya", "साँझ"],
    ["Night", "Raat", "रात"]
  ]
,
"prepositions":[
    ["On", "Mā", "मा"],
    ["Under", "Tāla", "तल्ला"],
    ["In", "Bhitra", "भित्र"],
    ["Out", "Bahira", "बाहिर"],
    ["Beside", "Tira", "तिर"],
    ["Between", "Bīch", "बीच"],
    ["Near", "Nijikaṭ", "नजिकट"],
    ["Over", "Mūpār", "मुनि"],
    ["Behind", "Pīchhū", "पछाडि"],
    ["In front of", "Sāmnā", "सामना"]
  ]
,
"conjunctions": [
    ["And", "Ra", "र"],
    ["But", "Tara", "तर"],
    ["Or", "Wa", "वा"],
    ["Nor", "Na ta", "न त"],
    ["Yet", "Tara pani", "तर पनि"],
    ["Because", "Kinabhane", "किनभने"],
    ["If", "Yadi", "यदि"],
    ["Although", "Yadi pani", "यद्यपि"],
    ["Since", "Jaba dekhi", "जबदेखि"],
    ["While", "Jaba samma", "जबसम्म"]
  ],

 "question":[
    ["What", "Ke", "के"],
    ["Where", "Kahã", "कहाँ"],
    ["When", "Kahile", "कहिले"],
    ["Who", "Ko", "को"],
    ["Why", "Kin", "किन"],
    ["How", "Kasari", "कसरी"],
    ["Which", "Kun", "कुन"]
  ]
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
